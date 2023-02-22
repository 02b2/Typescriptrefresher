const superHeros: string[] = [] // defines an array of type string then creates and empty array
const heroPower: Array<number> = [] // this also defines an array of type string and creates an empty array but slightly different syntax

type User = { // creates a data type of type User to be used in a function
    name: string
    isActive: boolean
}

const allUsers: User[] = [] // an array of users

const MLModels: number [] [] = [ // 2 arrays of data within one array,
    [255, 255, 255],
    [12, 12, 12]
]



superHeros.push("superman")
heroPower.push(2)

allUsers.push({name: "", isActive: true}) // pushing a value to the type using an object defined by {} which must be populated with the type data

export{}