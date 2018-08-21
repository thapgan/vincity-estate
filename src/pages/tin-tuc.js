import React from 'react'
import Link from 'gatsby-link'
import NewsItem from '../components/news-item'

export default class NewsListPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <div className="thumb-img">
          <img src='/default-thumb.jpg' className="stretch" />
          <div>
            <h2 className="news-title">Tin tức dự án Vincity Gia Lâm</h2>
          </div>
        </div>
        <div className="news-container">
        {posts.map(({ node }) => (
          <NewsItem post={node} key={node.id} />
        ))}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            path
            title
          }
        }
      }
    }
  }
  `;