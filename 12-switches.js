// Switch Statements / Switch Cases
/**
 *  Strength of less verbose in setting common output values
 * 
 *  switch (valueToAssess) {
 *  case valueX:
 *      //code block to execute
 *      break;
 *  case valueY:
    // code block to execute
        break;
    default:
        // code for when no cases match break;    
 * }
*/

let ingredent = "salmon";


// Slightly faster than if statements //
//     "expression"
switch (ingredent.toLowerCase()) {
    case "ground beef":
        // if ingredient matches "Ground Beef"
        console.log ("Let's make burgers.");
        break;
    case "fish":
    case "cod":
    // case "Salmon":
    // case "SALMON":
    case "salmon":
        console.log("Let's make grilled fish.");
        break;
    case "chicken":
        console.log("Let's make chicken tacos.");
        break;
    default: // Catch all else
        console.log("We'll have to get groceries.");
        break;
}

// One difference from if statements, switches can stack cases