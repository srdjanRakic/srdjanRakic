module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    }
  ],
  siteMetadata: {
    title: "Srdjan Rakic",
    description: "Personal Portfolio",
    keywords: "full stack developer, portfolio, personal website",
    url: "https://srdjanrakic.github.io/"
  },
  pathPrefix: 'https://github.com/srdjanRakic/srdjanrakic-new'
};
