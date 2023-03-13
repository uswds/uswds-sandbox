// TODO: After Canary 19:
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const slinkity = require("slinkity");
const react = require("@slinkity/react");

module.exports = function (eleventyConfig) {
  // TODO: After Canary 19:
  // eleventyConfig.addPlugin(EleventyHtmlBasePlugin);  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
    renderers: [react()],
  }));

	eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
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
