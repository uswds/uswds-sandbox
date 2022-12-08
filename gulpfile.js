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
uswds.paths.dist.theme = "./_sass";

// Images destination
uswds.paths.dist.img = "./assets/img";

// Fonts destination
uswds.paths.dist.fonts = "./assets/fonts";

// Javascript destination
uswds.paths.dist.js = "./assets/js";

// Compiled CSS destination
uswds.paths.dist.css = "./assets/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

exports.compileIcons = uswds.compileIcons;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyTheme = uswds.copyTheme;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
exports.buildSass = uswds.compile;
exports.compile = uswds.compile; 
exports.watchSass = uswds.watch;
exports.default = uswds.watch;
