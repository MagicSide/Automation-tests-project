

var LoginPage = function() {}

    LoginPage.prototype = Object.create({} , {
       loginTitleTxt: {get: function () { return element(by.id('login-title')) }},
       emailFldLbl: {get: function () { return element(by.xpath('//*[@id="form-login"]/div[1]/label')) }},
       emailFld: {get: function () { return element(by.id('loginEmail')) }},
       passwordFldLbl: {get: function () { return element(by.xpath('//*[@id="form-login"]/div[2]/label')) }},
       passwordFld: {get: function () { return element(by.id('loginPassword')) }},
       rememberChkLbl: {get: function () { return element(by.xpath('//*[@id="form-login"]/div[3]/label')) }},
       rememberChk: {get: function () { return element(by.id('rememberLoginChk')) }},
       submitBtn: {get: function () { return element(by.id('login-submit-button')) }},
       loginErrorMsg: {get: function () { return element(by.id('login-alert')) }},
      
})

module.exports = LoginPage 


