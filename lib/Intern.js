const Employee = require('../lib/Employee.js');

class Intern extends Employee{
  constructor(name, email, school){
    super(name, email);
    this.school = school;
    this.id = 1;
  }
  getSchool(){
    return `Office Number: ${this.school}`
  }
  getRole(){
    return `Intern`
  }
}

module.exports = Intern;