const webpackConfig = require('./webpack.dev');
const karmaWebpack = require('karma-webpack'); // eslint-disable-line

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['src/index.tests.js'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    exclude: [],

    preprocessors: {
      'src/index.tests.js': ['webpack'],
      'src/**/*.test.js': ['webpack']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'kjhtml'],

    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // referred from webui admin
    // @see https://github.com/karma-runner/karma-chrome-launcher/issues/180
    browsers:
      process.env.NODE_ENV === 'dev' ? ['Chrome'] : ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security'
        ]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.NODE_ENV !== 'dev',

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      karmaWebpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-jasmine-html-reporter'
    ]
  });
};
