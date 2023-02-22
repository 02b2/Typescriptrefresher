const score: Array<number> = []

const names:Array<string> = []


// the below function allows the return of a number and a boolean but what if another value is required, the code would be very long and cumbersome
// there must be a better way
function indentityOne(val: boolean | number): boolean | number{
    return val
}


// the below example works but all definition of the informtaion type has been lost due to the keyword any, so it could return any value string etc etc
function indentityTwo(val: any): any{
    return val
}

// the below example fixes this problem by the keyword type, now the return value will be set, or logged to what ever the input is,
// so if a number is input typescript will automatically only return a number and so on
function indentityThree<Type>(val: Type): Type{
    return val
}

// use case, when we pass information to the above function with an object it will automatically return that type ie string, number, boolean
indentityThree("3")



export {}