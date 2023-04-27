/* if else statement
if (condition) {
    //if true run thes code
} else {
    // if false run this code
}
*/

let num = 5;
if (num > 5){
    console.log("Youre number is greater than five.");
} else {
    if (num === 5){
        console.log("Your number is equal to 5.")
    } else {
        console.log("You number is not greater than five.")
    }
}

let weather = "sunny";

if (weather === "rainy" || weather === "stormy") {
    console.log("Bring an umbrella!");
} else {
    console.log("You don't need an umbrella.");
}
//     condition1 false || condition2 truthy
if (weather === "rainy" || weather === "stormy") {
    console.log("Bring an umbrella!");
} else {
    console.log("You don't need an umbrella.");
}

// Truthy/Falsy
// exists
if ("storming"){
    console.log("Strings have a truthy value");
}
if (!undefined){
    console.log("Undefined is a falsy value");
}

if ("" || null || undefined || false || 0){
    console.log("These are all false or falsy");
}