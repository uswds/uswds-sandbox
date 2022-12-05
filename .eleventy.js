module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      layouts: "_layouts",
      data: "_data",
    }
  }
}
