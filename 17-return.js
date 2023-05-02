/*  Function defines an action
    Patameter define the Input
    Return defines the output*/

    let consoleReturnValue = console.log("example")
    console.log(consoleReturnValue);
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

    function getFullName(person){
        let fullName = person.firstName + " " + person.lastName;
        // fullName = `${person.firstName} ${person.lastName}`;
        return fullName;
    }
    let fullName = getFullName(person1);
    console.log(fullName);

    console.log(getFullName(person2));

    function add(num1, num2){
        let sum = num1 + num2;
        return sum;
    }
    function subtract(num1, num2){
        return num1 - num2;
    }
    //Block body arrow function (uses curley braces)
    let multiply = (num1, num2) => {
        return num1 * num2;
    }
    //Concise Body arrow function (no curly braces)
    //concise body functions return by default
    let divide = (num1, num2) => num1 / num2;

    let sum = add(5,7)
    console.log("SUM", sum);
    console.log("SUBTRACT", subtract (5,7));
    console.log("MULTIPLY", multiply (5,7));
    console.log("DIVIDE", divide (5,7));
    
    // Constructor Functions
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
/* the new keyword creates a new Person object instance
    news-up an "instance" a specific copy of a type of (person).*/
    let person3 = new Person ("Clarabelle", "McNugget");

let person4 = new Person ("Joan", "Smith");
console.log(person3);

let people = [person1, person2, person3, person4];
console.log(people);

let getLongestName = (names) => {
    let longestName;
    let longestLength = 0;

    for (const name of names){
        if (name.length > longestLength){
            longestName = name;
            longestLength = name.length;
        } else if (name.length === longestLength){
            longestName = [longestName, name].flat();
        }
    }
    return longestName;
}

let fullNames = [];
/* .foreach method loops ocer every item in an array
takes in a callback function (our arrow function below)
*/
people.forEach((person) => {
    let fullName= getFullName(person);
    fullNames.push(fullName);
});

let longestName = getLongestName(fullNames);
console.log(longestName);

let students = ["Braulioooo", "Brianne", "Edwin", "Garrett", "Issac Tierney", "Shelby Shook", ]
let longestStudentName = getLongestName (students);
console.log(longestStudentName)