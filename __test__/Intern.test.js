const Intern = require('../lib/Intern.js');

test('creates a new Intern', ()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");

  expect(intern.name).toBe('Bob');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})
test('method to get Intern name',()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");
  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
})
test('method to get Intern id',()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");
  expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
})
test('method to get Intern email',()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");
  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
})
test('method to get Intern Role',()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");
  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
})
test('method to get Intern school',()=>{
  const intern = new Intern('Bob', 1,"adsaf", "asdfsdaf");
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})