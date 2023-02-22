let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string,
    _id: number
}

type Admin ={
    username: string
    _id: number
}

let pedro: User | Admin = {name: "Pedro", _id: 224}

pedro = {username: "P", _id: 224 }

getDbId(3)
getDbId("244")

// function getDbId(_id: number | string) { // works fine for logging data but not if you want to change the data
//     console.log(`DB id is: ${_id}`);
// } 

function getDbId(_id: number | string) { // check the data type then make the change with an if
    if (typeof _id === "string"){
        _id.toLocaleLowerCase()
    }
} 

// what not to do 

const data: string[] | number[] = [1, 2, 3] // this code creates the problem that it can either be all numbers or all string but not a mix
const data2: (string | number)[] = ["1", 2, 3] // this code allows for a mix by wrapping the string and number in parenthasis,
// any should not be used in place of string, number etc as a short cut, as typescript is used for being more precise about the code, so define all variables correctly
