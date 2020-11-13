import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header"
import DummySVG from "../components/products/dumy.svg"

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
  margin: 20px 30px;
  
  @media (max-width: 715px) {
    text-align: center;
  }
`

export default function productTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <PageContainer>
        <DummyContainer>
          <SVGimg src={DummySVG} />
          <TextContainer>
            <DummyName>{frontmatter.name}</DummyName>
            <DummyExcerpt>{frontmatter.excerpt}</DummyExcerpt>
            <DummyPrice>$ {frontmatter.price}</DummyPrice>
            <AddButton>Add to card</AddButton>
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
      }
    }
  }
`
