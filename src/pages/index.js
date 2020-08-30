import React from "react"

import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <br />
    <br />
    <SEO title="Home" />
    <h1 className="text-center">Enjoy NASA's Image of the Day</h1>
    <br />
    <img src="https://apod.nasa.gov/apod/image/2008/ngc6357_hubble_3140.jpg" />
    <br />
    <br />
  </Layout>
)

export default IndexPage
