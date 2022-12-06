module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  let pathPrefix = "/";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  return {
    pathPrefix: pathPrefix,
    dir: {
      layouts: "_layouts",
      data: "_data",
    },
  }
}
