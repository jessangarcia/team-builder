const Manager = require ('../lib/Manager');

// Test manager
test('return manager', () => {
    const testValue = 'Manager';
    const man = new Manager('test', 1,'email@email.com', 50);
    expect(man.getRole()).toBe(testValue);
});

// Test office number
test('get office number: getOffice()', () => {
    const testValue = 50;
    const man = new Manager("test", 1, "email@email.com", testValue);
    expect(man.getOfficeNumber()).toBe(testValue);
});