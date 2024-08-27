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

// Version 2 settings:
// Comment out "Version 3" section below when this section is active
uswds.settings.version = 2;
uswds.paths.dist.theme = "./src/sass";

// Version 3 settings:
// Comment "Version 2" section above when this section is active
// uswds.settings.version = 3;
// uswds.paths.dist.theme = "./src/_styles";

// Images destination
uswds.paths.dist.img = "./src/assets/img";

// Fonts destination
uswds.paths.dist.fonts = "./src/assets/fonts";

// Javascript destination
uswds.paths.dist.js = "./src/assets/js";

// Compiled CSS destination
uswds.paths.dist.css = "./_site/assets/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

exports.init = uswds.init;
exports.compileIcons = uswds.compileIcons;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
exports.buildSass = uswds.compileSass;
exports.watchSass = uswds.watch;
exports.default = uswds.watch;
