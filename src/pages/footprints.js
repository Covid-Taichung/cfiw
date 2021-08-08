import * as React from "react"
// import { Link } from "gatsby"

import FootprintsLayout from "../components/footprintsLayout"
import Seo from "../components/seo"

import Footprints from "../components/footprintsComponent"


const FootprintsPage = () => {
    return (
        <FootprintsLayout>
            <Seo title="Footprints" />
            <div>
                Footprints
            </div>
            <ul>
                <Footprints />
            </ul>
        </FootprintsLayout>
    )
}

export default FootprintsPage