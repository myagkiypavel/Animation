// function foo(a, b){
//   return a * b
// }

// const bar = foo.bind(null,2)
// bar(2)
// console.log(bar(2));

// function foo(){console.log(this)}
// foo.call(null)

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// var a = 1, b = function a(x){x && a(--x)};
// console.log(a);

// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(() =>{
//   let name = 'Peter';
//   printName();
// }, 1000)

// "use strict";

// function getThis(){
//   return this;
// }

// console.log(getThis());

// const details = {
//   name: 'John',
// }

// function getMessage(message){
//   return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']));

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// let f = function g(){return 23;};

// console.log(typeof g());

// "use strict";

// const details = {
//   message: 'Hello',
// }

// function getMessage(){
//   return this.message;
// }

// console.log(getMessage.call(details));

// var name = 'John';

// var user = {
//   name: 'Peter',
//   printMessage(){
//     console.log(`Hello, ${this.name}`);
//   }
// }

// var printMessage = user.printMessage;
// printMessage();

// console.log(message);
// var message='Hello';

// const foo = bar();
// const number = 2

// function bar(){return number}

// let name = 'John';

// function printName(){
//   let name = 'Peter';
//   console.log(name);
// }

// printName();

console.log(

(
  function(a){
    arguments[0] = 10;
    return a
  }
)(5)
);