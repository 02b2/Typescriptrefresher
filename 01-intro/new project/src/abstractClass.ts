// abstract classes can be used to extend into another class but you cannot create an object from them
// objects can how ever be created from the class that extends that abstract class, like below

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

// abstract method can also be created using hte keyword abstract, possible use case, not implemented yet but requires implementation etc

        abstract getSepia(): void
}


// below snippet common syntax 
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}



// const hc = new Instagram("test", "test")

export{}