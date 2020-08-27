import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
  <div>
    <Layout>
      <br />
      <br />
      <h1 className="text-center">Contact</h1>
      <p className="text-center">
        I am available for freelance web development work.
      </p>
      <p className="text-center">
        Email:
        <a href="mailto:samklepdev@gmail.com" target="_blank" rel="noreferrer">
          {" "}
          samklepdev@gmail.com
        </a>
      </p>
      <p className="text-center">
        Portfolio:
        <a
          href="https://lavender-portfolio.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          My Portfolio
        </a>
      </p>
      <p className="text-center">
        GitHub:
        <a
          href="https://www.github.com/samklep"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          github.com/samklep
        </a>
      </p>
      <br />
    </Layout>
  </div>
)

export default ContactPage
