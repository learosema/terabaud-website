module.exports = {
  name: 'terabaud.de',
  url:
    process.env.ELEVENTY_ENV === 'production'
      ? 'https://terabaud.github.io/terabaud-website'
      : '',
  authorName: 'Lea Rosema',
  authorEmail: 'terabaud@gmail.com',
};
