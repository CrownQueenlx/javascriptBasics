let red = "Red";
let orange = "Orange";
let yellow = "Yellow";
let green = "Green";
let blue = "Blue";
let indigo = "Indigo";
let violet = "Violet";

// Arrays hold multiple items in one variable
// Arrays use [] to wrap around their items
let colors = [red, orange, yellow, green, blue, indigo, violet];
console.log(colors);

let raceWinners = [33, 72, 64]; // Array of numbers
console.log(raceWinners);

// Arrays can hold any type of item
//            Index:    0,      1,    2 
let randomThings = ["Broccoli", 37, colors, true, false];
console.log("Random Things:", randomThings);

//Indexing
let broc = randomThings[0]; //First item n the array randomThings
console.log(broc);

// More Practice
/*
    let dogs = ["Shiba Inu", "Husky", "Corgi", "Great Dane"];
    let cats = ["Maine Coon", "Bengal", "Siamese", "Sphynx"];
    let birds = ["African Grey Parrot", "Canary", "Macaw", "Finch"];
    let fish = ["Goldfish", "Neon Tetra", "Betta", "Guppy"];
*/
let dogs = ["Shiba Inu", "Husky", "Corgi", "Great Dane"];
let cats = ["Maine Coon", "Bengal", "Siamese", "Sphynx"];
let birds = ["African Grey Parrot", "Canary", "Macaw", "Finch"];
let fish = ["Goldfish", "Neon Tetra", "Betta", "Guppy"];

console.log(dogs[0]);
let bengal = (cats[1]);
console.log(bengal);
let gup = fish[3];
console.log(gup);
let parrot = birds[0];
console.log(parrot);

// This is a multidimensional Array (An array of arrays)
let animals = [dogs, cats, birds, fish];
console.log(animals);

console.log(animals[1][2]);
/*
    let cats = animals [1]; -> returns an array
    let siamese = cats [2]; ->  index into the first array
*/

// Array Methods
// A method is an action that can be perforemed on an object (array)

let birdsLength = birds.length; //length is a property
console.log(birdsLength);

// .shift() removes the first item from the aarray and returns it
let firstItem = birds.shift();
console.log("After shift:", birds.length);

console.log(firstItem);
console.log(birds);

// .unshift() adds an item to the beginning of an array
birds.unshift("Robin");
console.log(birds);

// .pop() is like shift but for the end of the array
let lastbird = birds.pop();
console.log(lastbird);
console.log(birds);

// .push() will add an item at the end of an array
birds.push("Pigeons");
birds.push("Eagles", "Flamingos");
console.log(birds);

// .reverse() will reverse the order of the array
birds.reverse();
console.log(birds);

// .slice() will pick a starting index or start at 0,
// it will copy a selection of an array (not modify)
let slice = birds.slice(1,3);
console.log(slice);
//  0         1          2        3         4           5
[ 'Robin', 'Canary', 'Macaw', 'Pigeons', 'Eagles', 'Flamingos' ]

// .splice() will remove a specified section from an array
// can also replace elements (modifies the array)
// index location, remove item from location

//      0       1           2       3       4       5
//  ['Hawk', 'Eagle', 'Pigeon', 'Macaw', 'Canary', 'Robin']
birds.splice(4,2);
console.log(birds);

birds.splice(3,2, "Freedom Bird")
console.log(birds);

// .includes() check to see if an item is in an array
let includesHawk = birds.includes("Hawk");
let includesEagle = birds.includes("Eagle");
console.log(includesEagle, includesHawk);

// .join() will combine the items in an array into one strng
// can also add a "separator" to add between the items
let listOfBirds = birds.join("\n"); //"new line"
console.log(listOfBirds);