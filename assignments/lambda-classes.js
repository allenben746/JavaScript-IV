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

class Student extends person {
    constructor(name, age, location, previousBackground, className, favSubjectsArray){
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjectsArray;
    }
    listsSubject(array){ //Method
        for(i=0;i < array.length;i++){
            console.log(array[i]);
        }
    }
    PRAssignment(subject) { //Method
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) { //Method
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManage extends person {
    constructor(name, age, location, gradClassName, favInstructor) {
        super(name, age, location);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) { //Method
        console.log(`${name} announces to ${channel}, @channel standt times!`);
    }
    debugsCode(studentObj, subject) { //Method
    console.log(`${name} debugs ${student.names}'s code on ${subject}`);
    }
}
