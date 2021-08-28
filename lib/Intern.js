const Employee = require('../lib/Employee.js');

class Intern extends Employee{
  constructor(name, email, school){
    super(name, email);
    this.school = school;
    this.id = 1;
    this.role = "Intern";
  }
  getSchool(){
    return `School: ${this.school}`
  }
  getRole(){
    return `Intern`
  }
}

module.exports = Intern;