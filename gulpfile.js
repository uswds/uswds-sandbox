/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 2;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.theme = "./sass";

// Images destination
uswds.paths.dist.img = "./assets/img";

// Fonts destination
uswds.paths.dist.fonts = "./assets/fonts";

// Javascript destination
uswds.paths.dist.js = "./assets/js";

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.compileIcons = uswds.compileIcons;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
exports.buildSass = uswds.compileSass;
exports.watchSass = uswds.watch;
exports.default = uswds.watch;
