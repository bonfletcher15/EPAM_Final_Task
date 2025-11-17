const BasePage = require("./base.page");

class LoginPage extends BasePage {

    constructor() {
        super('https://www.saucedemo.com/');
    }

}

module.exports = LoginPage;