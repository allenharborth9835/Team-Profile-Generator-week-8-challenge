class Employee{
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee"
  }
  getName(){
    return `Name: ${this.name}`
  }
  getId(){
    return `Id: ${this.id}`
  }
  getEmail(){
    return `Email: <a href="mailto:${this.email}">${this.email}</a>`
  }
  getRole(){
    return this.role
  }
}

module.exports = Employee