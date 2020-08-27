import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Enjoy NASA's Image of the Day</h1>
    <img src="https://apod.nasa.gov/apod/image/2008/ngc474MP1024.jpg"></img>
  </Layout>
)

export default IndexPage
