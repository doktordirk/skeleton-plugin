var gulp = require('gulp');
var KarmaServer = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
  var karmaServer = new KarmaServer({
    configFile: __dirname + '/../../karma.conf.js'
  }, function() {
    done();
  });

  karmaServer.start();
});


/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  var karmaServer = new KarmaServer({
    configFile: __dirname + '/../../karma.conf.js'
  }, function() {
    done();
  });

  karmaServer.start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function(done) {
  var karmaServer = new KarmaServer({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel', 'coverage']
    },
    coverageReporter: {
      includeAllSources: true,
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      },
      reporters: [
        { type: 'html', dir: 'coverage' },
        { type: 'text' }
      ]
    }
  }, function() {
    done();
  });

  karmaServer.start();
});
