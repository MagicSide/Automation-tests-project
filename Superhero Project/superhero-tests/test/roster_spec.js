
var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page')

describe('Roster Page', function(){

    var rosterPage
    var loginPage

    beforeEach(function (){
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
        // Since this is not an Angular Site
        browser.ignoreSynchronization = true
        browser.get('file:///C:/Programs/Automation/Superhero%20Project/superhero/index.html') 
    })

    afterEach(function (){

    })

    it('should display all default roster elements',function(){

        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build Your SuperHero Roster:')

        expect(rosterPage.heroslist.isDisplayed()).toBe(true)
     
        expect(rosterPage.wolverineItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.wolverineItemTxt.getText()).toEqual('Wolverine')

        expect(rosterPage.ironManItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.ironManItemTxt.getText()).toEqual('Iron Man')

        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool')

        expect(rosterPage.thorItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.thorItemTxt.getText()).toEqual('Thor')

        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spider-Man')

        expect(rosterPage.rosterFieldLbl.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFieldLbl.getText()).toEqual('ADD A SUPERHERO')

        expect(rosterPage.rosterFld.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFld.getText()).toEqual('')

        expect(rosterPage.submitBtn.isDisplayed()).toBe(true)

    })

    
    it('should add a hero on submit',function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()


        rosterPage.rosterFld.sendKeys('Doctor Strange')
        rosterPage.submitBtn.click()
        
        expect(element(by.xpath('//*[@id="hero-list"]/li[6]')).isDisplayed()).toBe(true)
        expect(element(by.xpath('//*[@id="hero-list"]/li[6]')).getText()).toEqual('Doctor Strange')
        
    }) 
   
})