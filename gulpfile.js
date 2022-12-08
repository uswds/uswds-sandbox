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
uswds.paths.dist.img = "./src/assets/img";

// Fonts destination
uswds.paths.dist.fonts = "./src/assets/fonts";

// Javascript destination
uswds.paths.dist.js = "./src/assets/js";

// Compiled CSS destination
uswds.paths.dist.css = "./src/assets/css";

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
exports.buildSass = uswds.compile;
exports.watchSass = uswds.watch;
exports.default = uswds.watch;
