import React from "react"
import styled from "styled-components"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"

const Hero = styled.section`
    box-sizing: border-box;
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: #14092e;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
`

const HeroBG = styled.img`
  position: absolute;
  z-index:4;
  right: 0;
  top: 0
`

const HeroContainer = styled.div`
  width: 70%;
  margin: 10vh auto 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const H1 = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3.2rem;
  z-index: 5;
  `

const StyledButton = styled.button`
    width: 120px;
    heigth: 60px;
    padding: 10px;
    color: #fff;
    background-color: #903f9e;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: background-color .3s ease;

    &:hover{
      background-color: #602b69;
    }
  `

function HomepageHero() {
  return (
    <Hero>
      <HeroContainer>
        <div>
          <img src={HeroImage} alt="Vector Monitor" />
        </div>
        <div>
          <H1>
            Don't waste time
            <br />
            on boring things
          </H1>
          <StyledButton>GO EXPLORE</StyledButton>
        </div>
      </HeroContainer>
      <HeroBG src={HeroBackground} />
    </Hero>
  )
}

export default HomepageHero
