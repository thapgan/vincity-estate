import React from "react"
import Link from 'gatsby-link'
import './news-item.css'

export default function NewsItem(props) {
    return (
        <Link to={`${props.post.frontmatter.path}`} className="post-item">
            <div>
                <h1 className="post-title">{props.post.frontmatter.title}</h1>
                <time dateTime={props.post.frontmatter.date} className="post-time">{`${props.post.frontmatter.date} | ${props.post.timeToRead} minute read`}</time>
                <div className="post-item-line"></div>
                <p>{props.post.excerpt}</p>
            </div>
        </Link>
    )
}
