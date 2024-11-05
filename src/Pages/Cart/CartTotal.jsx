  // import redux hooks
import { useDispatch, useSelector } from "react-redux";
  // import components
import MainButton from "../../Components/UI/MainButton/MainButton";
  // import data from redux
import { cart, PayForAll } from "../../Store/AppReduceSlice";
  // import react router hooks
import { useNavigate } from "react-router";

export default function CartTotal() {
    // declare dispach to call the actions from redux
  const dispach = useDispatch()
  
    // declare navigator to navigate user
  const navigate = useNavigate()

    // declare products array data from redux
  const Products = useSelector(cart)
  return (
    <div className="cartTotalContainer col gap20">
      <h2 className="cartTotalName">Cart Total</h2>
      <p className="between"><span className="titleSpan">Delivery</span> <span className="valueSpan">Free</span></p>
      <p className="between"><span className="titleSpan">Discount</span> <span className="valueSpan">{
          // calc the discount for all products cart
        Products.reduce((acc , product) => {
          return acc + product.productDiscount * product.productQuantity 
        },0)
      }</span></p>
      <p className="between"><span className="titleSpan">Cart Total</span> <span className="valueSpan">{
          // calc the price for all products cart
        Products.reduce((acc , product) => {
          return acc + product.productPrice * product.productQuantity 
        },0)
      }</span></p>
      <MainButton onClick={() => dispach(PayForAll())}>Apply</MainButton>
      <MainButton onClick={() => navigate("/products")}>Buy More</MainButton>
    </div>
  )
}
