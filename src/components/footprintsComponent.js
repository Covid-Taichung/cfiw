import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import footprintsData from "./footprintsData.json"

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
`
const Li = styled.li`
  display: inline-block;
  list-style-type: none;
  border-radius: 0.4em;
  background-color: rgb(57, 57, 57);
  :not(:first-of-type) {
    margin-left: 1em;
  }
`
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 20px 30px;
  color: white;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: white;
    opacity: 0.8;
  }
  &:visited {
      color: hsl(0,0%,90%);
  }
`

const FootprintsDay = ({ link, date }) => {
    return (
        <Li>
            <StyledLink to={link}>
                {date}
            </StyledLink>
        </Li>
    )
}

const Footprints = () => {
    return (
        <div>
            <Ul>
                {footprintsData.map(({ link, date }) => (
                    <FootprintsDay link={link} date={date} key={date} />
                ))}
            </Ul>
        </div>
    )
}

export default Footprints