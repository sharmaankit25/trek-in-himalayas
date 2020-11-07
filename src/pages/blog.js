import React from 'react'
import Layout from "../components/layout"
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
        <Layout>
            <h1>Latest Posts</h1>
            Blog Page
            { data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted By { post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
                    <br/><br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br/><br />
                    <hr />
                </div>
            )) }
        </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
                date
                author
              }
              excerpt
            }
          }
        }
    }
`


export default BlogPage
