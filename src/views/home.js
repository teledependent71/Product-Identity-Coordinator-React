import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Identity Coordinator</title>
        <meta property="og:title" content="Product Identity Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
