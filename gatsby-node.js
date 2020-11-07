/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

function string_to_slug (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `TreksJson`) {
    node.slug = `${string_to_slug(node.name)}`
  }

}

const { create } = require('domain');
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('src/templates/blog.post.js');
    const trekDetailsTemplate = path.resolve('src/templates/trek.details.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                  node {
                      html
                      id
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
              allTreksJson {
                totalCount
                nodes {
                  id
                  trek_id
                  airport_distance
                  attractions
                  best_season_time
                  description
                  difficulty_level
                  header_img_url
                  max_altitude
                  name
                  nearest_motorable_location
                  near_airport
                  nearest_railway
                  railway_code
                  railway_distance
                  state_id
                  state_name
                  temp_range
                  summit_point
                  time_duration
                }
              }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })

        res.data.allTreksJson.nodes.forEach(({ node }) => {
            createPage({
                path: `/treks/:slug`,
                matchPath: `/treks/:slug`,
                component: trekDetailsTemplate
            })
        })
    })
}
