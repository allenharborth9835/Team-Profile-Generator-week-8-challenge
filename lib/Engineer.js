const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
  constructor(name, email, github){
    super(name, email);
    this.role = "Engineer";
    this.github = github;
    this.id = 1;
    this.role = "Engineer";
  }
  getGithub(){
    return `Github: ${this.github}`
  }
  getRole(){
    return `Engineer`
  }
}

module.exports = Engineer;