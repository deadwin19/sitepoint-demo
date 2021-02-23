import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to {data.site.siteMetadata.title}</h1>
    <p>I have used a GraphQL query</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query testQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default SecondPage
