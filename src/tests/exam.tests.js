const LoginPage = require('../po/pages/login.page');
const loginPage = new LoginPage();

const DashboardPage = require('../po/pages/dashboard.page');
const dashboardPage = new DashboardPage();

const credentials = require('../data/credentials');
const testData = require('../data/testData');

describe('Login form testing', () => {
    beforeEach(async () => {
        await loginPage.open();
    })

    it('Test Login form with empty credentials', async () => {

        await loginPage.setLogin(credentials.sampleUser.username);
        await loginPage.setPassword(credentials.sampleUser.password);

        await loginPage.clearLogin();
        await loginPage.clearPassword();
        
        await loginPage.loginBtn.click();
        await expect(loginPage.errorMsg).toHaveText(testData.errorMessages.noUsername);
    })

    it('Test Login form with credentials by passing Username', async () => {

        await loginPage.setLogin(credentials.sampleUser.username);
        await loginPage.setPassword(credentials.sampleUser.password);

        await loginPage.clearPassword();

        await loginPage.loginBtn.click();

        await expect(loginPage.errorMsg).toHaveText(testData.errorMessages.noPassword);
    })

    it('Test Login form with credentials by passing Username & Password', async () => {

        await loginPage.setLogin(credentials.getRandomUser());

        await loginPage.setPassword(credentials.validUser.password);

        await loginPage.loginBtn.click();

        await expect(browser).toHaveTitle('Swag Labs');
    })

})