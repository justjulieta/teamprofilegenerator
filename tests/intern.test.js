const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const Intern = new Intern('Foo');
});

test('Set school via constructor', () => {
    const testValue = "School";
    const e = new Intern("Foo", 1, "test@jtech.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  
test('getRole() return Intern', () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@jtech.com", "school");
    expect(e.getRole()).toBe(testValue);
  });