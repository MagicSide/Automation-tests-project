
var VotePage = function() {}

VotePage.prototype = Object.create({}, {
    voteTitleTxt: {get: function () { return element(by.css('h4')) } },
    xmenChoiceRadLbl: {get: function () { return element(by.css('label[for="heroMovieRadio1"]')) } },
    avengersChoiceRadLbl: {get: function () { return element(by.css('label[for="heroMovieRadio2"]')) } },
    deadpoolChoiceRadLbl: {get: function () { return element(by.css('label[for="heroMovieRadio3"]')) } },
    spidermanChoiceRadLbl: {get: function () { return element(by.css('label[for="heroMovieRadio4"]')) } },
    ironManChoiceRadLbl: {get: function () { return element(by.css('label[for="heroMovieRadio5"]')) } },
    submitBtn: {get: function () { return element(by.xpath('//*[@id="vote-form"]/button')) } },

    voteFormSection: {get: function() {return element(by.xpath('//*[@id="vote-form"]')) }},

    movieLbl: {get: function () { return element(by.id('movie-lable')) } },
    voteLbl: {get: function () { return element(by.id('votes-lable')) } },
    xmenLbl: {get: function () { return element(by.id('movieName1')) } },
    xmanVal: {get: function () { return element(by.id('movieVotes1')) } },
    avengersLbl: {get: function () { return element(by.id('movieName2')) } },
    avengersVal: {get: function () { return element(by.id('movieVotes2')) } },
    deadpoolLbl: {get: function () { return element(by.id('movieName3')) } },
    deadpoolVal: {get: function () { return element(by.id('movieVotes3')) } },
    spidermanLbl: {get: function () { return element(by.id('movieName4')) } },
    spidermanVal: {get: function () { return element(by.id('movieVotes4')) } },
    ironManLbl: {get: function () { return element(by.id('movieName5')) } },
    ironManVal: {get: function () { return element(by.id('movieVotes5')) } },

    thanksAlertTxt: {get: function (){return element(by.id('vote-alert'))}}
})

module.exports = VotePage



