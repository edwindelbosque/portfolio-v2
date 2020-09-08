import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/main.sass"

const Header = ({ siteTitle }) => (
  <header>
    <div className="inner-header">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
