let greetings: string = "Hello Pedro";
// number
// note number has been defined using keyword `number`, this does not need to be done as typescript will detect the number
// assigned to the userId automatically (number left in place for illustration only)
let userId: number = 22345
// boolean
// note boolen has been defined using keyword `boolean`, this does not need to be done as typescript will detect the boolean
// assigned to the userId automatically (boolean left in place for illustration only)
let isLoggedIn: boolean = false

//any

let hero: string;

function getHero(){
    return "thor"
}

console.log(greetings, userId, isLoggedIn);

export {}

