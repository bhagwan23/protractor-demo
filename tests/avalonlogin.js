let loginpage = require('../pages/loginpage');

describe('Avalon-Crm login', function () {

    it('Launch Sign In page', function () {
        browser.driver.manage().window().maximize();
        browser.sleep(5000)
        loginpage.get('https://avalon.deskera.com/');
        browser.sleep(5000)
        loginpage.enteremailaddress('bhagwan.jadhav+Avalontest1@deskera.org');
        browser.sleep(2000)
        loginpage.enterpassword('123456');
        loginpage.signinclick();
        browser.sleep(15000);
    });
        it('Dashboardload', function () {
        loginpage.verifylogin('Dealss');
        
    });
});