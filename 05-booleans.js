// Boolean true/false Data Type examples

let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// Logical Comparison/Relational Operators

console.log("EQUALS:", 2 == '2'); //value equality
console.log("STRICT EQUALS:", 2 === '2'); // value and type equality
console.log("INEQUALITY:", 3 != '3'); // Values are not equal
console.log("STRICT INEQUALITY:", 3 !== '3'); //Value & Type are not equal (type coersion)

console.log("GREATER THAN:", 5 > 5); //First value is greater than the second
console.log("GREATER THAN or EQUALS:", 5 >= 5); //First value is greater/equal to the second
console.log("LESS THAN:", 7 < 8); // 7 is less than 8, true
console.log("LESS THAN:", 8 <= 8); // 8 is less than or equal to 8, true

// Extra examples
let numOne = 5;
let numTwo = 4;

let twoGreaterThanOne = numTwo > numOne;
let savedPassword = "HiMomI'mOnTV!";
let typedPassword = "HiMomI'mOnTV@"

let isCorrecPassword = savedPassword === typedPassword;
console.log("You hace the correct password:", isCorrecPassword);

// Logical Operators


// Logical AND &&
// Logical OR || aka pipes
// Logical NOT ! aka bang (Inverse operator)

let x = true;
let y = false;
console.log(x && y); //True and False = False, Sunny AND Warm = is nice out
console.log(x || y); // True or False = True, Rainy OR cold = not going out
console.log(!x); // Not True = False = not food  = not eating it
console.log(!y); // Not False = True, not not food = eat it