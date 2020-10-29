import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kate Lovero" />
    <div className="flex-horz">
      <div className="flex-item">
        <p>Dr. Kate Lovero is Assistant Professor in the <a  rel="noreferrer" target='_blank' href="https://www.columbiapsychiatry.org/research"> Department of Psychiatry</a> at Columbia University Vagelos College of Physicians and Surgeons. Her research uses a community-based participatory approach to identify best practice for implementing evidence-based treatments for adolescent mental illness in low-resource settings. Currently, she is collaborating with the <a rel="noreferrer" target='_blank' href="https://www.misau.gov.mz/">Ministry of Health</a> in Mozambique to evaluate strategies for implementing adolescent mental health services within primary care facilities.</p>
        <p>Prior to her position at Columbia, Dr. Lovero was a <a rel="noreferrer" target='_blank' href="http://ghes.berkeley.edu/">NIH Global Health Equity Scholar</a> and <a  rel="noreferrer" target='_blank' href="https://www.cies.org/program/postdoc">Fulbright Postdoctoral Fellow</a> in Brazil, studying barriers to care and developing methods to improve services for maternal-child health in partnership with local health officials and clinicians.</p>
        <p>Dr. Lovero earned her PhD in Neuroscience from the University of California, San Francisco, where she characterized molecular structures underlying healthy and pathological brain development.</p>
      </div>
      <Image style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </div>
    <br />
    <Link className="button" to="/publications/">Publications</Link> <br />
  </Layout>
)

export default IndexPage
