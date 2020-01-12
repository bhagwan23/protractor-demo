let loginpage = function () {

    let email_input = element(by.id('wtf2-input-0'));
    let password_input = element(by.id('wtf2-input-1'));
    let signinbutton = element(by.xpath("//input[@id='wtf2-input-1']//following::button[2]"));
    

    this.get = function (url) {
        browser.get(url);
    }

    this.enteremailaddress = function (email) {
        email_input.sendKeys(email);

    };
    this.enterpassword = function (password) {
        password_input.sendKeys(password);

    };

    this.signinclick = function () {
        signinbutton.click();
    };
   

   // expect(element(by.binding('Deals')).isPresent()).toBe(true);
   this.verifylogin = function(result){
    let output = element(by.xpath("//span[text()='Deals']"));
    expect(output.getText()).toEqual(result);
   };
    


};

module.exports = new loginpage();