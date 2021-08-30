const Engineer = require('../lib/Engineer.js');

test('creates a new Engineer', ()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");

  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String))
})
test('method to get Engineer name',()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");
  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
})
test('method to get Engineer id',()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");
  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
})
test('method to get Engineer email',()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");
  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
})
test('method to get Engineer Role',()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");
  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
})
test('method to get Engineer github',()=>{
  const engineer = new Engineer('Bob', 1,"adsaf", "asdfsdaf");
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
})