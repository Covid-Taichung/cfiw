import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NewCases from "../components/newCases"
import Footprints from "../components/footprintsComponent"

// import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>COVID Information for English Speakers in Taichung</h1>
    <NewCases />

    <div>
      <p>
        Check our{' '}
        <a href="/map.html" style={{ fontSize: "1.25rem" }}>
          COVID-19 map of Taichung
        </a>
        {' '}to find locations for testing and vaccinations, footprints, and disinfection around you.
        <br />
      </p>
      <Link to="/footprints/">All Footprints</Link>
      <Footprints />
      <br />
      <br />
      <p>
        For COVID-19 questions or concerns our
        <a href="/frequently-asked-questions/">
          FAQ page lists covid-related answers
        </a>
        and resources that are available for English speakers in Taiwan and Taichung.
      </p>
      <p>
        Click on a date below to see daily footprints from confirmed cases in Taichung City in English (
        <a href="https://www.taichung.gov.tw/1789570/Lpsimplelist">
          Chinese source
        </a>
        ). When a date is missing, there was no footprint data available.
      </p>
    </div>
  </Layout>
)

export default IndexPage
