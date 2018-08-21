module.exports = {
  siteMetadata: {
    title: 'Vincity-Estate',
    siteUrl: `https://www.vincity-estate.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://github.us18.list-manage.com/subscribe/post?u=9548de040325a553f91a59a5f&amp;id=19dc449ba9',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/news`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Vincity-Estate",
        short_name: "VincityEstate",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "static/icon.png",
      },
    },
    `gatsby-plugin-offline`
  ],
}
