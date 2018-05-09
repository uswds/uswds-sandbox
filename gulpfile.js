var pkg           = require('./package.json');
var autoprefixer  = require('autoprefixer');
var cssnano       = require('cssnano');
var del           = require('del');
var gulp          = require('gulp');
var gzip          = require('gulp-gzip');
var movecss       = require('css-mqpacker');
var path          = require('path');
var postcss       = require('gulp-postcss');
var rename        = require('gulp-rename');
var replace       = require('gulp-replace');
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

// Asset (images, fonts) destination
const ASSETS_DEST       = 'assets/uswds';

// CSS destination
const CSS_DEST          = 'assets/css';

// Build destination
const BUILD_DEST        = '_site';

// Include destination
const INC_DEST          = '_includes';

// Primary stylesheet name (exclude .css)
const STYLESHEET_BASE   = 'styles';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// BUILD USWDS STYLES

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_SRC}/@(fonts|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DEST}`));
});

gulp.task('copy-uswds-settings', () => {
  return gulp.src(`${USWDS_SRC}/stylesheets/project/**/**`)
  .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
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
          `${USWDS_SRC}/scss`,
          `${USWDS_SRC}/scss/packages`,
        ]
      }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(postcss(plugins))
    .pipe(replace(
      /\buswds @version\b/g,
      'uswds v' + pkg.version
    ))
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
  return gulp.src(`${CSS_DEST}/${STYLESHEET_BASE}.min.css`)
    .pipe(postcss(plugins))
    .pipe(rename(`${STYLESHEET_BASE}.app.css`))
    .pipe(gulp.dest(`${INC_DEST}`))
    .pipe(gulp.dest(`${CSS_DEST}`))
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
// Initialize project
gulp.task('uswds-init', ['copy-uswds-assets', 'copy-uswds-settings']);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'sass']);
