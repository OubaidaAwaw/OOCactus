  // import redux hooks
import { useSelector } from "react-redux"
  // import data from redux
import { cartItems } from "../../Store/AppReduceSlice"

export default function CartIntro() {
    // import count items in the cart from redux
  const Items = useSelector(cartItems)
  return (
    <>
      <h1 className="cartLabel">Cart Shopping</h1>
      <p className="descCart">
        <span className="itemsCountInCart">{Items} items</span> in your cart
      </p>
    </>
  )
}
