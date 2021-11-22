const Engineer = require('../lib/Engineer');

//test engineer role
test('getRole return Engineer', () => {
    const testValue = 'Engineer';
    const emp = new Engineer('test', 1, 'test@test.com', 'GitHub')
    expect(emp.getRole()).toBe(testValue);
})

//test github
test('get GitHub username from getGithub()', () => {
    const testValue = 'GitHubUser';
    const emp = new Engineer('test', 1, 'email@email.com', testValue);
    expect(emp.getGithub()).toBe(testValue);
});