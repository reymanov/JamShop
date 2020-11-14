import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 95vw;
  heigth: 40px;
  padding: 10px;
  margin: 30px auto;
  z-index: 5;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
`

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link
          to="/" style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "500",
            marginLeft: "20px",
            padding: "10px 15px",
          }}
        >JAM SHOP
        </Link>
      </div>
    </StyledHeader>
  )
}
