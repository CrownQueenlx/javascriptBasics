// JavaScript Variable Declaration
//declare the need of a variable
var myFirstVariable; //camelCasing

// Initialization
var patientId; //declaring the variable
patientId = 120024; // initializing the variable
console.log("Lastname:", patientId);

var banana = lastName; // value type
console.log("Banana:", banana);

var lastName; // declare
lastName = "Tucker"; // initialize
console.log("Lastname:", lastName);

// re-initialize (reassigning)
lastName = "Slegers";
console.log(lastName);

// Var and Hoisting
programmer = "Ada Lovelace"; //initialize
var programmer; //declare
console.log("Programmer:", programmer);

// Let and Hoisting
let jsVersion; //declared
jsVersion = "es6"; //access
console.log("Let:", jsVersion);
//"let" doesn't get initialized in the same way as "var", it has to be declared before it can be initialized

//Const and Re-initialization
const humansBestFriend = "God";
// humansBestFriend = "dog";
// Cannot reinitialize a const variables as it's constant