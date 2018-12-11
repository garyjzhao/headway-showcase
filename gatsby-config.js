require("dotenv").config();

module.exports = {
  pathPrefix: "/headway-showcase",
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: `${process.env.IG_TOKEN}`
      }
    }
  ]
};
