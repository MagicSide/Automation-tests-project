
var Header_Search_Page = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page')

fdescribe('Header Page', function () {

    var headerPage

    beforeEach(function () {

        headerPage = new Header_Search_Page()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true

        browser.get('file:///C:/Programs/Automation/Superhero%20Project/superhero/index.html')

        browser.driver	 
        browser.driver.manage().window().maximize();  // max size browser window

    })

    afterEach(function () {

    })


    it('Should contain all Header elements', async function () {

       await loginPage.emailFld.sendKeys('tester@test.com')
       await loginPage.passwordFld.sendKeys('password')
       await loginPage.submitBtn.click()

       await expect(headerPage.headerTitle.isDisplayed()).toBe(true)
       await expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster')

       await expect(headerPage.headerImage.isDisplayed()).toBe(true)

       await expect(headerPage.headerBody.isDisplayed()).toBe(true)
       await expect(headerPage.headerBody.getText()).toEqual(
        'Imagine That you are tasked with building a team of SuperHeros of save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team')
    })



    it('should display alert for not found', function () {
        loginPage.emailFld.sendKeys('tter@glitm.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        headerPage.searchFld.sendKeys('Bob')
        headerPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Your search for Bob returned 0 result. Try something else.')
        browser.switchTo().alert().accept()
    })

    
    it('Search elements and alert for found',  () => {
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        expect(headerPage.searchFld.isPresent()).toBe(true)
        expect(headerPage.searchBtn.isPresent()).toBe(true)

        headerPage.searchFld.sendKeys('Wolverine')
        headerPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 5000)
        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome!')
        browser.switchTo().alert().accept()

    })




})