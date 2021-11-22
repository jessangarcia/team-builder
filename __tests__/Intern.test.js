const Intern = require ('../lib/Intern');

// Test intern role
test ('getRole() return intern', () => {
    const testValue = "Intern";
    const int = new Intern('test', 1, 'test@test.com', 'UofU');
    expect(int.getRole()).toBe(testValue);
});

// Test school
test('Can get school from getSchool()', () => {
    const testValue = 'UofU';
    const int = new Intern('test', 1, 'email@email.com', testValue);
    expect(int.getSchool()).toBe(testValue);
})
