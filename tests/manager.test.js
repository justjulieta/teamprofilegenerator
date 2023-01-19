const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const Manager = new Manager('Foo');
});

test('get phone number with getPhoneNumber() method', () => {
    const testValue = 123456789;
    const e = new Manager('Foo', 1, 'test@jtech.com', testValue);
    expect(e.getPhoneNumber()).toBe(testValue);
});

test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'test@jtech.com', 100);
    expect(e.getRole()).toBe(testValue);
});