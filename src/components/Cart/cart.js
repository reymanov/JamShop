import React from "react"
import styled from "styled-components"

import { FaShoppingCart } from "react-icons/fa"

const CartIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 60px;
    width: 35px;
    height: 35px;
    padding: 5px;
    font-size: 32px;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    transition: transform .2s ease;

    &:hover{
        transform: translateY(-5px);
    }
`

export default function Cart() {
  return (
    <CartIcon>
      <FaShoppingCart />
    </CartIcon>
  )
}
