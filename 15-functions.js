// Functions are reusable moderable chucks of code.
// They define specific actions that can be invoked.
hiMom();
// Parenteses indicate it's a function
//  (1)   (2)
function hiMom(){
    // (3)
    console.log("I'm on TV!");
    console.log("Hi, mom!")
}
//  1: function keyword, this declares that it's a function
//  2: function name, this can be named anything
//  3: function body, the code that gets executed/invoked


// Invoking/Calling a function
hiMom();
hiMom();

// Functions as expressions
//  hello is now the same funtion as hiMom
let hello = hiMom;
hello();

// funtion declatations get hoisted
// function expressions do not get hoisted
let petTheCat = function() {
    console.log("You pet the cat.");
}
petTheCat();

// functions inside objects (methond )= ))
let counter = {
    // key: value
    timesInvoked: 0,
    invoke: function () {
        console.log("You invoked the counter.invoke method.");
        console.log("THIS KEYWORD", this);
        // The "this" keyword refers to the object scope we're inside
        this.timesInvoked++;
    }
}

counter.invoke();
counter.invoke();
counter.invoke();
console.log(counter.timesInvoked);

/* Declare an object that has a firstName and a lastName property inside the object.
Give the object a method that logs to the console the full name ("firstName lastName").
This should be dinamic if the names change. */
// let girlName = ["June", "Cassidy", "Clarabelle"]
// let girlLName = [Joan, Smith, Randy]
// let firstName = 
//     console.log(girlName);
// let lastName = {
    

// }
// function person() {
//     invoke: function () {
//     console.log (girlName),
//     console.log (girlLName)
// }}
// person.invoke();

let person = {
    firstName: "Paul",
    lastName: "O'Connor",
    getFullName: function () {
        let fullName = this.firstName + " " + this.lastName; //concatenation!
        // fullName = `${this.firstName} ${this.lastName}`; //interpolation!
        console.log(fullName);
    }
}
person.getFullName();


// entire folowing is object

//   object name declaration
let banana = {
    //propertyKey: propertyValue 
    //What the object is/looks like   
    isPeeled: false,
    //functionProbertyKey: functionPropertyValue() {}
    //What the object does
    peel: function () {
        // Function body
        isPeeled = true;
    }
}

let pen = {
    lengthIn: 5,
    color: "orange",
    //property
    isOpen: false,
    open: function () {
        this.isOpen = true;
    },
    close: function() {
        this.isOpen = false;
    }}
    pen.open();
    console.log("The pen is open", pen.isOpen);
    
// Arrow Functions ()=>
let write = () => {
    console.log("someExample");

}
// Invoke the function
write();

//Assigning a function to a property of the pen object
pen.jot = write;
pen.jot();