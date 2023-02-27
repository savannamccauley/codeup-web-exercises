"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor (color) {
//     if (color=== "blue") {
//         return("blue is the color of the ocean")
//     } else if (color=== "red") {
//         return ("red is the color of the Golden Gate Bridge")
//     } else if (color==="green"){
//         return("green is the color of money")
//     } else{
//         return("I dont know anything about " + color)
//     }
//
// }
// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let analyzeColor = prompt("What is your favorite color?");
// switch (analyzeColor) {
//     case "blue":
//         console.log("Blue is the color of the sky");
//         break;
//     case "red":
//         console.log("Red is the color of the Golden Gate Bridge");
//         break;
//     case "green":
//         console.log("Green is the color of money");
//         break;
//     default:
//         console.log(analyzeColor + " is not a color I understand");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let analyzeColor = prompt("What is your favorite color?");
// switch (analyzeColor) {
//     case "blue":
//         alert("Blue is the color of the sky");
//         break;
//     case "red":
//         alert("Red is the color of the Golden Gate Bridge");
//         break;
//     case "green":
//         alert("Green is the color of money");
//         break;
//     default:
//         alert(analyzeColor + " is not a color I understand");
//         break;
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return("You dont receive a discount, your total amount today will be " + totalAmount)
    } else if (luckyNumber === 1) {
        return("You will get a 10% discount today, your total will be  " + Number(totalAmount -(.10 * totalAmount)));
    } else if (luckyNumber === 2) {
        return("You will get a 25% discount today, your total will be " + Number(totalAmount -(.25 * totalAmount)));
    } else if (luckyNumber === 3) {
        return("You will get a 35% discount today, your total will be " + Number(totalAmount - (.35 * totalAmount)));
    } else if (luckyNumber === 4) {
        return("You will get a 50% discount today, your total will be " + Number(totalAmount - (.50 * totalAmount)));
    } else if (luckyNumber === 5) {
        return("You will get a 100% discount today, your total will be $0.00 today!")
    } else {
        return("invalid entry");
    }

}
// console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// // Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

let totalBill = prompt("What is your bill total?");
alert("Your lucky number is " + luckyNumber + ". Your price before the discount was " + totalBill + "." + calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// confirm("Would you like to enter a number?");
// let userInputNumber =Number(prompt("Enter a number"));
//
// if (isNaN(userInputNumber)) {
//     alert("invalid entry, try again");
// } else if(userInputNumber % 2 === 0 && !isNaN(userInputNumber)) {
//     alert("The number is even");
//     alert((userInputNumber) + 100);
//     if(userInputNumber> 0) {
//         alert("The number is positive");
//     } else {
//         alert("The number is negative");
//     }
// }
// else if (userInputNumber %2 !==0 && !isNaN(userInputNumber)){
//     alert("The number is odd");
//     alert((userInputNumber) + 100);
//     if(userInputNumber> 0) {
//         alert("The number is positive");
//     } else {
//         alert("The number is negative");
//     }
//
// }

        //Refactoring//
let userConfirm = confirm("Would you like to confirm");
if(userConfirm) {
    let userNum = parseFloat(prompt("Enter a number"));
    alert(evenOdd(userNum));
    alert(add100(userNum));
    alert(posNeg(userNum));
}

function evenOdd(number){
    if (number % 2 ===0) {
        return "Is an even number";
    }else{
        return "Odd Number";
    }
}

function add100(number){
    return number + 100
}

function posNeg(number) {
    if (number > 0) {
        return "Number is positive";
    }else (number < 0)
        return "Number is negative";

}







