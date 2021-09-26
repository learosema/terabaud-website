module.exports = {
  title: "Lea's Blog",
  slogan: 'Ramblings of a trans girl in tech',
  url:
    process.env.ELEVENTY_ENV === 'production'
      ? 'https://terabaud.github.io/terabaud-website'
      : '',
};
