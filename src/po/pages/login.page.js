const BasePage = require("./base.page");

class LoginPage extends BasePage {

    constructor() {
        super('https://www.saucedemo.com/');
    }

    get usernameField() {
        return $('#user-name');
    }

    get passwordField() {
        return $('#password');
    }

    async setLogin(login) {
        await this.usernameField.setValue(login);
    }

    async clearLogin() {
        await this.usernameField.clearValue();
    }

    async setPassword(password) {
        await this.passwordField.setValue(password);
    }

    async clearPassword() {
        await this.passwordField.clearValue();
    }

    get loginBtn() {
        return $('#login-button');
    }

    get errorMsg() {
        return $('.error-message-container h3');
    }

}

module.exports = LoginPage;