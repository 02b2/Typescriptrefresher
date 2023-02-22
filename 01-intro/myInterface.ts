interface User {
    readonly db_id: number// note the readonly which typescript will make this variable/value uneditable
    email: string,
    _id: number,
    googleId?: string // note the ? which means its an optional input
    startTrial (): string //adding a method 
    getCoupon(couponname: string, value: number): number 
}

const pedro: User = {db_id: 877, email: "@", _id: 222,
startTrial: () => {
    return "Trial started" // the return value of the method above note the string value
}}

getCoupon: (name: "Golden Ticket", off: 10) => { // note the name in the paranthensis to name the coupon
    return 10                                    // also note two values, name = coupon name/ value = any value + number
}

export{}