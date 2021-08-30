const Manager = require('../lib/Manager.js');

test('creates a new manger', ()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");

  expect(manager.name).toBe("Bob");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
})
test('method to get manager name',()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");
  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
})
test('method to get manager id',()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");
  expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
})
test('method to get manager email',()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");
  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
})
test('method to get manager Role',()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");
  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
})
test('method to get manager office number',()=>{
  const manager = new Manager('Bob', 1,"adsaf", "asdfsdaf");
  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber));
})