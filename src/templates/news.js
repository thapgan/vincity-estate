import React from "react";

import FloatingAction from "../components/floatingaction"
import Disqus from "../components/disqus";

export default class NewTemplate extends React.Component {

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html, excerpt } = markdownRemark;

    const post = {
      title: frontmatter.title,
      url: frontmatter.path,
      category_id: 'vincity-estate'
    }
    return (
      <div>
        <div className="thumb-img">
          <img src={`${frontmatter.thumbImg ? frontmatter.thumbImg : '/default-thumb.jpg'}`} className="stretch" />
          <div>
            <h2 className="news-title">{frontmatter.title}</h2>
          </div>
        </div>
        <div className="news-container">
          <div className="news" dangerouslySetInnerHTML={{ __html: html }} />        
          <Disqus
            post={post} disqusShortname='vincity-estate'
          />
        </div>
        <FloatingAction postUrl={'http://www.vincity-estate.com/' + frontmatter.path} excerpt={excerpt} title={frontmatter.title} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query NewsByPath($mdPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $mdPath } } ) {
      html
      excerpt(pruneLength: 250)      
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        title
        thumbImg
        path
      }
    }
  }
`;