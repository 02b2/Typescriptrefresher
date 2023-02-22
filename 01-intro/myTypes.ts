
// type User = {
// 	name: string;
// 	email: string;
// 	isActive: boolean
// }



// function createUser(user: User): User {
//     return {name: "", email: "", isActive: false}
// }

// createUser({name: "", email: "", isActive: false})


type User = {
    readonly _id: string //the readonly is a typescript keyword and stops the value from being changed
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number // note the question mark which allows this to be an optional input/variable
}

// user variable

let myUser: User = {
    _id: "1234",
    name: "pedro",
    email: "@",
    isActive: false
}

// note the example below for combining types and making additions to those combinations 

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "@"
//myUser._id = "ddd"



export{}
