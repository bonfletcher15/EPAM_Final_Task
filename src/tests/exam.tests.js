const { pages } = require('./../po');
const credentials = require('../data/credentials');
const testData = require('../data/testData');

describe('Login form testing', () => {
    beforeEach(async () => {
        await pages("login").open();
    })

    it('Test Login form with empty credentials', async () => {

        await $('#user-name').setValue(credentials.sampleUser.username);
        await $('#password').setValue(credentials.sampleUser.password);

        await $('#user-name').clearValue();
        await $('#password').clearValue();
        
        await $('#login-button').click();
        await expect($('h3')).toHaveText(testData.errorMessages.noUsername);
    })

    it('Test Login form with credentials by passing Username', async () => {

        await $('#user-name').setValue(credentials.sampleUser.username);
        await $('#password').setValue(credentials.sampleUser.password);

        await $('#password').clearValue();

        await $('#login-button').click();

        await expect($('h3')).toHaveText(testData.errorMessages.noPassword);
    })

    it('Test Login form with credentials by passing Username & Password', async () => {

        await $('#user-name').setValue(credentials.getRandomUser());

        await $('#password').setValue(credentials.validUser.password);

        await $('#login-button').click();

        await expect(browser).toHaveTitle('Swag Labs');
    })

})