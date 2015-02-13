// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-02-06 using
// generator-karma 0.8.3

module.exports = function(config){
  'use strict';

  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-aria/angular-aria.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/scripts/**/*.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'app/scripts/*.js',

      'test/mock/**/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/**/*.js',
      'test/spec/**/*.js',
      'test/spec/*.js',
    ],


    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	    'app/scripts/**/*.js': ['coverage'],
	    'app/components/**/*.js': ['coverage'],
	    'app/view*/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'jasmine-runner', 'junit', 'coverage'],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS',
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine-html-reporter-livereload',
      'karma-junit-reporter',
      'karma-jasmine-runner-reporter',
      'karma-js-coverage',
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    jasmineRunnerReporter: {
      outputFile: 'test_out/jasmine-runner.html'
    },
    
    // type (Type: String)
    // Possible Values:
    // html (default)
    // lcov (lcov and html)
    // lcovonly
    // text
    // text-summary
    // cobertura (xml format supported by Jenkins)
    // teamcity (code coverage System Messages for TeamCity)
    coverageReporter: {
      reporters:[
        {
	        type: 'lcov', 
	        dir: 'test_out/coverage/',
	        file : 'coverage.html'
	      },
        {
	        type: 'cobertura',
	        dir: 'test_out/coverage/',
	        file : 'cobertura.xml'
	      },
      ],
    }

  });
};
