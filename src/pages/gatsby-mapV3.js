import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

    // <!--jQuery-->
// import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    
    // <!--ion Range Slider Plugin JavaScript file-->
// import "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"
    
    // <!-- Script with fetch data functions -->
// import "../../static/map/map-fetch-scripts.js"
// import "../../static/map/initialize-slider.js"
// import "../../static/map/map-functions.js"
// import "../../static/map/map-marker-toggles.js"

const MapV3Page = () => (
  <Layout>
    <Seo title="CFIW Map" />
		<h1>
			All-in-one COVID-19 map of Taichung City for English speakers
		</h1>
		<h2 id="page-header">
			What do you want to see?
		</h2>
		<div className="controls-container">
			<div className="hide-show-controls">
				<button id="footprint-button" className="footprint-button control-button">Footprints</button>
				<button id="disinfection-button" className="disinfection-button control-button">Disinfections</button>
				<button id="health-center-button" className="health-center-button control-button pressed health-center-pressed">Health Facilities</button>
				{/* <!-- <button id="vaccination-hospitals-button" className="control-button pressed vaccination-pressed">Hide Vaccination Hospitals</button> --> */}
			</div>
			{/* <!-- <div id="footprint-controls-container" className="container">
				<div className="category-container">
					<label className="control-label"> <img src="https://i.ibb.co/N3tfg1D/CFIW-pink-pin-72ppi-transparent.png" className="inline-legend" />Footprint locations</label>
					<div className="hide-show-controls">
						
					</div>
				</div>
			</div> --> */}
			<div id="selectors-container">
				<div id="footprint-selectors" className="category-container hidden">
					<div className="range-slider">
					<input type="text" className="js-range-slider" value="" />
					</div>
					{/* <!-- <div className="extra-controls">
						<input type="text" className="js-input-from js-input" value="0" />
						<input type="text" className="js-input-to js-input" value="0" />
					</div> --> */}
				</div>
				<div id="disinfection-selectors" className="category-container hidden">
					{/* <!-- <label className="control-label"><img src="https://i.ibb.co/Sv0PPNs/CFIW-purple-check-pin-72ppi-transparent.png" className="inline-legend" /> Disinfection Locations
					</label> --> */}
					<div>
						{/* <!-- <button id="disinfect-all" className="disinfection-button">All</button> -->
						<button id="disinfect-yesterday" className="disinfection-button">Yesterday</button> */}
						<button id="disinfect-today" className="disinfection-button">Today</button>
						<button id="disinfect-tomorrow" className="disinfection-button">Tomorrow</button>
					</div>
				</div>
				<div id="health-center-selectors" className="category-container">
					<div>
						{/* <!-- <button id="test-english" className="health-center-button">English</button>
						<button id="test-pregnant" className="health-center-button">Pregnancy</button> --> */}
						<button id="test-rapid" className="health-center-button health-center-pressed">
							Rapid Test
						</button>
						<button id="test-pcr" className="health-center-button health-center-pressed">
							PCR Test
						</button>
						<button id="vac-zeneca"className="health-center-button health-center-pressed">
							Astra Zeneca
						</button>
						<button id="vac-moderna"className="health-center-button health-center-pressed">
							Moderna
						</button>
					</div>
				</div>
				{/* <!-- <div id="vaccination-selectors" className="category-container">
				</div> --> */}
				{/* <!--<div className="category-container">
					<label className="other-control-label">Vaccination Stations</label>
					<div className="hide-show-controls">
						<button id="hide-vaccination-stations" className="hide-show-button">Hide</button>
						<button id="show-vaccination-stations" className="hide-show-button">Show</button>
					</div>
				</div>--> */}
			</div>
		</div>
		<div id="map"></div>
  </Layout>
)

export default MapV3Page