module.exports = {

    sampleUser: {
        username: 'John Doe',
        password: '1234'
    },

    validUser: {
        users: [
        'standard_user',
        'problem_user',
        'performance_glitch_user',
        'error_user',
        'visual_user'
        ],
        password: 'secret_sauce',
    },

    getRandomUser() {
        return this.validUser.users[Math.floor(Math.random() * this.validUser.users.length)];
    }

}