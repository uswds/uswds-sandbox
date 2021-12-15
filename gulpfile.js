const { series } = require("gulp");
const uswds = require("@uswds/compile");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

uswds.settings.version = 3;

// Project Sass source directory
uswds.paths.dist.theme = "./src/_styles";

// Images destination
const IMG_DEST = "./assets/img";

// Fonts destination
const FONTS_DEST = "./assets/fonts";

// Javascript destination
const JS_DEST = "./assets/js";

// Compiled CSS destination
const CSS_DEST = "./assets/css";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 106
const SITE_CSS_DEST = "./_site/assets/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

exports.compileIcons = uswds.compileIcons;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
exports.buildSass = uswds.compileSass;
exports.watchSass = uswds.watch;
exports.default = uswds.watch;
