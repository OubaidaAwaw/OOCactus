  // import components
import Numric from "../../Components/UI/Numric/Numric";
import ProductHor from "./ProductHor";

  // import redux hooks
import { useSelector } from "react-redux";

  // import redux data
import { cart } from "../../Store/AppReduceSlice";


export default function CartTable() {
    // declare products in the cart
  const AllProducts = useSelector(cart)
  return (
    <div className="tableDivContainer"> 
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
            {/* Loop on the count of products */}
          {AllProducts.map((product) => {
            return  <tr key={product.productId}>
              <th><ProductHor product={product}/></th>
              <th>${product.productPrice}</th>
              <th><Numric prid={product.productId}/></th>
              <th>${product.productPrice * product.productQuantity}</th>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
