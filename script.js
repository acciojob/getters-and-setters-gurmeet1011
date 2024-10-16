class Person {
  constructor(name, age) {
    this._name = name; // Use private variable _name
    this._age = age;   // Use private variable _age
  }

  // Getter for name
  getName() {
    return this._name;
  }

  // Setter for age
  setAge(age) {
    this._age = age;
  }

  // Getter for age
  getAge() {
    return this._age;
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
