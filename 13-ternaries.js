// Ternaries, or Conditional Operators
// condition ? code to run if true : code to run if false;

/*
condition
    ? true code
    : false code;

*/

let gummyBears = 0;

if (gummyBears > 0) {
    console.log ("I'm ging to eat so many gummy bears!");
}else {
    console.log("I'm sad.");
}

gummyBears > 5  // ? or colon are the operators in this condition
    ? console.log("I'm going to eat gummy bears.")  //True
    : console.log("Issac ate my gummy bears. :("); //False

// Passing code to a variable//
let isLeaving = false;
//            condition ? true       : false    //
let message = isLeaving ? "Goodbye!" : "Hello, glad to have you.";
console.log(message);

let num = 8;

message = (num > 5) 
    ? "Your number is greater than 5."
    : (num === 5)
        ? "Your number equals 5."
        : "Your number is less than 5.";

console.log(message);