function createStore(reducer) {
   let cbs = [];
   let state = reducer(undefined, {});

   function dispatch(action) {
      if (typeof action === 'function') {
         action(dispatch);
      }
      let stateAfter = reducer(state, action);
      if (stateAfter != state) {
         state = stateAfter;
         for (let cd of cbs) cd();
      }
   }
   return {
      getState() {
         return state;
      },
      dispatch,
      subscribe(cd) {
         cbs.push(cd);
         return () => {
            cbs = cbs.filter(someElem => someElem !== cd);
         }
      }
   };
}

const store1 = createStore((state = {
   status: '',
   payload: undefined,
   error: undefined
},
   { type, status, payload, error }) => {
   if (type === 'PROMISE') {
      return { status, payload, error };
   }

   return state;
});

const actionPending = () => ({ type: 'PROMISE', status: 'PENDING' });
const actionResolved = (payload) => ({ type: 'PROMISE', status: 'RESOLVED', payload });
const actionRejeced = (error) => ({ type: 'PROMISE', status: 'REJECTED', error });

const actionPromise = p => async dispatch => {
   try {
      dispatch(actionPending());
      let result = await p;
      dispatch(actionPromise(result));
      return result;
   }
   catch (e) {
      dispatch(actionRejeced(e));
   }
};




store1.dispatch(actionPending());

store1.subscribe(() => console.log(store1.getState()));

fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => store1.dispatch(actionResolved(json)));


const actionFunct = actionPromise(fetch('https://jsonplaceholder.typicode.com/todos/1'));
console.log(actionFunct());