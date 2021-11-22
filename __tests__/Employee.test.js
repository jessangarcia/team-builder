const Employee = require('../lib/Employee');

//test name
test('input name from constructor', () => {
    const name = 'Jess';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

//test id
test('set id with constructor', () => {
    const testValue = 50;
    const emp = new Employee('test', testValue);
    expect(emp.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'test@test.com';
    const emp = new Employee('test', 1, testValue);
    expect(emp.email).toBe(testValue);
});