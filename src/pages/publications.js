import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Publications = () => (
  <Layout>
    <SEO title="Publications" />
    <h1>Publications</h1>
    <p>View my publications on <Link to="https://www.researchgate.net/profile/Kathryn-Lovero">ResearchGate.</Link>
    </p>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
)

export default Publications
