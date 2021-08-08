import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./stats.css"

const StatsPage = () => (
  <Layout>
    <Seo title="Stats" />
			<p>Coronavirus stats below are updated frequently using data from
				<a href="https://track.taichung.gov.tw/">
					Taichung City
				</a> , the <a href="https://www.cdc.gov.tw/En">
					Taiwan Centers for Disease Control (CDC)
				</a>
				, and
				<a href="https://www.worldometers.info/coronavirus">
					Worldometer
				</a>.
			</p>
			<div className="cases-container">
				{/* <!-- TAICHUNG CASE INFORMATION --> */}
				<div className="cases-section">
					<h1> TAICHUNG 8/06 </h1>
					<p> last updated: 14:45 </p>
					{/* <!-- CASES INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> INFECTIONS </h2>
						<div>
							<span>Today:</span>
							<span className="newToday infections"> +0 </span>
						</div>
						<div>
							<span>Total:</span>
							<span className="total infections"> 202 </span>
						</div>
					</div>
				</div>

				{/* <!-- TAIWAN CASE INFORMATION --> */}
				<div className="cases-section">
					<h1> TAIWAN 8/06 </h1>
					<p> last updated: 14:45 </p>
					{/* <!-- CASES INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> INFECTIONS </h2>
						<div>
							<span> Today: </span>
							<span className="newToday infections"> +12 </span>
						</div>
						<div>
							<span> Total: </span>
							<span className="total infections"> 15,765 </span>
						</div>
					</div>
					{/* <!-- DEATHS INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> DEATHS </h2>
						<div>
							<span> Today: </span>
							<span className="newToday deaths"> +3 </span>
						</div>
						<div>
							<span> Total: </span>
							<span className="total deaths"> 794 </span>
						</div>
					</div>
					{/* <!-- RECOVERED INFORMATION--> */}
					<div className="cases-item">
						<h2 className="cases-heading"> RECOVERED </h2>
						<div>
							<span> Latest Update: </span>
							{/* <!-- Update report date --> */}
							<span className="newToday recovered"> Aug 7</span>
						</div>
						<div>
							<div> Of cases confirmed until: </div>
							{/* <!-- Update period covered  --> */}
							<span className="newToday recovered"> Aug 5 </span>
						</div>
						<div>
							<span> Total: </span>
							{/* <!-- Update # of total recoveries --> */}
							{/* <!-- (same as released from quarantine?) --> */}
							<span className="total recovered"> 13,053 </span>
						</div>
					</div>
				</div>

				{/* <!-- WORLDWIDE CASE INFORMATION --> */}
				<div className="cases-section">
					<h1> WORLD 8/06 </h1>
					<p> last updated: 14:45 </p>
					{/* <!-- CASES INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> INFECTIONS </h2>
						<div>
							<span> Today: </span>
							<span className="newToday infections"> +70,596 </span>
						</div>
						<div>
							<span> Total: </span>
							<span className="total infections"> 201,717,464 </span>
						</div>
					</div>
					{/* <!-- DEATHS INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> DEATHS </h2>
						<div>
							<span> Today: </span>
							<span className="newToday deaths"> +1,143 </span>
						</div>
						<div>
							<span> Total: </span>
							<span className="total deaths"> 4,280,628 </span>
						</div>
					</div>
					{/* <!-- RECOVERED INFORMATION --> */}
					<div className="cases-item">
						<h2 className="cases-heading"> RECOVERED </h2>
						<div>
							<span> Today: </span>
							<span className="newToday recovered"> +62,728 </span>
						</div>
						<div>
							<span> Total: </span>
							<span className="total recovered"> 181,473,371 </span>
						</div>
					</div>
				</div>
			</div>
    {/* <h1>Hi people</h1>
    <p>Welcome to Stats</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default StatsPage