const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');


const Questions = [
  {
    type:'list',
    name:'role',
    message:"what is this employee's status?",
    choices:["Employee", "Intern", "Engineer", "Manager"],
    validate: nameInput => {
      if(nameInput){
        return true;
      }else{
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type:'input',
    name:'name',
    message:"what is this employee's name?",
    validate: nameInput => {
      if(nameInput){
        return true;
      }else{
        console.log("Please enter your employee's name!");
        return false;
      }
    }
  },
  {
    type:'input',
    name:'email',
    message:"what is this employee's email?",
    validate: nameInput => {
      if(nameInput){
        return true;
      }else{
        console.log("Please enter your employee's email!");
        return false;
      }
    }
  },
  {
    type:'input',
    name:'school',
    message:"what is this Intern's school?",
    validate: schoolInput => {
      if(schoolInput){
        return true;
      }else{
        console.log("Please enter your Intern's school!");
        return false;
      }
    },
    when: (answers)=>answers.role === "Intern"
  },
  {
    type:'input',
    name:'github',
    message:"what is this Engineer's github?",
    validate: gihubInput => {
      if(gihubInput){
          return true;
      }else{
        console.log("Please enter your Engineer's github!");
        return false;
      }
    },
    when: (answers)=>answers.role === "Engineer"
  },
  {
    type:'input',
    name:'officeNumber',
    message:"what is this Manager's office number?",
    validate: officeNumberInput => {
      if(officeNumberInput){
        return true;
      }else{
        console.log("Please enter your Manager's office number!");
        return false;
      }
    },
    when: (answers)=>answers.role === "Manager"
  }
]

function setEmployee(Data){
  switch(Data.role){
    case "Employee":
      element = new Employee(Data.name, Data.email)
      return element;
  }
  switch(Data.role){
    case "Manager":
      element = new Manager(Data.name, Data.email, Data.officeNumber)
      return element;
  }
  switch(Data.role){
    case "Engineer":
      element = new Engineer(Data.name, Data.email, Data.github)
      return element;
  }
  switch(Data.role){
    case "Intern":
      element = new Intern(Data.name, Data.email, Data.school)
      return element;
  }
}

function getEmployee(Data){
  switch(Data.role){
    case "Employee":
      element += Data.getName()
      element += Data.getRole()
      element += Data.getId()
      element += Data.getEmail()
      return element;
  }
  switch(Data.role){
    case "Manager":
      element += Data.getName()
      element += Data.getRole()
      element += Data.getId()
      element += Data.getEmail()
      element += Data.getOfficeNumber()
      return element;
  }
  switch(Data.role){
    case "Engineer":
      element = new Engineer(Data.name, Data.email, Data.github)
      return element;
  }
  switch(Data.role){
    case "Intern":
      element = new Intern(Data.name, Data.email, Data.school)
      return element;
  }
}

inquirer.prompt(Questions).then(Data => console.log(getEmployee(setEmployee(Data))))
