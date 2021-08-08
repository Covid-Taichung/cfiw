import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MapPage = () => (
  <Layout>
    <Seo title="CFIW Map" />
    <p>Welcome to Map</p>
		<div className="container">
			{/* <!-- map introduction section --> */}
			<h1>
				All-in-one COVID-19 map of Taichung City for English speakers
			</h1>
			<section>
				<p>
					Our Taichung City map shows <strong>all covid-related locations</strong> to easily find:
				</p>
				<ul>
					<li>
						Where and how to get tested or vaccinated for SARS-CoV2
					</li>
					<li>
						Footprints of confirmed covid cases
					</li>
					<li>
						Locations for disinfection by the Environmental Protection Bureau
					</li>
				</ul>
				<p>
					To quickly find the locations you're interested in:
				</p>
				<ul>
					<li>
						Scroll, zoom, and drag to move to an area you want to check
					</li>	
					<li>	
						Use the side menu (button top left) to select location types and days	
					</li>
					<li>
						Click a pin for address and appointment data, when other confirmed cases visited a footprint location, and disinfection info.
					</li>
					<li>
						Check the legend below our map to understand pin colors and map functions
					</li>
					<li>
						<a href="https://www.covid-taichung.com/maps/#map-instructions">Read the advanced user guide</a> if it's your first visit
					</li>
				</ul>
				<p>
					<strong>Some pins point to large areas like parks and shopping streets. Disinfection teams or confirmed cases may have visited several spots in the area around the pin.</strong>
				</p>
			</section>

			{/* <!-- map and legend section --> */}
			<section>
				<table>
					<tbody>
						<tr>
							<td>
								<img src="https://i.ibb.co/Zmvh5K8/Google-Maps-open-menu-icon.png" alt="open-menu-icon" border="0" />
							</td>
							<td className="info">
								open menu to show/hide dates/types
							</td>
						</tr>
					</tbody>
				</table> 

				<iframe className="map-container" src="https://www.google.com/maps/d/embed?mid=18X9JaUt12euUZQ9SP42RkJzksRCo7bWw&amp;ll=24.201530,120.64562&amp;z=11">
				</iframe>
				{/* <!-- old iframe measurements:  width="720" height="400" --> */}

				<table>
					<tbody>
					    <tr>
							<td>
								<img src="https://i.ibb.co/12DjsWm/CFIW-mint-green-health-pin.png" alt="mint-green-health-pin" border="0" />
							</td>
							<td className="info">
								testing/vaccination for English speakers
							</td>
					    </tr>

					    <tr>
							<td>
								<img src="https://i.ibb.co/CK66g3y/CFIW-yellow-health-pin.png" alt="yellow-health-pin" border="0" />
							</td>
							<td className="info">
								testing/vaccination for Chinese speakers
							</td>
					    </tr>

					    <tr>
							<td>
								<img src="https://i.ibb.co/N3tfg1D/CFIW-pink-pin-72ppi-transparent.png" alt="pink-foot-pin" border="0" />
							</td>
							<td className="info">
								confirmed case footprint
							</td>
					    </tr>

					    <tr>
							<td>
								<img src="https://i.ibb.co/Sv0PPNs/CFIW-purple-check-pin-72ppi-transparent.png" alt="purple-check-pin" border="0" />
							</td>
							<td className="info">
								planned or completed disinfection
							</td>
					    </tr>

					    <tr>
							<td>
								<img src="https://i.ibb.co/6H9nmGS/Google-Maps-social-share-icon.png" alt="social-share-icon" border="0" />
							</td>
							<td className="info">
								share map with friends and family
							</td>
					    </tr>

					    <tr>
							<td>
								<img src="https://i.ibb.co/zJ5CKkV/Google-Maps-open-full-map-icon.png" alt="open-full-map-icon" border="0" />
							</td>
							<td className="info">
								open map in new window or navigation app
							</td>
					    </tr>
					</tbody>
				</table>
			</section>

			{/* <!-- map extra details section --> */}
			<section>
				<p>
					<strong><span className="red">
						Important notes about the health facilities on our map:
					</span></strong>
				</p>
				<ul>
					<li>
						<strong>Recommended means they offer certain products of services in English</strong> but it differs greatly per facility. Click on a mint-green pin to read all the details.
					</li>
					<li>
						Please <strong>visit a health facility close to your location</strong>. At some facilities we found only 1 or 2 heroes that speak English and are willing to help outside of their normal duties. So be kind and respectful. Or, if you have a translator, consider the yellow pins.
					</li>
					<li>
						Hospitals often cover large areas and have multiple entrances so <strong>we've tried to put our pins close to where they test or vaccinate</strong>. More info in the details.
					</li>
				</ul>
			</section>
			
			{/* <!-- map user guide section --> */}
			<section>
				<h2>
					Detailed instructions for Taichung City COVID map
				</h2>
				
				{/* <!-- IMAGE GOES HERE --> */}
				<p className="user-guide-image"><img src="https://www.covid-taichung.com/_files/200000020-b80a3b80a5/450/map-top-bar-options-tab.jpg" /></p>
				
				<p>
					Click the button in the <strong>top left corner</strong> of the map to open the sidebar. Now choose for which dates you want to show or hide locations. Scroll down for more options.
				</p> 
				<p>
					When you click a pin on the map it shows extra information on the left or below on mobile devices.  You can scroll down in that menu for additional info and links.
					
				</p>


				{/* <!-- IMAGE GOES HERE --> */}
				<p className="user-guide-image"><img src="https://www.covid-taichung.com/_files/200000019-97d3197d33/450/map-top-bar-translate-box-2.jpg" /></p>

				<p>
					Click the button in the <strong>top right corner</strong> to open our map in a new browser window or in your Google Maps app on mobile devices. <strong>On phones you may have to switch to landscape mode to see the button</strong>.			
				</p>
			</section>
		</div>
  </Layout>
)

export default MapPage