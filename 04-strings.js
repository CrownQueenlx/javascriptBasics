// Strings in JavaScript
let firstName = "Brianne";
const stateName = 'Indiana';
let currentLanguage = "JavaScript";
let emptyString = '';

// Example alternating string ends
let phrase = "I'm not tired, you're tired.";
let otherPhrase = `The backticks work, too! They take longer to process because of the evaluation step.`;

// Escape Sequences
let escapedString = 'I just can\'t believe it\'s not butter.';
let withAQuote = "The doctor said, \"Where is the patient?\"";

// Dynamic Strings, Template Literals
let lastName = "Barlow";
let id = 8752163

// String Interpolation (backticks take longer to process because of the evaluation step)
let greeting = `Welcome, ${firstName} ${lastName}! Your id is ${id}.`;
console.log(greeting);

// String Methods / Functionality

//Indexing             01234
const daysOfTheWeek = `MTWRF`;
let firstDay = daysOfTheWeek[0];
console.log(firstDay);

let secondDay = daysOfTheWeek[1];
console.log(secondDay);

let thirdDay = daysOfTheWeek[2];
console.log(thirdDay);