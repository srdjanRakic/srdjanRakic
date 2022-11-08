module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    },
  ],
  siteMetadata: {
    title: "Srgjan Rakikj",
    description: "Personal Portfolio",
    keywords: "full stack developer, portfolio, personal website",
    url: "https://srdjanrakic.github.io/"
  }
};
