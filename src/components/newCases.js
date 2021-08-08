import * as React from "react"

import Arrivals from "/assets/newCases/SVGs/arrivals.inline.svg"
import Taichung from "/assets/newCases/SVGs/Taichung.inline.svg"
import Taiwan from "/assets/newCases/SVGs/Taiwan.inline.svg"

import "./newCases.css"

const NewCases = () => (
    <h2 className="New-Cases">
      <div className="New-Cases__header">
        {/* <!-- Chance Datetime     --> */}
        <time datetime="2021-08-06" className="New-Cases__header__cal">
          <div className="New-Cases__header__cal-month">
            {/* <!-- Change Month --> */}
            Aug
          </div>
          <div className="New-Cases__header__cal-day-number">
            {/* <!-- Change Day of Month --> */}
            06 
          </div>
          <div className="New-Cases__header__cal-day-of-week">
            {/* <!-- Change Day of Week --> */}
            Friday
          </div>
        </time>
        <div className="New-Cases__header__TotalCases">
          <div className="number">
            {/* <!-- Change # of New Total Cases --> */}
            12
          </div>
          <div>
            Total Cases
          </div>
        </div>
      </div>
      <div className="New-Cases__latest-numbers">
        <div className="New-Cases__latest-numbers-both-imported-and-local">
          <div className="New-Cases__latest-numbers-imported">
            <Arrivals />
            <div>
              <div className="number">
                {/* <!-- Change # of Imported Cases --> */}
                2
              </div>
              <div>
                imported
              </div>
            </div>
          </div>
          <div className="New-Cases__latest-numbers-local">
            <div>
              <div className="number">
                {/* <!-- Change # of Local Cases --> */}
                10
              </div>
              <div>
                local
              </div>
            </div>
            <Taiwan />
          </div>
        </div>
        <div className="New-Cases__latest-numbers-taichung">
          <div>
              <Taichung />
          </div>
          <div className="New-Cases_latest-numbers-taichung-parenthetical">
            <div>
              including
            </div>
            <div className="number">
              {/* <!-- Change # of new Taichung Cases --> */}
              none
            </div>
            <div>
              in Taichung
            </div>
          </div>
        </div>
      </div>
      <div className="New-Cases__footer">
        <div>
          Source: CECC Taiwan
        </div>
      </div>
    </h2>
)

export default NewCases