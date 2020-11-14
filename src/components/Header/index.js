import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 99vw;
  heigth: 40px;
  padding: 10px;
  margin: auto;
  z-index: 5;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
`

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontSize: "1.4rem", fontWeight: "500" }}>JAM SHOP</Link>
      </div>
    </StyledHeader>
  )
}
