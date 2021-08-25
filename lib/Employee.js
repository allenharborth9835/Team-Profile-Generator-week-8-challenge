class Employee{
  constructor(name, email){
    this.name = name;
    this.id = 1;
    this.email = email;
    this.role = "Employee"
  }
  getName(){
    return `name: ${this.name}`
  }
  getId(){
    return `id: ${this.id}`
  }
  getEmail(){
    return `email: ${this.email}`
  }
  getRole(){
    return `Employee`
  }
}

module.exports = Employee