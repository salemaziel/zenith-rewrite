import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/main.css'

import "./layout.css"


const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author {
		name
	 }
        }
      }
    }
  `)*/

  return (
    <>
      <Header /*siteTitle={data.site.siteMetadata.title}*/ />
      {children}
      <Footer />
    </>
  )
}

/*Layout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

export default Layout
