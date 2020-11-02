function createStore(reducer) {
   let cbs = [];
   let state = reducer(undefined, {});
   return {
      getState() {
         return state;
      },
      dispatch(action) {
         let stateAfter = reducer(state, action);
         if (stateAfter != state) {
            state = stateAfter;
            for (let cd of cbs) {
               cd();
            }
         }
      },
      subscribe(cd) {
         cbs.push(cd);
      }
   };
}

const store = createStore((state = { counter: 0 }, action) => {
   if (action.type === 'INC') {
      return { counter: state.counter + 1 };
   }
   if (action.type === 'DEC') {
      return { counter: state.counter - 1 };
   }
   return state;
});

function btn(parent = document.body) {
   let button = document.createElement('button')
   button.onclick = () => store.dispatch({ type: 'INC' });
   const cb = () => button.innerText = store.getState().counter;
   cb();
   store.subscribe(cb);
   parent.append(button);
}

function bigTablo(parent = document.body) {
   let h1 = document.createElement('button');
   h1.style.fontSize = '5rem';
   h1.onclick = () => store.dispatch({ type: 'DEC' });

   const cb = () => h1.innerText = store.getState().counter;
   cb();
   store.subscribe(cb);
   parent.append(h1);
}

store.subscribe(() => console.log(store.getState()));
store.subscribe(() => console.log('2', store.getState()));

console.log(store.getState());

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });

btn();
btn();
btn();
btn();
btn();

bigTablo();
bigTablo();
bigTablo();
bigTablo();