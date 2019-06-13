// CODE here for your Lambda Classes
class person { //This is the Class that all other classes will extend from - Ben Allen
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() { //Method
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Insructor extends person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase){
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) { //Method
        console.log(`Today we are learning about ${subject}`);
    }
    
    grade(studentObj, subject) { //Method
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
    
}
const Ben = new person("Ben", "21", "Houston");
Ben.speak();