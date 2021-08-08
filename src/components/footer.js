import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"

const Footer = () => (
	<footer>
		<p>
			<a href="https://www.covid-taichung.com/contact/#contact-team">
				Our volunteers
			</a>
			💛 translate and create much of this content manually.
			<br />
			If you find an issue or have a great idea, please
			<a href="https://www.covid-taichung.com/contact/#contact-form">
				tell us
			</a>.
		</p>
		<p>
			The materials provided in this web site may be used for private purposes.
			For use, reproduction or transmission for purposes other than private use, please contact us.
			The content on this website was translated by volunteers, third parties, and translation software.
			Reasonable efforts have been made in order to provide accurate translations.
			Translations are provided as a service to users of our website, and are provided "as is."
			No warranty of any kind, either expressed or implied, is made as to the reliability, accuracy, or
			correctness of any translations made from the source languages into any other language.
			Some content may not be accurately translated due to limitations of the translation software.
			Some content has been summarized and interpreted to provide a user-friendly service.
		</p>
		<p>
			Covid Taichung - Footprint and Information Website
			©
			{new Date().getFullYear()} 
          {` `}
		</p>
	</footer>
)

export default Footer