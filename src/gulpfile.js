'use strict'
var gulp = require('gulp');
var requireDir = require('require-dir');

gulp.paths = {
    dist: 'dist',
};

requireDir('gulp-tasks');

// Default task for local development
gulp.task('default', gulp.series('serve'));

// Composite build task that runs vendors, sass, build, and inject in sequence.
// Run "gulp build-all" to produce your final dist folder.
gulp.task('build-all', gulp.series(
  'bundleVendors',  // from vendors.js  
  'build',          // copies assets, HTML, etc. into dist
  'inject'          // (optional) injects partials and asset links into HTML
));
