"use strict";
exports.__esModule = true;
var greetings = "Hello Pedro";
// number
// note number has been defined using keyword `number`, this does not need to be done as typescript will detect the number
// assigned to the userId automatically (number left in place for illustration only)
var userId = 22345;
// boolean
// note boolen has been defined using keyword `boolean`, this does not need to be done as typescript will detect the boolean
// assigned to the userId automatically (boolean left in place for illustration only)
var isLoggedIn = false;
//any
var hero;
function getHero() {
    return "thor";
}
console.log(greetings, userId, isLoggedIn);
