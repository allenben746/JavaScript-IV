// CODE here for your Lambda Classes
class person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const Ben = new person("Ben", "21", "Houston");

Ben.speak();