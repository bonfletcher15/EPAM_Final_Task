const { pages } = require('./../po');

describe('Login form testing', () => {
    beforeEach(async () => {
        await pages("login").open();
    })

    it('Test Login form with empty credentials', async () => {

        await $('#user-name').setValue('John Doe');
        await $('#password').setValue('1234');

        await $('#user-name').clearValue();
        await $('#password').clearValue();
        
        await $('#login-button').click();
        await expect($('h3')).toHaveText('Epic sadface: Username is required');
    })

    it('Test Login form with credentials by passing Username', async () => {

        await $('#user-name').setValue('John Doe');
        await $('#password').setValue('1234');

        await $('#password').clearValue();

        await $('#login-button').click();

        await expect($('h3')).toHaveText('Epic sadface: Password is required');
    })

    it('Test Login form with credentials by passing Username & Password', async () => {

        await $('#user-name').setValue('problem_user');

        await $('#password').setValue('secret_sauce');

        await $('#login-button').click();

        await expect(browser).toHaveTitle('Swag Labs');
    })

})