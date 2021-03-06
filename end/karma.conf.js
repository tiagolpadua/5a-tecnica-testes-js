// jshint ignore:start
// Karma configuration
// Generated on Mon Feb 26 2018 08:55:49 GMT-0300 (-03)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'src/app.js',
      'src/appSpec.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/!(*Spec).js': ['coverage']
      // 'src/**/*.js': ['coverage']
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
          type: 'html',
          subdir: 'report-html'
        },
        {
          type: 'lcovonly',
          subdir: 'lcov',
          file: 'lcov.info'
        }
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};