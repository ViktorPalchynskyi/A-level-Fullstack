const person = {
   name: 'Vityan',
   sayHi: function () {
      alert(`Hi.My name is ${this.name}`)
      console.log(this.name);
   }
};

// person.sayHi();

const genRandom = () => Math.floor(Math.random() * 100);

console.log(genRandom());

let obj = {
   name: 'Vasayn'
};

console.log(obj.name);

let chelik = {
   name: 'Shurik',
   sayKu: function () {
      console.log(`Ku. My name is ${this.name}`);
   }
}

chelik.sayKu();