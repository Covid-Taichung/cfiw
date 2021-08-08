import * as React from "react"
import { Link } from "gatsby"

import Layout from "./layout"

import "./footprintsLayout.css"

const FootprintsLayout = ({ children }) => (
  <Layout>
      <div>
          <ul>
            <li>
              <Link to="../">Up one level</Link>
            </li>
          </ul>
      </div>
      <div>
    {children}
      </div>
  </Layout>
)

export default FootprintsLayout