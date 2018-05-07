var autoprefixer  = require('autoprefixer');
var cssnano       = require('cssnano');
var del           = require('del');
var gulp          = require('gulp');
var gzip          = require('gulp-gzip');
var movecss       = require('css-mqpacker');
var path          = require('path');
var postcss       = require('gulp-postcss');
var rename        = require('gulp-rename');
var sass          = require('gulp-sass');
var size          = require('gulp-size');
var uncss         = require('postcss-uncss');
var watch         = require('gulp-watch');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC         = 'node_modules/uswds/dist';

// Project Sass source directory
const PROJECT_SASS_SRC  = '_sass';

// Asset destination
const ASSETS_DEST       = 'assets/uswds';

// CSS destination
const CSS_DEST          = 'assets/css';

// Build destination
const BUILD_DEST        = '_site';

// Include destination
const INC_DEST          = '_includes';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// BUILD USWDS STYLES

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_SRC}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DEST}`));
});

gulp.task('clean-css', function () {
  return del([
    `${CSS_DEST}/**/*`
  ]);
});

gulp.task('build-sass', ['clean-css'], function (done) {
  var plugins = [
      autoprefixer({ browsers: ['> 3%', 'Last 2 versions'], cascade: false, }),
      movecss({ sort: true }),
      cssnano()
  ];
  return gulp.src([
      `${PROJECT_SASS_SRC}/*.scss`
    ])
    .pipe(sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${USWDS_SRC}/stylesheets`,
        ]
      }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size())
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size());
});

gulp.task('build-app', ['build-sass'], function() {
  var plugins = [
    uncss({
      html: [`${BUILD_DEST}/**/*.html`],
      ignore: [/\[aria-/, /is-visible/],
    }),
    cssnano()
  ];
  return gulp.src(`${CSS_DEST}/styles.min.css`)
    .pipe(postcss(plugins))
    .pipe(rename('styles.app.css'))
    .pipe(gulp.dest(`${INC_DEST}`))
    .pipe(size())
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size());
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task('watch', ['build-sass'], function (){
  gulp.watch(`${PROJECT_SASS_SRC}/*.scss`, ['build-sass'])
  gulp.watch(`${USWDS_SRC}/scss/*.scss`, ['build-sass']);
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'sass', 'copy-uswds-assets']);
