import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./faq.css"

		// <!-- a link to a stylesheet later -->
		// <!-- get it working first -->
		// <link href='css/style.css' rel='stylesheet' type='text/css'>
		// <link href='css/faq-style.css' rel='stylesheet' type='text/css'>
		// <link href='css/headerStyle.css' rel='stylesheet' type='text/css'>
		// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>

		// <script src="faq/dynamic-faq-test.js"></script>
		// <script src="faq/dnu-files.js"></script>

const FAQPage = () => (
  <Layout>
    <Seo title="CFIW FAQ" />
    <h1>Hi people</h1>
    <p>Welcome to FAQ</p>
    <p>Now go build something great.</p>
      {/* <Link to="">Go to page 2</Link> <br />
      <Link to="">Go to "Using TypeScript"</Link> */}

	<div class="container">
		<h1>
			Answers to your Covid-19 questions
		</h1>
		<div id="searchWrapper" class="searchWrapper">
			<h2>
				Type keywords in our search box or scroll down to find answers about COVID-19 in Taichung and Taiwan.
			</h2>
			<input
				type="text"
				name="searchBar"
				id="searchBar"
				class="searchBar"
				placeholder="How may we help you?"
			/>
			<div id="searchResults">
				
			</div>
		</div>


		<div id="latest-updates" class="latest-updates red">
			<p class="red">
				<strong>7/23 Vaccination update summary</strong>
			</p>
			<ul class="red">
			<li>
				<a href="https://www.google.com/maps/d/viewer?mid=18X9JaUt12euUZQ9SP42RkJzksRCo7bWw&ll=24.1409975814339%2C120.67802993570996&z=16">Taichung hospital</a> has opened <a href="https://www03.taic.mohw.gov.tw/OINetReg/OINetReg.Reg/Reg_RegTable.aspx?HID=F&Way=Dept&DivDr=01CC&Date=&Noon=">reservation for 2nd dose of AZ</a> on 7/26 - 7/30. 
			</li>
			<li>
				We've updated our <a href="https://www.covid-taichung.com/vaccination-guide/">vaccination guide</a> with step-by-step instructions for booking your vaccination appointment online on a mobile device, at Family Mart (FamiPort), or at OK Mart (OK go).
			</li>
			<li>
				CDC has announced that in view of a possible typhoon this week, vaccination locations may close or change vaccination schedules. If you have an upcoming appointment, please double-check.
			</li>
			<li>
				3rd round (18 and older) registration has ended. 1922 will start sending text messages with instructions for booking after 2nd round (groups 9/10) vaccinations.
			</li>
			<li>
				Read our <a href="https://www.covid-taichung.com/frequently-asked-questions/#question26">FAQ for a quick summary</a> or download <a href="https://www.covid-taichung.com/vaccination-guide/">our detailed vaccination guide</a>.
			</li>
			</ul>
			<p>
				Please 
				<a href="https://www.covid-taichung.com/contact/#contact-form">contact us
				</a> 
				if you know any great resources or tools or have questions that aren't listed here?
			</p>
		</div>


		<dl id="faqContainer" class="faqContainer">
			
		</dl>
	</div>
  </Layout>
)

export default FAQPage
