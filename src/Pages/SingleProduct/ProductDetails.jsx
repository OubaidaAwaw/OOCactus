  // import images
import PrductImage from "./../../Assets/Images/ProductImages/Product (1).webp"

  // import components
import MainButton from '../../Components/UI/MainButton/MainButton'

  // import react hooks
import { useState } from "react"

  // import redux hooks
import { useDispatch } from "react-redux"

  // import user slice
import { AddProductToCart } from "../../Store/AppReduceSlice"

export default function ProductDetails() {
    // disable button
  const [isDisabled, setDisabled] = useState(false)
    // add the product to user cart handler
  const AddProductToCartHandler = (e) => {
      // disable button
    setDisabled(true)
      // add product to cart
    dispatch(AddProductToCart(e.currentTarget.getAttribute("prid")))
  }
    // declare dispatch to use the redux actions
  const dispatch = useDispatch()
  return (
    <section className="conainAddCartLandPage row gap20 wrap">
      <div className="productImageContainer center">
        <img height={"auto"} width={"auto"} src={PrductImage} alt="cactus product 'Name'" />
      </div>
      <div className="productDetailsContainer col gap20">
        <h1 className="productName">Echinocactus grusonii</h1>
        <p className="prductDescription"><span className="spanTitle"> Common Names:</span> Golden Barrel Cactus, Mother-in-Law's Cushion</p>
        <p className="prductDescription"><span className="spanTitle">Family:</span> Cactaceae</p>
        <p className="productOldPrice"><span className="spanTitle">Old Price:</span> <span className="oldPrice">$120</span></p>
        <p className="productNewPrice"><span className="spanTitle">New Price:</span> <span className="newPrice">$99</span> </p>
        <p className="prductDescription"><span className="spanTitle">Temperature and Humidity:</span> Prefers warm temperatures between 50-90°F (10-32°C). Protect it from frost as it's sensitive to temperatures below 50°F (10°C)</p>
        <p className="prductDescription"><span className="spanTitle">Common Pests:</span> Mealybugs and scale insects. These can be controlled with insecticidal soap or by wiping affected areas with a cotton swab dipped in rubbing alcohol</p>
        <p className="prductDescription"><span className="spanTitle">How often should I water my Golden Barrel Cactus?</span><br /> Water only when the soil has completely dried out, typically every 2-3 weeks in summer, and even less in winter</p>
        <p className="prductDescription"><span className="spanTitle">Can this cactus survive indoors?</span><br /> Yes, as long as it gets enough direct sunlight and minimal water. It's perfect for a sunny windowsill</p>
        <MainButton disabled={isDisabled} prid={'053c8a1b'} className={"row center"} onClick={AddProductToCartHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          &#160;
          Add To Cart  
        </MainButton>
      </div>
    </section>
  )
}
