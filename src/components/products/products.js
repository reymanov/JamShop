import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "./products.css"
import Cart from "../Cart/cart"
import DummySVG from "./dumy.svg"
import Carousel from "react-elastic-carousel"
import { graphql, useStaticQuery, Link } from "gatsby"

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
  border-radius: 5px;
  outline: none;
  transition: background-color .2s ease;

  &:hover{
    background-color: #47294d;
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  position: absolute;
  box-sizing: border-box;
  left:0;
  top:0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 15px;
  flex-direction: column;
  text-decoration: none;
`

const DummyHeader = styled.h2`
  margin-left: 5px;
  font-size: 24px;
  color: #fff
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

export default function Products() {
  function handleAddToCart(prod) {
    if (localStorage.getItem("dummies") === null) {
      const productsArray = []
      const newProduct = {
        name: prod.name,
        price: prod.price,
      }
      productsArray.push(newProduct)
      localStorage.dummies = JSON.stringify(productsArray)
      setCartChange(!cartChange)
    } else {
      const newProductsArray = JSON.parse(localStorage.dummies)
      if (newProductsArray.find(dummy => dummy.name === prod.name)) {
        alert("This dummy is already in cart")
      } else {
        const newProduct = {
          name: prod.name,
          price: prod.price,
        }
        newProductsArray.push(newProduct)
        localStorage.dummies = JSON.stringify(newProductsArray)
        setCartChange(!cartChange)
      }
    }
  }
  const localData = JSON.parse(localStorage.getItem("dummies")) || {}

  const [count, setCount] = useState(null)
  const [cartChange, setCartChange] = useState(false)

  useEffect(() => {
    setCount(localData.length)
  }, [cartChange])

  const data = useStaticQuery(
    graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image
            name
            price
            slug
            excerpt
          }
        }
      }
    }
  }
  `,
  )
  const dummies = data.allMarkdownRemark.edges

  return (
    <>
      <Cart count={count} />
      <Container>
        <SectionHeading>Explore community choices</SectionHeading>
        <SectionDescription>Updated daily based on most popular choices <br />among dev community</SectionDescription>
        <DummyContainer>
          <Carousel breakPoints={breakpoints} pagination={false}>
            {
              dummies.map((item) => {
                return (
                  <DummyCard key={item.node.frontmatter.name}>
                    <StyledLink to={`${item.node.frontmatter.slug}`}>
                      <img src={DummySVG} />
                      <div>
                        <DummyHeader>{item.node.frontmatter.name}</DummyHeader>
                        <DummyDescription>{item.node.frontmatter.excerpt}</DummyDescription>
                      </div>
                    </StyledLink>
                    <AddButton onClick={() => handleAddToCart(item.node.frontmatter)}>+</AddButton>
                  </DummyCard>
                )
              })
            }
          </Carousel>
        </DummyContainer>
      </Container>
    </>
  )
}
