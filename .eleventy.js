module.exports = async function (eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
  // Access to the full `eleventyConfig` Configuration API
  // eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
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
