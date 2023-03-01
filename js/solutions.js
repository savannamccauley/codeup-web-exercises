"use strict"
// A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
//     chickens = 2 legs
//     //cows = 4 legs
//     //pigs = 4 legs

// // The farmer has counted his animals, and he gives you a subtotal for each species. You have to implement a function named animal that returns the total number of legs of all the animals.
// function animals (x,y,z){
//     let chickens= x* 2;
//     let cows = y * 4;
//     let pigs = z * 4;
//     return Number(chickens + cows + pigs)
//
// }
// console.log(animals(1,1,1));
//
// //walk through;
// function animal(chickenNum,cowNum,pigNum){
//     return (chickenNum * 2) + (cowNum * 4)+ (pigNum * 4);
// }
//
// // Define a function named findPerimeter that takes in length and width and finds the perimeter of a rectangle.
//
// function findPerimeter (length,width){
//     return (length * 2) + (width * 2)
// }
//
// console.log(findPerimeter(2, 2));
//
//
// //Define a function named concatName. Given two strings, firstName and lastName, return a single string in the format "last, first".
// function concatName (x,y){
//     let firstName = "Savanna";
//     let lastName = "McCauley, ";
//     return lastName + firstName
// }
//
// console.log(concatName());
//
// //walkthough
// function concatN (firstName, lastName){
//     return lastName + "," + firstName;
// }
//
//
//
// //Write a function named triArea that takes in 2 inputs, the base and height of a triangle and return its area.
// // function triArea (x,y){
// //
// //     return (x * y)/2 ;
// // }
// //
// // console.log(triArea(8, 11));
//
// //walkthrough
//
// function triArea (base,height){
//     return (base * height) / 2
// }
//
// //Define a function named lessThan100. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// function lessThan100 (x,y){
//     let sum = x + y
//     if (sum < 100){
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(lessThan100(10, 10));
//
//
// //Write a function named makesTen that takes two inputs. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// function makesTen(a,b){
//     let sum = a + b ;
//     if (sum === 10){
//         return true
//     } else if (a === 10 || b=== 10 ){
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(makesTen(3, 3));
//
//
// //You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, create a function named points that will find the final points for the team and return that value.
// function points (x,y){
//     let twoPoint = x * 2;
//     let threePoint = y * 3;
//     return twoPoint + threePoint
// }
//
// console.log(points(8, 5));
//
// //walk through
//
// //Define a function named Convert that takes in minutes as an input and will converts those minutes into seconds.
// function convert (x){
//     let oneMinToSec = x * 60
//     return (x + " minutes is " + oneMinToSec);
// }
//
// console.log(convert(10));
//
// function converts (minutes){
//     return minutes * 60
// }
//
// //Write a function named remained that takes two numbers as inputs. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// function remained(num1, num2){
//     return num1 % num2;
// }
//
//
// //Write a function named getFisrtValue that takes an array containing only numbers and return the first element
// function getFirstValue(array){
//     let numArray = [1,2,3,4,5]
//     return
//
// }

//walkthrough
// function getFirstArray(array){
//     let invalid = false;
//     array.forEach(function(item) {
//         if (isNaN(item)) {
//             console.log("invalid")
//             invalid = true
//         }
//     })
//
//         if (invalid) {
//             return "value is not a number, invalid array"
//         } else {
//             return array[0];
//         }
// }

function getFisrtValue(arr){
    let invalid = false;
    arr.forEach(function (item){
        if(isNaN(item)){
            console.log("invalid");
            invalid = true;
        }
    })

    if(invalid){
        return "value is not a number, invalid array"
    }else {
        return arr[0];
    }
}

console.log(getFisrtValue([1, 2, 3, 4]));
console.log(getFisrtValue(["Savanna", 1, 2]));

