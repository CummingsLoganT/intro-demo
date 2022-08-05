console.log("Hello World");

//Variable Declaration

let firstName = "Logan";
let age = 32;
const isCool = true;
const data = undefined;
const box = null;

let adult = 18;

//Let's write out some if statements
if (age >= adult){
    console.log("I am an adult.");
} else {
    console.log("I am a child.")
}

const greeting = "Hello ";
const greetUser = greeting + firstName;
console.log(greetUser);

const templateString = `Hello ${firstName}, it is very nice to meet you`
const stringCat = "Hello " + firstName + ", it is very nice to meet you"

console.log (templateString)
console.log(stringCat)