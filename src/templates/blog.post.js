import React from 'react'
import Link from 'gatsby-link'

import Layout from "../components/layout"

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <Link to={post.frontmatter.type === "Blog" ? '/blog' : '/'}>Go Back</Link>
            <hr />
            { post.frontmatter.type === "Blog" && <h1>{ post.frontmatter.title }</h1>}
            { post.frontmatter.type === "Blog" &&  <h4>Posted By { post.frontmatter.author } on { post.frontmatter.date }</h4>}


            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
                type
            }
        }
    }
`
