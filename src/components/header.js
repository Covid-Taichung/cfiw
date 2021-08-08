import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

{/* <header>
  <div class='logo'>
    <img class="logo-img" src="assets/Baby-Footprint-White-PNG.png" alt="logo" height="30px" />
    <span>
      Covid Taichung
    </span>
  </div>
</header> */}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--background)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="logo"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        float: `left`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--light-text)`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/footprints-white.png"
            width={50}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Footprints"
            style={{ marginRight: `1.45rem`}}
            className="logo-img"
          />
          {siteTitle}
        </Link>
      </h1>

    </div>
    <input type='checkbox' id='nav-toggle' class='nav-toggle' />
    <nav class='nav'>
      <ul>
        <li><Link to='/footprints'>Footprints</Link></li>
        <li><a href='/faq.html'>FAQ</a></li>
        <li><a href='/map.html'>Map</a></li>
        <li><a href='/mapV3.html'>Map V3</a></li>
        <li><Link to='/guides'>Guides</Link></li>
        <li><Link to='/stats'>Stats</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
    <label for='nav-toggle' class='nav-toggle-label'>
      <span></span>
    </label>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
