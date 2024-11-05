  // import css files
import "./MyCart.css"

  // import components
import BackButton from "./../../Components/UI/BackButton/BackButton"
import CartIntro from "./CartIntro"
import CartTable from "./CartTable"
import CartTotal from "./CartTotal"

  // import redux hooks
import { useSelector } from "react-redux"

  // import data form redux
import { cartItems } from "../../Store/AppReduceSlice"

export default function MyCart() {
    // get the items count to toggle table
  const Items = useSelector(cartItems)
  return (
    <main role="main" className="myCartMainContainer col gap20">
      <section className="col gap20">
        <BackButton/>
        <CartIntro/>
      </section>
        {/* chick if there are any products */}
      {Items > 0?
      <section className="tableAndCartTotalContainer row between wrap">
        <CartTable/>
        <CartTotal/>
      </section>:<></>}
    </main>
  )
}
