
var Header_Search_Page = function () {};


Header_Search_Page.prototype = Object.create({},{
    headerTitle: {get: function () {return element(by.id('header-title')) } },
    headerImage: {get: function () {return element(by.className('row justify-content-md-center bg-light')) }},
    headerBody:  {get: function () {return element(by.tagName('p')) }},  // html use only one tag <p>
    
    searchFld: {get: function () { return element(by.id('search-box')) } },
    searchBtn: {get: function () { return element(by.buttonText('Search')) } }


})

module.exports = Header_Search_Page