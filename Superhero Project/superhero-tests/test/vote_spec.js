
var VotePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page')

describe('Vote Page', function (){

    var votePage
    var loginPage

    
    beforeEach(function(){
        
        votePage = new VotePage()
        loginPage = new LoginPage()

       // Since this is not an Angular Site
           browser.ignoreSynchronization = true
           browser.get('file:///C:/Programs/Automation/Superhero%20Project/superhero/index.html') 

    })

    afterEach(function (){

    })

    it('should display all elements for voting section', function(){

        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite Superhero movie')

        expect(votePage.xmenChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenChoiceRadLbl.getText()).toEqual('X-Men')

        expect(votePage.avengersChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersChoiceRadLbl.getText()).toEqual('Avengers')

        expect(votePage.deadpoolChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolChoiceRadLbl.getText()).toEqual('Deadpool')
        
        expect(votePage.spidermanChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanChoiceRadLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironManChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.ironManChoiceRadLbl.getText()).toEqual('Iron man')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)
        expect(votePage.submitBtn.getText()).toEqual('Submit')

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('X-Men')

        expect(votePage.xmanVal.isDisplayed()).toBe(true)
        expect(votePage.xmanVal.getText()).toEqual('10')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('5')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('22')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man')

        expect(votePage.spidermanVal.isDisplayed()).toBe(true)
        expect(votePage.spidermanVal.getText()).toEqual('12')

        expect(votePage.ironManLbl.isDisplayed()).toBe(true)
        expect(votePage.ironManLbl.getText()).toEqual('Iron man')

        expect(votePage.ironManVal.isDisplayed()).toBe(true)
        expect(votePage.ironManVal.getText()).toEqual('1')

    })
    

    it('should add 1 to X-man votes', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        votePage.submitBtn.click()        
        expect(votePage.xmanVal.getText()).toEqual('11')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)
    })

    it('should add 1 to Avenger votes', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        votePage.avengersChoiceRadLbl.click() 
        votePage.submitBtn.click()       
        expect(votePage.avengersVal.getText()).toEqual('6')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)
    })

    it('should add 1 to DeadPool votes', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        votePage.deadpoolChoiceRadLbl.click() 
        votePage.submitBtn.click()       
        expect(votePage.deadpoolVal.getText()).toEqual('23')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)
    })


    it('should add 1 to Spider-Man votes', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        votePage.spidermanChoiceRadLbl.click() 
        votePage.submitBtn.click()       
        expect(votePage.spidermanVal.getText()).toEqual('13')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)
        
    })


    it('should add 1 to Iron Man votes', function(){
        loginPage.emailFld.sendKeys('tester@test.com')
        loginPage.passwordFld.sendKeys('password')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)  //notification-thanks after voted should be hide
        expect(votePage.voteFormSection.isDisplayed()).toBe(true) 

        votePage.ironManChoiceRadLbl.click() 
        votePage.submitBtn.click()
     
        expect(votePage.ironManVal.getText()).toEqual('2')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)
        expect(votePage.voteFormSection.isDisplayed()).toBe(false)    
        

    })

})