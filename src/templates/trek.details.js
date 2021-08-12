import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, PageHeader, Descriptions } from "antd"

export default function Template(context) {
  const trek = context.data.treksJson
  return (
    <Layout>
      <SEO title={trek.name} />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {trek.name}
        </Breadcrumb.Item>
      </Breadcrumb>

      <PageHeader onBack={() => window.history.back()} title={trek.name} />
      <p>{trek.description}</p>
      <Descriptions size="medium" column={1}>
        <Descriptions.Item label="State">{trek.state_name}</Descriptions.Item>
        <Descriptions.Item label="Summit">
          {trek.summit_point}
        </Descriptions.Item>
        <Descriptions.Item label="Season">
          {trek.best_season_time}
        </Descriptions.Item>
        <Descriptions.Item label="Attractions">
          {trek.attractions}
        </Descriptions.Item>
        <Descriptions.Item label="Duration">
          {trek.time_duration}
        </Descriptions.Item>
        <Descriptions.Item label="Difficulty">
          {trek.difficulty_level}
        </Descriptions.Item>
        <Descriptions.Item label="Max Altitude">
          {trek.max_altitude}
        </Descriptions.Item>
        <Descriptions.Item label="Temp Range">
          {trek.temp_range} Cel
        </Descriptions.Item>
        <Descriptions.Item label="Nearest Motorable Location">
          {trek.nearest_motorable_location}
        </Descriptions.Item>
        <Descriptions.Item label="Airport">
          {trek.near_airport} ({trek.airport_distance} Km)
        </Descriptions.Item>
        <Descriptions.Item label="Railway">
          {trek.nearest_railway} [ {trek.railway_code} ] (
          {trek.railway_distance} Km)
        </Descriptions.Item>
      </Descriptions>
    </Layout>
  )
}

export const trekQuery = graphql`
  query TrekJsonById($slug: String) {
    treksJson(slug: { eq: $slug }) {
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
