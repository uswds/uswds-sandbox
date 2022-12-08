module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./_sass");

  // Wait for SASS to compile, set to 2s because our compile task is 1.7s
  eleventyConfig.setWatchThrottleWaitTime(2000);

  let pathPrefix = "/";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  return {
    pathPrefix: pathPrefix,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      layouts: "_layouts",
      data: "_data",
    },
  };
};
