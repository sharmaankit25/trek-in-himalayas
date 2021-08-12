import React from 'react'
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'antd'

export default function Template(context) {
  console.log(context)
    const trek = context.data.treksJson
    return (
        <Layout>
            <SEO title={ trek.name } />
            <Link to="/"><Button type="primary">Go Back</Button></Link>
            <h1>{ trek.name }</h1>
            <p>{ trek.description }</p>
            <ul>
              <li>Attractions : {trek.attractions} </li>
              <li>Best Season Time : {trek.best_season_time} </li>
              <li>State : {trek.state_name} </li>
              <li>Summit Point : {trek.summit_point} </li>
              <li>Time Duration : {trek.time_duration} </li>
              <li>Difficulty Level : {trek.difficulty_level} </li>
              <li>Max Altitude : {trek.max_altitude} </li>
              <li>Temp Range : {trek.temp_range} Cel </li>
              <li>Airport Name : {trek.near_airport} </li>
              <li>Airport Distance : {trek.airport_distance} Km</li>
              <li>Nearest Motorable Location : {trek.nearest_motorable_location} </li>
              <li>Nearest Railway : {trek.nearest_railway} </li>
              <li>Railway Code : {trek.railway_code} </li>
              <li>Railway Station Distance : {trek.railway_distance} Km</li>
            </ul>
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
