const a=5; //
const b=2; // const = 값 변경 불가, let = 값 변경 가능
let myName="soonyong"; //string

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " +myName);

myName="kwon";
console.log("hello " +myName);

const c= true;

const dayOfWeek=["mon", "tue", "wed", "thu", "fri", "sat"]; //array

console.log(dayOfWeek[5]); //index 불러오기

dayOfWeek.push("sun"); // 값 추가

console.log(dayOfWeek);