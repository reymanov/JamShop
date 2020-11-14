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
  position: relative;
  width: 70%;
  margin: 10vh auto 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 5;

  @media (max-width: 975px) {
    width: 90%
  }

  @media (max-width: 560px) {
    flex-direction: column;
    text-align:center;
    margin: 6vh auto 5vh;
  }

`
const Monitor = styled.img`
  
  @media (max-width: 975px) {
    width: 300px;
  }
`

const StyledHeading = styled.h1`
  position: relative;
  color: #fff;
  font-size: clamp(1.6rem,4vw,3.2rem);
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
          <Monitor src={HeroImage} alt="Vector Monitor" />
        </div>
        <div>
          <StyledHeading>Don't waste time <br />on boring things</StyledHeading>
          <StyledButton>GO EXPLORE</StyledButton>
        </div>
      </HeroContainer>
      <HeroBG src={HeroBackground} />
    </Hero>
  )
}

export default HomepageHero
