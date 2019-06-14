// CODE here for your Lambda Classes
class Person { //This is the Class that all other classes will extend from - Ben Allen
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() { //Method
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Insructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) { //Method
        console.log(`Today we are learning about ${subject}.`);
    }
    
    grade(studentObj, subject) { //Method
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
    
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjectsArray = attributes.favSubjectsArray;
    }
    listsSubject(){ //Method
        console.log('My favorite subjects are:');
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

class ProjectManager extends Person {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) { //Method
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(studentObj, subject) { //Method
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}
console.log(`*************Students***************`)
//New Students
const benAllen = new Student({
    name:`Ben Allen`,
    age:21,
    location:`Houston`,
    previousBackground:`Retail`,
    className:`Web21`,
    favSubjectsArray:["HTML", "CSS"]
});
        benAllen.speak();
        benAllen.listsSubject();
        benAllen.PRAssignment(`Javascript III`);
        benAllen.sprintChallenge(`Javascript III`);
        console.log(`----------------------`)
const mikeNukem = new Student({
    name:`Mike Nukem`,
    age:49,
    location:`Navasota`,
    previousBackground:`Contruction`,
    className:`Web21`,
    favSubjectsArray:["CSS", "Ruby on Rails"]
});
        mikeNukem.speak();
        mikeNukem.listsSubject();
        mikeNukem.PRAssignment(`Javascript III`);
        mikeNukem.sprintChallenge(`Javascript III`);
        console.log(`----------------------`)
const joseRamirez = new Student({
    name:`Jose Ramirez`,
    age:31,
    location:`Houston`,
    previousBackground:`Sales & Marketing`,
    className:`Web21`,
    favSubjectsArray:["HTML", "Java"]
});
        joseRamirez.speak();
        joseRamirez.listsSubject();
        joseRamirez.PRAssignment(`Ruby on Rails`);
        joseRamirez.sprintChallenge(`Javascript III`);
console.log(`*************Instructors***************`)
//Instructors
const danLevy = new Insructor({
    name: `Dan Levy`,
    age: 25, 
    location: `San Fransisco`,
    specialty: `Programming - node.js`,
    favLanguage :`Javascript`,
    catchPhrase: `I love cats!`
});
        danLevy.speak();
        danLevy.demo("Javascript");
        danLevy.grade(mikeNukem, `HTML`);
        console.log(`----------------------`)
const joshKnoll = new Insructor({
    name:`Josh Knoll`,
     age:34,
    location:`Chicago`,
    specialty:`CSS Styling`,
    favLanguage:`CSS`,
    catchPhrase:`I love CSS`
});
        joshKnoll.speak();
        joshKnoll.demo("CSS");
        joshKnoll.grade(mikeNukem, `Ruby on Rails`);
        console.log(`----------------------`)
const michealScott = new Insructor({
    name:`Micheal Scott`,
    agr:45,
    location:`Scranton`,
    specialty:`Comedy`,
    favLanguage:`English`,
    catchPhrase:`Catch you on the Flippity Flip!` 
});
        michealScott.speak();
        michealScott.demo("CSS");
        michealScott.grade(mikeNukem, `Ruby on Rails`);
console.log(`*************PMs***************`)
//PMs
const christianIpanaque = new ProjectManager({
    name:`Christian Ipanaque`,
    age:`25`,
    location:`Seattle`,
    gradClassName:`WEB7`,
    favInstructor:`Dan Levy`
});
        christianIpanaque.speak();
        christianIpanaque.standUp(`Web21`);
        christianIpanaque.debugsCode(benAllen, `CSS`);
        console.log(`----------------------`)
const marySabol = new ProjectManager({
    name:`Mary Sabol`,
    age:`21`,
    location:`LA`,
    gradClassName:`Web18`,
    favInstructor:`Dan Levy`
});
        marySabol.speak();
        marySabol.standUp(`Web20`);
        marySabol.debugsCode(joseRamirez, `Javascript`);
        console.log(`----------------------`)
const angelaMartin = new ProjectManager({
    name:`Angela Martin`,
    age:`42`,
    location:`Scranton`,
    gradClassName:`WEB4`,
    favInstructor:`Dan Levy`
});
angelaMartin.speak();
angelaMartin.standUp(`Web19`);
angelaMartin.debugsCode(mikeNukem, `React`);
console.log(`****************************`)
