import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import DummySVG from "../products/dumy.svg"

import { FaShoppingCart } from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "20px",
    right: "60px",
    width: "35px",
    height: "35px",
  },
}))

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
    transition: all .2s ease;

    &:hover{
        transform: translateY(-5px);
    }

    @media(max-width: 900px){
      top: 20px;
      right: 0px;
    }
`
const CartInside = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 70px;
    right: 20px;
    z-index: 10;
    width: 310px;
    min-height: 120px;
    padding: 10px;
    background-color: #2d1761;
    border-radius: 10px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`

const CartItem = styled.div`
    box-sizing:border-box;
    width: 100%;
    height: 50px;
    margin-top: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover{
      background-color: #40277a;
    }
`

const SubmitButton = styled.button`
  position: relative;
  width: 80px;
  heigth: 20px;
  padding: 5px 8px;
  margin-top:10px;
  color: #fff;
  background-color: #903f9e;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease;
  transform: translateX(210px);

  &:hover{
    background-color: #602b69;
  }
  `

const CartCounter = styled.span`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    position: absolute;
    top: -7px;
    right: -7px;
    width: 20px;
    height: 20px;
    border-radius: 8px;
    background-color: #2d1761;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    padding: 1px;
`

export default function Cart({ count }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    const isEmpty = localStorage.getItem("dummies")
    if (isEmpty !== null) {
      setOpen((prev) => !prev)
    } else {
      return null
    }
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <CartIcon type="button" onClick={handleClick}>
          <FaShoppingCart />
          {count ? <CartCounter>{count}</CartCounter> : null}
        </CartIcon>
        {open ? (
          <CartInside>
            {JSON.parse(localStorage.dummies) ? JSON.parse(localStorage.dummies).map((product) => {
              return (
                <CartItem key={product}>
                  <img src={DummySVG} style={{ width: "35px" }} />
                  <h4>{product.name}</h4>
                  <p>$ {product.price}</p>
                </CartItem>
              )
            }) : null}
            <SubmitButton>Submit</SubmitButton>
          </CartInside>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}
