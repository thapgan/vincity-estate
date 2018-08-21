import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'

import './layout.css'
import './slick.css'
import './slick-theme.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>Vincity-Estate</title>
      <meta name="description" content="Vincity Gia Lam" />
      <meta name="keywords" content="vincitygiaLam, vincity, gialam, bđs, bđs vincity" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
      <script src="/fb-sdk.js"/>
    </Helmet>
    <Header />
    <div id="fb-root"></div>
    <div
      style={{
        margin: '0 auto',
      }}
    >
      {children()}

    </div>
    <Footer></Footer>
    <div className="hotline">
      <a href="tel:0989354396" className="call-link" rel="nofollow">
        <div className="alo-icon">
          <div className="animate-circle"></div>
          <div className="animate-circle-fill"></div>
          <div className="animate-circle-phone"></div>
        </div>
      </a>
      <div className="hotline-text">
        <a href="tel:0989354396">     0989 354 396</a>
      </div>
    </div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
