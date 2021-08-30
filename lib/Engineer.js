const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
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