import React from "react"
import styled from "styled-components"
import "./products.css"
import { productList } from "./productList"
import DummySVG from "./dumy.svg"
import Carousel from "react-elastic-carousel"

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4 },
  { width: 1450, itemsToShow: 4 },
  { width: 1750, itemsToShow: 4 },
]

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  margin: auto;
  padding: 0 10%;
  transform: translateY(52vh) translateX(-8px);
  z-index:2;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  background-color: #14092e;

  @media (max-width: 560px) {
    padding: 0 5%;
  }
`
const SectionHeading = styled.h2`
  margin-left: 10vw;
  font-size: clamp(20px,4vw,30px);
  
  @media (max-width: 560px) {
    margin-left: 3vw;
    text-align: center;
  }
`

const SectionDescription = styled.h3`
  margin-left: 10vw;
  font-size: clamp(14px,3vw,18px);
  font-weigth: 300;
  color: #e0e0e0;

  @media (max-width: 560px) {
    margin-left: 3vw;
    text-align: center;
  }
`

const DummyContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 20px 0px ;

  @media (max-width: 560px) {
    width: 100%
  }
`

const DummyCard = styled.div`
  position: relative;
  width: 260px;
  height: 270px;
  background-color: #3e2342;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 10px;
  border: 3px grey solid;
  outline: none;

  &:hover{
    background-color: #47294d;
    cursor: pointer;
  }
`

const DummyHeader = styled.h2`
  margin-left: 5px;
  font-size: 24px;
`

const DummyDescription = styled.p`
  display: block;
  width: 80%;
  margin-left: 5px;
  color: #e0e0e0;
`

const AddButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  background-color: #a258ad;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover{
    background-color: #864191;
  }
`

function handleCardClick(prod) {
  if (localStorage.getItem("dummies") === null) {
    const productsArray = []
    productsArray.push(prod.name)
    localStorage.dummies = JSON.stringify(productsArray)
  } else {
    const newProductsArray = JSON.parse(localStorage.dummies)
    if (newProductsArray.find(dummy => dummy === prod.name)) {
      alert("This dummy is already in cart")
    } else {
      newProductsArray.push(prod.name)
      localStorage.dummies = JSON.stringify(newProductsArray)
    }
  }
}

export default function Products() {
  return (
    <Container>
      <SectionHeading>Explore community choices</SectionHeading>
      <SectionDescription>Updated daily based on most popular choices <br />among dev community</SectionDescription>
      <DummyContainer>
        <Carousel breakPoints={breakpoints} pagination={false}>
          {
            productList.map((product) => {
              return (
                <DummyCard key={product.slug}>
                  <img src={DummySVG} />
                  <div>
                    <DummyHeader>{product.name}</DummyHeader>
                    <DummyDescription>{product.description}</DummyDescription>
                  </div>
                  <AddButton onClick={() => handleCardClick(product)}>+</AddButton>
                </DummyCard>
              )
            })
          }
        </Carousel>
      </DummyContainer>
    </Container>
  )
}
