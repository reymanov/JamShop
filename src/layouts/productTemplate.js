import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header"
import DummySVG from "../components/products/dumy.svg"
import Cart from "../components/Cart/cart"

const PageContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #14092e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const SVGimg = styled.img`
  width: 400px;

  @media (max-width: 715px) {
    width: 60vw;
  }
`

const DummyContainer = styled.div`
  width: 800px;
  display:flex;
  flex-flow: row no-wrap;
  justify-content: space-between;

  @media (max-width: 875px) {
    width: 90vw;
  }

  @media (max-width: 715px) {
    flex-flow: column;
    align-items: center;
  }
`
const DummyTag = styled.p`
  font-size: 1.2rem;
  color: #c29b23;
  transform: translateY(15px);
`

const DummyName = styled.h1`
  font-size: clamp(2rem,4vw,2.6rem);
`
const DummyExcerpt = styled.p`
  font-size: 1.2rem;
  color: lightgrey;
`

const DummyPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: lightgrey;
`

const AddButton = styled.button`
  width: 120px;
  heigth: 60px;
  padding: 10px;
  color: #fff;
  background-color: #903f9e;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover{
    background-color: #602b69;
  }
  `
const TextContainer = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  
  @media (max-width: 715px) {
    text-align: center;
  }
`

export default function productTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  function handleAddToCart(prod) {
    if (localStorage.getItem("dummies") === null) {
      addFirstItem(prod)
    } else {
      const newProductsArray = JSON.parse(localStorage.dummies)
      if (newProductsArray.find(dummy => dummy.name === prod.name)) {
        alert("This dummy is already in cart")
      } else {
        addNextItem(prod)
      }
    }
  }

  function addFirstItem(prod) {
    const productsArray = []
    const newProduct = {
      name: prod.name,
      price: prod.price,
    }
    productsArray.push(newProduct)
    localStorage.dummies = JSON.stringify(productsArray)
    setCartChange(!cartChange)
  }

  function addNextItem(prod) {
    const newProductsArray = JSON.parse(localStorage.dummies)
    const newProduct = {
      name: prod.name,
      price: prod.price,
    }
    newProductsArray.push(newProduct)
    localStorage.dummies = JSON.stringify(newProductsArray)
    setCartChange(!cartChange)
  }

  const localData = JSON.parse(localStorage.getItem("dummies")) || {}

  const [count, setCount] = useState(null)
  const [cartChange, setCartChange] = useState(false)

  useEffect(() => {
    setCount(localData.length)
    console.log(localData.length)
  }, [cartChange])

  return (
    <>
      <Header />
      <PageContainer>
        <Cart count={count} />
        <DummyContainer>
          <SVGimg src={DummySVG} />
          <TextContainer>
            <DummyTag>{frontmatter.tag}</DummyTag>
            <DummyName>{frontmatter.name}</DummyName>
            <DummyExcerpt>{frontmatter.excerpt}</DummyExcerpt>
            <DummyPrice>$ {frontmatter.price}</DummyPrice>
            <AddButton onClick={() => handleAddToCart(frontmatter)}>Add to card</AddButton>
          </TextContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </DummyContainer>
      </PageContainer>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        name
        excerpt
        image
        price
        tag
      }
    }
  }
`
