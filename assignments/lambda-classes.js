// CODE here for your Lambda Classes
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
        this.grade < 69
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
  
  const grace = new Instructor({
    name: "grace hemming",
    age: "33",
    location: "Somewhere",
    speciality: "HTML, CSS, and JS",
    favLanguage: "CSS",
    catchPhrase: "Allright guys"
  });
  
  const rolf = new Instructor({
    name: "rolf",
    age: "66",
    location: "His Kingdom",
    speciality: "C#",
    favLanguage: "Assembly",
    catchPhrase: "My reign begins"
  });
  
  const siris = new TeamLead({
    name: "siris",
    age: "27",
    location: "Seattle",
    speciality: "Redux",
    favLanguage: "React",
    catchPhrase: "How is everybody doing",
    gradClassName: "WEB100",
    favInstructor: "Pace Ellsworth"
  });
  
  const nasty = new TeamLead({
    name: "nasty",
    age: "23",
    location: "USA",
    speciality: "LESS",
    favLanguage: "Java",
    catchPhrase: "Hello everyone",
    gradClassName: "WEB101",
    favInstructor: "Pace Ellsworth"
  });
  
  const Leif = new Student({
    name: "LEif Gerchberg",
    age: "23",
    location: "Boston",
    previousBackground: "Academia",
    className: "WEBPT11",
    favSubjects: ["Javascript", "React", "Redux"],
    grade: 70
  });
  
  const sam = new Student({
    name: "Batuhan Balta",
    age: "25",
    location: "Culver City",
    previousBackground: "Electrical Engineer",
    className: "WEBPT11",
    favSubjects: ["HTML", "CSS", "LESS", "Javascript"],
    grade: 75
  });
  
  leif.demo("HTML");
  leif.grade(leif, "Javascript");
  leif.demo("Java");
leif.grade(leif, "LESS");
  
  leif.listSubjects();
  leif.listSubjects();
  leif.PRAssignment("React");
  leif.PRAssignment("Javascript");
  leif.sprintChallenge("HTML");
  leif.sprintChallenge("CSS");
  
  leif.standUp("#afterhours");
  leif.debugsCode(leif, "Javascript");
  
  leif.changeGrade(leif);
  
  leif.graduate();