  // import css files
import "./Product.css"

  // impor images
import ProductImage from "./../../Assets/Images/ProductImages/Product (1).webp"

  // impor   components
import MainButton from "../UI/MainButton/MainButton"

  // import react router hooks
import { useNavigate } from "react-router"

  // import react hooks
import { useState } from "react"

  // import redux hooks
import { useDispatch } from "react-redux"

  // import data form user slice
import { AddProductToCart } from "../../Store/AppReduceSlice"

export default function Product() {
    // disable button
  const [isDisabled, setDisabled] = useState(false)
    // declare the navigate to navigate user
  const naigate = useNavigate()
    // add to cart handler
  const AddCartHandler = (e) => {
      // disable button
    setDisabled(true)
      // add product to cart
    dispatch(AddProductToCart(e.currentTarget.getAttribute("prid")))
  }
    // declare dispatch to use the redux actions
  const dispatch = useDispatch()
  return (
    <div className="Product">
        <span>Echino Grusonii</span>
        <img src={ProductImage} alt="Cactus Product"/>
        <div className="row gap10 priceAndAddCardContaiener">
          <button disabled={isDisabled} onClick={AddCartHandler} prid={'053c8a1b'} className="productCartButton" type="button" name="buttonToaddCart">
            +<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>              
          </button>
          99$ 
          <p style={{textDecoration:"line-through", color:"red"}}>120$</p>
        </div>
        <MainButton onClick={() => {naigate("/products/echinocactus-grusonii")}}>See Details</MainButton>
    </div>
  )
}
