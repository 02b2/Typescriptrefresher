function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
    return signUpUser
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("4")
signUpUser("pedro", "@", "EWDFFF", false)
loginUser("h", "@", false) // or if you do not want to add the boolean define it in the let statement like so isPaid: boolean = true) => {}
export {}