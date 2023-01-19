const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const Engineer = new Engineer('Foo');
});

test("set GitHub account via constructor", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1, "test@jtech.com", testValue);
    expect(e.GitHub).toBe(testValue);
  });
  
test('getRole() return Engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@jtech.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
  });