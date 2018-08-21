const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
  
    return graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                path
                title
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }
  
        const news = result.data.allMarkdownRemark.edges;
  
        const newTemplate = path.resolve(`src/templates/news.js`);
 
        //create post pages
        news.forEach(({ node }) => {
          createPage({
            path: `/${node.frontmatter.path}`,
            component: newTemplate,
            context: {
              mdPath: node.frontmatter.path
            }
          });
        });
      });
  };