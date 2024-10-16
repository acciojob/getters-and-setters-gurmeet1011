class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Use _age to avoid conflict with the setter method
  }

  // Setter for age
  set age(s) {
    this._age = s;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Getter for name
  get name() {
    return this._name;
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
