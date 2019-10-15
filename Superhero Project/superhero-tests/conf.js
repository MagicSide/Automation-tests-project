
// For jasmine reports
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;   


// Reports jasmine Screenshot
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  reportTitle: "Report Title"
});


exports.config = {
    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './test/login_spec.js',
        './test/roster_spec.js',
        './test/vote_spec.js',
        './test/header_spec.js'
       // start all test './test/*_spec.js'
    ],

   // SELENIUM_PROMISE_MANAGER: false,

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {}
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
          reporter.beforeLaunch(resolve);
        });
      },


      afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
          reporter.afterLaunch(resolve.bind(this, exitCode));
        });
      },
    

    //for Jasmine reports
    logLevel: 'WARN',
    onPrepare: function () {
      
      // Max size window browser
      // browser.manage().window().maximize();
      // browser.manage().timeouts().implicitlyWait(5000);


        jasmine.getEnv().addReporter(reporter); 

        jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        },
        summary: {
          displayDuration: false
        }
      }));
    }  
}
