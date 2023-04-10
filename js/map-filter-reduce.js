"use strict"
console.log("hello");
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//1
const lang = users.filter(user =>user.languages.length >= 3);
console.log(lang);
//2
let userHTML = users.map(user=>user.email);

console.log(userHTML);
//3
// let sum = users.yearsOfExperience.reduce((accumulation, currentNumber)=>{
//     return accumulation + currentNumber;
//
// }, 0);

let sum = users.reduce((total, user) => {
        return (total + user.yearsOfExperience)
}, 0)

console.log(sum);

let average = sum/users.length

console.log(average);

//5
let longest = users.reduce((string, user)=>{
    if (user.email.length > string.length){
        return user.email;
    }
    {
        return string
    }
},"");

console.log(longest);

//6
let instrutors = users.reduce((final,user, currentIndex)=>{
    if(currentIndex === users.length -1 ){
        final += user.name + '.'
    }else {

        final += user.name + ", "
    }
    return final
},'Your instructors are: ')

console.log(instrutors);






