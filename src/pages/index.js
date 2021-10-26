import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../scss/styles.scss"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0 auto",
}
const paragraphStyles = {
  marginBottom: 48,
  lineHeight: 1.65
}
const listStyles = {
  paddingLeft: 0,
}
const docLinkStyle = {
  color: "#006666",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  listStyleType: "none",
  marginBottom: 24,
}
const docLink = {
  text: "Publications",
  url: "https://www.ncbi.nlm.nih.gov/myncbi/1TAfAiACGPcQJ/bibliography/public/",
  color: "#3E6257",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Kate Lovero</title>
      <div className="wrapper" >
        <div className="container">
          <div className="textBlock">
            <h1>
              Kate Lovero
            </h1>
            <p style={paragraphStyles}>
              Dr. Kate Lovero is an <a rel="noreferrer" target="_blank" href="https://www.publichealth.columbia.edu/people/our-faculty/kll2153">Assistant Professor of Sociomedical Sciences</a> at the <a rel="noreferrer" target="_blank" href="https://www.publichealth.columbia.edu/" >Columbia University Mailman School of Public Health</a>. Her research aims to improve the prevention and treatment of adolescent mental health problems in low-resource settings. Specifically, she employs multilevel stakeholder engagement and implementation science methods to generate health care delivery models that address the complex drivers of mental health inequity. She also focuses on the development and validation of measurement instruments for mental health problems as well as the adaptation of implementation science research tools for non-Western settings. Currently, she collaborates with the Mozambican Ministry of Health to develop adolescent mental health services integrated within the national primary care system.
            </p>
            <p style={paragraphStyles}>Prior to her position at Columbia, Dr. Lovero was a <a rel="noreferrer" target='_blank' href="http://ghes.berkeley.edu/">NIH Global Health Equity Scholar</a> and <a  rel="noreferrer" target='_blank' href="https://www.cies.org/program/postdoc">Fulbright Postdoctoral Fellow</a> in Brazil, studying barriers to care and developing methods to improve services for maternal-child health in partnership with local health officials and clinicians.</p>
            <p style={paragraphStyles}>Dr. Lovero earned her PhD in Neuroscience from the University of California, San Francisco, where she characterized molecular structures underlying healthy and pathological brain development.</p>
            <ul style={listStyles}>
              <li style={docLinkStyle}>
                <a
                  rel="noreferrer" 
                  target="_blank"
                  href={`${docLink.url}`}
                >
                  {docLink.text}
                </a>
              </li>
            </ul>
          </div>
          <div className="imageBlock">
            <StaticImage src="../images/lovero-headshot-2.jpg" alt="Kate Lovero" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
