const BasePage = require("./base.page");

class DashboardPage extends BasePage {

    constructor() {
        super('https://www.saucedemo.com/inventory.html');
    }

}

module.exports = DashboardPage;