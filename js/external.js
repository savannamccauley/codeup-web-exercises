// "use strict";
// console.log("hello from external Javascript");
//  alert("Welcome to my Website!");
//
//  let userInput= prompt("Whats your favorite color?");
//  alert(userInput  + " is my favorite color too!");
//
// Exercise 3 #1//
// let pricePerDay = 3;
//
//
// alert("Price per movie, per day is $3!");
//
// let userInput1 = prompt("How many days would you like to rent the little Mermaid?");
// userInput1 = Number(userInput1);
// console.log(userInput1);
//
// let userInput2 = prompt("How many days would you like to rent Brother Bear");
// userInput2 = Number(userInput2);
// console.log(userInput2);
//
// let userInput3 = prompt("How many days would you like to rent Hercules?");
// userInput3 = Number(userInput3)
// console.log(userInput3);
//
// let totalPrice = (userInput1 + userInput2 + userInput3) * pricePerDay;
// console.log(totalPrice)
//
// alert("Your final price for rental is " +  totalPrice);
//
// Exercise 3 #2//
//
// let googlePay = 400 , amazonPay= 380, facebookPay = 350;
//
// let userInput1= prompt("How many hours did you work for Google this week?");
// userInput1 = Number(userInput1);
// console.log(userInput1)
//
// let userInput2= prompt("How many hours did you work for Amazon this week?");
// userInput2 = Number(userInput2);
// console.log(userInput2)
//
// let userInput3= prompt("How many hours did you work for Facebook this week?");
// userInput3 = Number(userInput3);
// console.log(userInput3)
//
// let googleTotal= googlePay * userInput1;
// console.log(googleTotal);
//
// let amazonTotal= amazonPay * userInput2;
// console.log(amazonTotal);
//
// let facebookTotal= facebookPay * userInput3;
// console.log(facebookTotal);
//
// let totalWeeklyPay = googleTotal + amazonTotal + facebookTotal;
// console.log(totalWeeklyPay);
//
// alert(totalWeeklyPay + " is your total weekly pay");

// //Exercise 3 #3//
//
// let classFull= confirm("Is the class full?");
//
//
//
// let classSched = confirm("Any schedule conflicts?");
//
// alert(!classFull &&!classSched);
//
//Exercise 3 #4//

let twoItems = Number(confirm("Did you buy more than 2 items?"));

let offerValid= confirm("Is the offer valid?");

let premM= confirm("Are you a premier member?");

let validOffer = (twoItems && offerValid) || premM;

alert("Valid Offer is " + validOffer);






































