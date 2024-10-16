class Person {
  constructor(name, age) {
    this.name = name; // Set name directly in the constructor
    this.age = age;   // Set age directly in the constructor
  }

  // Getter for name
  getName() {
    return this.name;
  }

  // Setter for age
  setAge(s) {
    this.age = s;
  }

  // Getter for age
  getAge() {
    return this.age;
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

class Teacher extends Person {
  teach() {
    console.log(this.name + " is teaching");
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
