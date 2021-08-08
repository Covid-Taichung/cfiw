import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./guides.css"
import DownloadPDF from "/assets/guides/download-pdf.inline.svg"

const GuidesPage = () => (
  <Layout>
    <Seo title="Guides" />
    <h1>Hi people</h1>
    <p>Welcome to Guides</p>
    <p>Now go build something great.</p>
    <h1>
      User guides and forms for testing and vaccination
    </h1>
    <p>
      Step-by-step user guide of how to register and book your COVID-19 vaccination in Taiwan using the website
      <a href="https://1922.gov.tw">
        1922.gov.tw
      </a>
      or at health centers, pharmacies, or convenience stores.
    </p>
    <div class="pdf-button">
      <a href="assets/guides/COVID19 vaccination guide for 1922.gov.tw v1.5-min.pdf">
        <div>
          <DownloadPDF />
        </div>
        <div class="">
          COVID19 vaccination guide for 1922.gov.tw v1.5
          </div>
      </a>
    </div>
    <p>
      Application Form for Out-of-Pocket Polymerase Chain Reaction (PCR) Testing for Coronavirus Disease in English. Required for PCR tests as well as NHI card, ID, and other documents that support your reason for taking the test like your e-ticket if you plan to go abroad.
    </p>
    <div class="pdf-button">
      <a href="assets/guides/Application Form for Out-of-Pocket Polymerase Chain Reaction  (PCR) Testing for Coronavirus Disease 2019 (COVID-19) 110615-min.pdf" target="_blank">
        <div>
          <DownloadPDF />
        </div>
        <div class="">Application Form for PCR Testing v1100615</div>
      </a>
    </div>
  </Layout>
)

export default GuidesPage