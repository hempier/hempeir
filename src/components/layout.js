/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "../styles/index.scss"

import Header from "./header/header"
import Footer from "./footer/footer"


const Layout = ({children, allLocales, currentLocale}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <>
      <Header currentLocale={currentLocale}/>
      <main className="content">{children}</main>
      {allLocales ? allLocales.map(loc => {
        return <a key={loc.name} href={loc.pathname}>{loc.name}</a>
      }): null}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  allLocales: PropTypes.array
}

export default Layout
