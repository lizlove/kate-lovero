import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Dr. Kate Lovero is Assistant Professor in the Department of Psychiatry at Columbia University Vagelos College of Physicians and Surgeons.  Her research uses a community-based participatory approach to identify best practice for implementing evidence-based treatments for adolescent mental illness in low-resource settings. Currently, she is collaborating with the Ministry of Health in Mozambique to evaluate strategies for implementing adolescent mental health services within primary care facilities.</p>
    <p>Prior to her position at Columbia, Dr. Lovero was a NIH Global Health Equity Scholar and Fulbright Postdoctoral Fellow in Brazil, studying barriers to care and developing methods to improve services for maternal-child health in partnership with local health officials and clinicians.</p>
    <p>Dr. Lovero earned her PhD in Neuroscience from the University of California, San Francisco, where she characterized molecular structures underlying healthy and pathological brain development.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/publications/">Publications</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
