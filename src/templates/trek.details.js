import React from 'react'
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'antd'

export default function Template({ data }) {
    return (
        <Layout>
            <SEO title={ data.treksJson.name } />
            <Link to="/"><Button type="primary">Go Back</Button></Link>
            <h1>{ data.treksJson.name }</h1>
            <p>{ data.treksJson.description }</p>
        </Layout>
    )
}

export const trekQuery = graphql`
query TrekJsonById($slug: String) {
    treksJson(slug: {eq: $slug}) {
      id
      name
      slug
      airport_distance
      attractions
      best_season_time
      difficulty_level
      description
      header_img_url
      max_altitude
      near_airport
      nearest_motorable_location
      nearest_railway
      railway_code
      railway_distance
      state_id
      state_name
      summit_point
      temp_range
      time_duration
      trek_id
    }
  }
`
