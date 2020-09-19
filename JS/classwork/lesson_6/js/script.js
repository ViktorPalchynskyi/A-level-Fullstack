function askAndValidate(answer) {
   var question = prompt(`Enter your ${answer}`);
   question = question && question.trim();
   if (question === '' || question === null) {
      question = 'Empty';
   };
   return question;
}

var howAreYou = askAndValidate('some');

console.log(howAreYou);


function foo(a = 0, b, c) {

   var a = 0;

   console.log(a + b + c);
}

console.log(foo());