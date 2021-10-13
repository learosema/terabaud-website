const rssPlugin = require('@11ty/eleventy-plugin-rss');
const htmlMinTransform = require('./transforms/html-min-transform.cjs');
// Filters
const dateFilter = require('./filters/date-filter.cjs');
const w3DateFilter = require('./filters/w3-date-filter.cjs');

module.exports = (config) => {
  config.addTransform('htmlmin', htmlMinTransform);

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  config.addPlugin(rssPlugin);

  // Set directories to pass through to the dist folder
  // config.addPassthroughCopy('./src/svg/');

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
