const Employee = require('../lib/Employee.js');

test('creates a new employee', ()=>{
  const employee = new Employee("bob","asdfds");

  expect(employee.name).toBe("bob");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})
test('method to get employee name',()=>{
  const employee = new Employee("bob","asdfds");
  expect(employee.getName()).toEqual(expect.stringContaining("bob"));
})
test('method to get employee id',()=>{
  const employee = new Employee("bob","asdfds");
  expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})
test('method to get employee email',()=>{
  const employee = new Employee("bob","asdfds");
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})
test('method to get employee Role',()=>{
  const employee = new Employee("bob","asdfds");
  expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
})