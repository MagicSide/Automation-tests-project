
var RosterPage = function(){}

    RosterPage.prototype = Object.create({},{
        rosterTitleTxt: {get: function (){return element(by.tagName('h3')) }},  
        heroslist: { get: function() {return element(by.id('hero-list')) }},
        wolverineItemTxt: {get: function (){return element(by.xpath('//*[@id="hero-list"]/li[1]')) }},
        ironManItemTxt: {get: function (){return element(by.xpath('//*[@id="hero-list"]/li[2]')) }},
        deadpoolItemTxt: {get: function (){return element(by.xpath('//*[@id="hero-list"]/li[3]')) }},
        thorItemTxt: {get: function (){return element(by.xpath('//*[@id="hero-list"]/li[4]')) }},
        spidermanItemTxt: {get: function (){return element(by.xpath('//*[@id="hero-list"]/li[5]')) }},
        rosterFieldLbl: {get: function (){return element(by.css('label[for="heroInput"]')) }},
        rosterFld: {get: function (){return element(by.id('heroInput')) }},
        submitBtn: {get: function (){return element(by.xpath('//*[@id="addHero-form"]/button'))}}


    })

    module.exports = RosterPage