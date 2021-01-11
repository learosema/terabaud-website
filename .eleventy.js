module.exports = (config) => {
  // specify folders to be copied to the output folder
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/css/');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
