const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

const generatePage = require('./src/page-template');

const inquirer = require('inquirer');
const fs = require('fs');

const employeeArr = [];

const promptUser = employeeData =>{
  if(!employeeData.empArr)
    employeeData.empArr = [];
  return inquirer.prompt([
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
      name:'id',
      message:"what is this employee's id?",
      validate: idInput => {
        if(idInput){
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
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'would you like to enter another employee?',
      default: false
    }
  ])
  .then(employeeInfo =>{
    employeeData.empArr.push(setEmployee(employeeInfo))
    if(employeeInfo.confirmAddEmployee){
      return promptUser(employeeData)
    }else{
      return employeeData.empArr;
    }
  })
}

function setEmployee(Data){
  switch(Data.role){
    case "Employee":
      return new Employee(Data.name, Data.id, Data.email);
  }
  switch(Data.role){
    case "Manager":
      return new Manager(Data.name, Data.id, Data.email, Data.officeNumber);
  }
  switch(Data.role){
    case "Engineer":
      return new Engineer(Data.name, Data.id, Data.email, Data.github);
  }
  switch(Data.role){
    case "Intern":
      return new Intern(Data.name, Data.id, Data.email, Data.school);
  }
}

const writeFile = fileContent =>{
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const copyFile = () =>{
  return new Promise((resolve, reject)=>{
    fs.copyFile('./src/style.css', './dist/style.css', err =>{
      if(err){
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message:'File Copied'
      });
    });
  });
};

promptUser({})
  .then(employeeArr=>{
    return generatePage(employeeArr)
  })
  .then(pageHTML =>{
    return writeFile(pageHTML)
  })
  .then(writeFileResponse =>{
    console.log(writeFileResponse);
    return copyFile()
  })
  .then(copyFileResponse =>{
    console.log(copyFileResponse);
  })
  .catch(err =>{
    console.log(err)
  })
