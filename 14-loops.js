// Loops allow us to repeat code while a given condition is true
// Strength in creating an object and inserting the data into an array 

// For Loop -> loops for a given amount
/*
for (initial expression; conditionalExpression; incrementExpression) {
    // Body of code to be executed each loop
}
- InitialExpression set the starting value of the loop control variable (iterator)
- ConditionalExpression is evaluated and if true stay in the loop, else break
- incrementExpression updates the iterator
*/

let pets = ["Apollo", "Artemis", "Persephone"];

console.log("Rememeber to pet ")

// i is our iterator
for (let i = 0; i < pets.length; i++) { // i = i + 1
    console.log(i);
    console.log(pets[i]); // shortened is console.log(i, pets[i]);
    console.log(`Don't forget to pet ${pets[i]}.`)
}

// // Loop from 1 - 100
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

// For in loop is good for indexing (the position of data)
let student = {
    name: "Jackson",
    awesome: true,
    weeksExperience: "At least 1",
    hasCamOn: false
};

for (key in student) {
    console.log("KEY", key);
    console.log("VALUE", student[key])
}

// For of Loops can help acess items directly from an array (iterator)
for (const pet of pets) {
    console.log(pet);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (const letter of alphabet) {
    console.log(letter);
}
// F9 will end an infanant loop
// While Loop
// while (conditon) {
        //Body of the loop
// }

let countDown = 100;
while (countDown > 0) { // evaluates first then runs the body
    console.log("tick tock", countDown);
    countDown--; //shorthand of countDown = countDown - 1
}