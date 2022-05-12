console.log("working...")


// let element = document.createElement("div");
// element.className = "child";
// element.innerHTML = `<b>javascript</b>`;
// console.log(element);
// document.querySelector("div#parent").appendChild(element);


// let element1 = document.createElement("img");
// element1.setAttribute("src","./download.png");
// console.log(element1);
// document.querySelector("div#parent").appendChild(element1);


a();

function a(){
    console.log("i am fn a")
}
//function supports hoisting
//function body is called function statement/definition.
//fn statement support hoisting, i.e. calling the function even before declaring the function.

var b = function(){
    console.log("i am fn b");
    //since here this fn is anonymous, it won't support hoisting, function expression don't support hoisting.
}
console.log(b);
b();
//a function expression is a unnamed fn assigned to the variable , the variable recevies the fn defn, which in turn can call the function by calling the variable name. {a()}.

{
    const d = function(){
        console.log("block scope");
    }
    d(); // gives the o/p.
}
//d(); //will throw not defined error as not in the scope 
//the fn can only be called inside the scope and not outside the scope.


//arrow function //introduce in ES6(2015)
let f = () => {
    console.log("i am a fn f");
}
f();



//first class function / first class citizens - the fn can be passed as value into another fn or can be returned from another fn a values. this unique features of fns called First class function or first class citizen.

//higher order functions (HOF) - the fn which accept the FCF's or return them are  called as higher order functions.

let g = function(param){ //HOF
    console.log("i am fn g");
    console.log(param);
    param();
}

function h(){ //FCF
    console.log("i am fn h");
}

g(h);// h is a function passed as an argument.


let i = function(){//HOF
    return function j(){ //FCF
        console.log("i am fn j");
    }
}
let returnVal = i();
console.log(returnVal);

// setTimeout(() => {
//     console.log("Hi I am inside a callback function");
// }, 4000);


const sayHi = (nameOfFriend) => {//Callback function
    console.log("Hello",nameOfFriend);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);//sayHi(friend);
}

greeting("Bala",sayHi);

//function sayHi(arg3){//arg3=Bala
    // log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
    // arg1 = "Bala",
    // arg2 = sayHi,
    // arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)
