import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Folks!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Lets build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">About</Link> <br />
    <Link to="/page-2">Service</Link>
  </Layout>
)

export default IndexPage
