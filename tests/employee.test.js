const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const Employee = new Employee('Foo');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'test@gjtech.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('getRole() return Employee', () => {
    const testValue = 'employee';
    const e = new Employee('Foo', 1, 'test@jtech.com');
    expect(e.getRole()).toBe(testValue);
});
