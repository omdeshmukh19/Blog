const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets/blog");
  eleventyConfig.addPassthroughCopy("src/style.css");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
  templateFormats: ["njk", "html", "md"]
};
