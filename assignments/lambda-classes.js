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
        console.log(`Today we are learning about ${subject}.`);
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
        this.favSubjectsArray = favSubjectsArray;
    }
    listsSubject(){ //Method
        
        for(let i = 0; i < this.favSubjectsArray.length; i++){
            console.log(this.favSubjectsArray[i]);
        }
    }
    PRAssignment(subject) { //Method
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) { //Method
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends person {
    constructor(name, age, location, gradClassName, favInstructor) {
        super(name, age, location);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) { //Method
        console.log(`${name} announces to ${channel}, @channel standt times!`);
    }
    debugsCode(studentObj, subject) { //Method
    console.log(`${name} debugs ${studentObj.names}'s code on ${subject}`);
    }
}

//Objects
runInsructorInfo = () => {
    //New Insructors
    const danLevy = new Insructor(
        `Dan Levy`, 25, `San Fransisco`, `Programming - node.js`, `Javascript`, `I love cats!`
    );

    const joshKnoll = new Insructor(
        `Josh Knoll`, 34, `Chicago`, `CSS Styling`, `CSS`, `I love CSS`
    );

    const michealScott = new Insructor(
        `Micheal Scott`, 45, `Scranton`, `Comedy`, `English`, `Catch you on the Flippity Flip!` 
    );
    
    const studentOfInstructor = new Student(
        `Ben Allen`, 21, `Houston`, `Retail`, `Web21`, ["HTML", "CSS"]
    )
    danLevy.speak();
    danLevy.demo("Ruby on Rails");
    danLevy.grade(studentOfInstructor, `Javascript`);
    joshKnoll.speak();
    joshKnoll.demo("Ruby on Rails");
    joshKnoll.grade(studentOfInstructor, `Javascript`);
    michealScott.speak();
    michealScott.demo("Ruby on Rails");
    michealScott.grade(studentOfInstructor, `Javascript`);
}


runStudentInfo = () => {
    //New Students
    const benAllen = new Student(
        `Ben Allen`, 21, `Houston`, `Retail`, `Web21`, ["HTML", "CSS"]
    );
    
    const mikeNukem = new Student (
        `Mike Nukem`, 49, `Navasota`, `Contruction`, `Web21`, [`CSS`, `Ruby on Rails`]
    );
    
    const joseRamirez = new Student (
        `Jose Ramirez`, 31, `Houston`, `Sales & Marketing`, `Web21`, ["Java", "HTML", "CSS"]
    );
    //Runs Students Info
benAllen.speak();
benAllen.PRAssignment(`JavaScript III`);
benAllen.listsSubject();
benAllen.sprintChallenge("Javascript");
mikeNukem.speak();
mikeNukem.PRAssignment(`JavaScript III`);
mikeNukem.listsSubject();
mikeNukem.sprintChallenge("Javascript");
joseRamirez.speak();
joseRamirez.PRAssignment(`JavaScript III`);
joseRamirez.listsSubject();
joseRamirez.sprintChallenge("Javascript");
}

//Run Functions
runInsructorInfo();
// runStudentInfo();

