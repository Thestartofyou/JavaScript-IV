class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.speciality = attrs.speciality;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(
      `Hello my name is ${this.name} and today we are learning about ${subject} where subject is the param passed in.`
    );
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  changeGrade(student) {
    const randomPoint = Math.ceil((Math.random() * 100) / 5); // Random number between 0 to 20
    const randomOperation = Math.round(Math.random()) ? true : false;
    student.grade = randomOperation
      ? student.grade + randomPoint // add if true
      : student.grade - randomPoint; // subtract if false
    const message = randomOperation
      ? `${this.name} added ${randomPoint} points to ${student.name}'s grade. Final grade is ${student.grade}` // addition message
      : `${this.name} subtracted ${randomPoint} points from ${student.name}'s grade. Final grade is ${student.grade}`; // subtraction message
    console.log(message);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
  }

  listSubjects() {
    console.log(`${this.name}'s favorite topics are:`);
    return this.favSubjects.map((item, index) =>
      console.log(`${index + 1}.`, item)
    );
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    const gradMessage =
      this.grade < 70
        ? `${this.name}'s grade is ${this.grade}, ergo not ready for graduation.`
        : `Congratulations, ${this.name}! Your grade ${this.grade} helps you graduate this year!`;
    console.log(gradMessage);
  }
}

class TeamLead extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const austin = new Instructor({
  name: "Austin Lynes",
  age: "33",
  location: "Somewhere",
  speciality: "HTML, CSS, and JS",
  favLanguage: "CSS",
  catchPhrase: "Allright guys"
});

const brit = new Instructor({
  name: "Brit Hemming",
  age: "25",
  location: "house",
  speciality: "Js",
  favLanguage: "Assembly",
  catchPhrase: "My reign begins"
});

const jess = new TeamLead({
  name: "jess",
  age: "27",
  location: "Seattle",
  speciality: "R",
  favLanguage: "Flutter",
  catchPhrase: "How is everybody doing",
  gradClassName: "WEB100",
  favInstructor: "Austin"
});

const james = new TeamLead({
  name: "James",
  age: "23",
  location: "USA",
  speciality: "LESS",
  favLanguage: "Java",
  catchPhrase: "Hello everyone",
  gradClassName: "WEB101",
  favInstructor: "Pace Ellsworth"
});

const leif = new Student({
  name: "Leif Gerchberg",
  age: "23",
  location: "Longmeadow",
  previousBackground: "life",
  className: "WEB10",
  favSubjects: ["Javascript", "React", "Flutter"],
  grade: 70
});

const pedro = new Student({
  name: "pedro",
  age: "25",
  location: "Culver City",
  previousBackground: "Engineer",
  className: "WEBPT12",
  favSubjects: ["HTML", "CSS", "LESS", "Javascript"],
  grade: 75
});

austin.demo("HTML");
brit.grade(leif, "Javascript");
jess.demo("Java");
james.grade(pedro, "LESS");

pedro.listSubjects();
leif.listSubjects();
pedro.PRAssignment("React");
leif.PRAssignment("Javascript");
pedro.sprintChallenge("HTML");
leif.sprintChallenge("CSS");


austin.changeGrade(leif);

leif.graduate();