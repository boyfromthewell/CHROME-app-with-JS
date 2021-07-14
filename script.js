const a=5; // var->쓰지말기(오래됨)
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

const player ={ //object 생성
    name:"sooon",
    points:10,
    fat:false,
};
console.log(player);
console.log(player.name);

player.fat=true;
player.lastName="kwon";
console.log(player);

function sayHello(nameOfPerson, age){ //함수 활용
    console.log("hello my name is "+ nameOfPerson+" and i'm " +age);
}

sayHello("soon", 12);
sayHello("kwon", 20);

function plus(first, second){
    console.log(a+b);
}

plus(8,10);

const playerr={
    name: "nico",
    sayHello: function(otherPersonName)
    {
        console.log("hello" + otherPersonName+" nice to meet you");
    }
};

console.log(playerr.name);
playerr.sayHello("yoon");

const calculator={
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    div: function(a,b){
        return a/b;
    },
    power: function(a,b){
        console.log(a**b);
    }
};

calculator.add(1,2);
calculator.minus(3,2);
calculator.div(5,2);
calculator.power(2,5);
//return
const age=96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge=calculateKrAge(age);

console.log(krAge);

const divResult=calculator.div(10,2);
//conditionals
const age1=parseInt(prompt("how old are you")); //prompt->오래된 함수 (왠만하면 사용 x)

if(isNaN(age1)||age1<0){
    console.log("please write a real positive number");
}
else if(age1<18){
    console.log("you are too young");
}
else if (age1>=18&&age1<=50){
    console.log("you can drink");
}
else if (age1>50&&age1<=80){
    console.log("you should exercise");
}
else if(age1>80){
    console.log("you can do whatever you want");
} //js 는 이퀄 낫이퀄 연산자 ===, !== (==, != 아님!)