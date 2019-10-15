


// Page Object File

var LoginPage = require('../page-objects/login_page')  // Update to your page object

describe('Login Page Tests', function (){

    var loginPage

    beforeEach(function (){
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///C:/Programs/Automation/Superhero%20Project/superhero/index.html')  // Update to your URL

    })

    afterEach(function (){

    })

    it('should display all Login page elements', function(){
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log in')

        expect(loginPage.emailFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.getText()).toEqual('')

        expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.getText()).toEqual('')

        expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isSelected()).toBe(false)

        expect(loginPage.submitBtn.isDisplayed()).toBe(true)

    })

    it('should display error message when no username and password entered', function(){
        loginPage.submitBtn.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')

    })

    it('should display error message when no password entered', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.submitBtn.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')

    })

    it('should display error message when no email entered', function(){
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')

    })

    it('should log user in', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()


        // Todo -Verify the Page elements changed


    })


})