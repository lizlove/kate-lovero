import PropTypes from "prop-types"
import React from "react"

const Footer = ({ copyRight }) => (
  <footer
    style={{
      marginBottom: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `center`
      }}
    >
      <p style={{ margin: 0, color: `white` }}>
      © {new Date().getFullYear()},
  {` `} {copyRight}
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  copyRight: PropTypes.string,
}

Footer.defaultProps = {
  copyRight: ``,
}

export default Footer
