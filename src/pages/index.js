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
        <p>Dr. Kate Lovero is an <a rel="noreferrer" target="_blank" href="https://www.publichealth.columbia.edu/people/our-faculty/kll2153">Assistant Professor of Sociomedical Sciences</a> at the <a rel="noreferrer" target="_blank" href="https://www.publichealth.columbia.edu/">Columbia University Mailman School of Public Health</a>. Her research aims to improve the prevention and treatment of adolescent mental health problems in low-resource settings. Specifically, she employs multilevel stakeholder engagement and implementation science methods to generate health care delivery models that address the complex drivers of mental health inequity. She also focuses on the development and validation of measurement instruments for mental health problems as well as the adaptation of implementation science research tools for non-Western settings. Currently, she collaborates with the Mozambican Ministry of Health to develop adolescent mental health services integrated within the national primary care system.</p>
        <p>Prior to her position at Columbia, Dr. Lovero was a <a rel="noreferrer" target='_blank' href="http://ghes.berkeley.edu/">NIH Global Health Equity Scholar</a> and <a  rel="noreferrer" target='_blank' href="https://www.cies.org/program/postdoc">Fulbright Postdoctoral Fellow</a> in Brazil, studying barriers to care and developing methods to improve services for maternal-child health in partnership with local health officials and clinicians.</p>
        <p>Dr. Lovero earned her PhD in Neuroscience from the University of California, San Francisco, where she characterized molecular structures underlying healthy and pathological brain development.</p>
      </div>
      <Image style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </div>
    <br />
    <Link className="button" to="https://www.ncbi.nlm.nih.gov/myncbi/1TAfAiACGPcQJ/bibliography/public/">Publications</Link> <br />
  </Layout>
)

export default IndexPage
