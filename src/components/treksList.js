import React from 'react'
import Link from 'gatsby-link'

const TreksList = ({ treks }) => (
    <div>
       <h2>{ treks.totalCount } Treks</h2>
       <ol>
{ treks.nodes.map(trek =>
    (<li key={trek.id}>
        <Link to={ `treks/${trek.slug}` }>{ trek.name }</Link>
        </li>)
    ) }
       </ol>
    </div>
)

export default TreksList

