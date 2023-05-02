// Parameters are palceholders for data we will pass into a function
// We "pass in" the parameters when we invoke (call) the function

// An example is th console.log(<parameter>)
// gives input to the same set of functionality
// take similiar logic and apply it to different parameters

// function keyword methodName (parameters)
function greet(name){
    console.log(`Hello ${name}`);
}

// greet is the function
// name is the parameter
// ()()parameter, "content" argument
greet("Josh");
greet("Brianne");
greet("Jackson");
greet("Appollo");

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}
add(62, 107)
add(5,8)
add(10000, 10)
add(3, 0.14)

/* function: keyword - indicates that it's a function
    subtract: method name - can be whatever, should relater to the action
    (num1, num2): parameters - defihne input variables
*/
function subtract(num1, num2){
    console.log(num1-num2)
}
// 62, 107: arguments
subtract(62, 107)
subtract(5,8)
subtract(10000, 10)
subtract(3, 0.14)

let person1 = {
    firstName:"Joshua",
    lastName: "Tucker"
};
let person2 = {
    firstName: "Paul",
    lastName: "O'Conner"
};

//Arrow Function Expression
// let greetPerson =  funvtion (person) {}

let greetPerson = (person) => {
    //get the full name
    let fullName = `${person.firstName} ${person.lastName}`;
    //creater my greeeting
    let greeting = `Howdy there, ${fullName}!`;
    //log to the console    
    console.log(greeting);
}
greetPerson(person1)
greetPerson(person2)

