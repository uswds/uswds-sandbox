// TODO: After Canary 19:
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
//
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  // TODO: After Canary 19:
  // eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/assets/css/**/*.css",
  });

  let baseurl = "/";
  if (process.env.BASEURL) {
    baseurl = process.env.BASEURL;
  }

  return {
    pathPrefix: baseurl,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
