const Employee = require('../lib/Employee.js');

class Manager extends Employee{
  constructor(name, email, officeNumber){
    super(name, email);
    this.id = 1;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber(){
    return `Office Number: ${this.officeNumber}`
  }
  getRole(){
    return `Manager`
  }
}

module.exports = Manager;