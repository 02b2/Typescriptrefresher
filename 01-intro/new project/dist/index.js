"use strict";
// class User {                  // classic javascript
//     constructor(email, name){
//         this.email = email;
//         this.name = name
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// poor code example
// class User {              // note typescript is more precise and requires the values to be declared first
//     email: string
//     name: string
//     city: string = "" //note whe not included in the constructor the value requires an initialiser (string = "")    
//     constructor(email: string , name: string){
//         this.email = email;
//         this.name = name;
//         this.city = "";
//     }
// }
// good code example
// class User {
//     readonly city: string = "Folkestone"
//     constructor(public email: string, public name: string, ){
//     }
// }
// const Pedro = new User("@pedro", "Pedro");
// Pedro.city = "Folkestone";
// getters & setters
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Folkestone";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
}
class User01 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Folkestone";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
    }
}
