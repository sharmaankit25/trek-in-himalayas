import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TreksList from "../components/treksList"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="List of treks in himalayas" />
    <TreksList treks={ data.allTreksJson } />
  </Layout>
)

export const pageQuery = graphql`
query TreksIndexQuery {
  allTreksJson {
    totalCount
    nodes {
      id
      trek_id
      slug
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

`

export default IndexPage
