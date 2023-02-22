// class User {                  // classic javascript
//     constructor(email, name){
//         this.email = email;
//         this.name = name
//     }
// }


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

// class User {
//     readonly city: string = "Folkestone"
//     constructor(public email: string, public name: string, ){
//     }

//     get getAppleEmail(): string {   // this is the getter 
//         return `apple${this.email}`
//     }
// }

// private methods
// the below example shows how you cannot access information marked as private if your not using it from within the class
// private deleteToken(){
//     console.log("token deleted");
// }

// Pedro.deleteToken()

class User {
    protected _courseCount = 1 //this can be marked public so oly accesable by the class or, protected only accesable by this class or any that extends this class
    readonly city: string = "Folkestone"
    constructor(public email: string, public name: string, ){
    }

    get getAppleEmail(): string {   // this is the getter 
        return `apple${this.email}`
    }

    get courseCount(): number { // getter method
        return this._courseCount
    }

    set courseCount(courseNum) { // when you know there is not a return do not set to void just leave blank as the information is accessed already in courseCount
        if (courseNum <= 1) {
            throw new Error("course already assigned")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User { // this is how you create a subclass from a class the `extends` keyword does just that, note private data cannot be obtained
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const Pedro = new User("@Pedro", "Pedro")



export{}
