import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div style={{ background: "#f4f4f4" }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-evenly', padding: "5px" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/himalayan-hiking-biking-camping-checklist">Checklist</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/page-2">Services</Link></li>
        </ul>
    </div>
)

export default Menu

