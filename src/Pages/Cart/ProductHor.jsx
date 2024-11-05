  // import components
import MainButton from "../../Components/UI/MainButton/MainButton"
  // import redux hooks
import { useDispatch } from "react-redux"
  // import images
import ProductImage from "./../../Assets/Images/ProductImages/Product (1).webp"
  // import data from redux
import { PayForAll } from "../../Store/AppReduceSlice"

export default function ProductHor({product}) {
    // declare dispach to call the actions from redux
  const dispach = useDispatch()
  return (
    <div className="productHorCart row between">
      <div className="center">
        <img width={150} src={ProductImage} alt="cactus product you've added to your cart" />
      </div>
      <div className="productHorDetails col gap10">
        <p className="productHorP">{product.productName}</p>
        <p className="productHorP">{product.productFamily}</p>
        <p className="productHorP">{product.productTemperature}</p>
        <MainButton onClick={() => dispach(PayForAll())}>Remove</MainButton>
      </div>
    </div>
  )
}