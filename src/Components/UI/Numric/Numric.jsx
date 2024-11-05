
  // import compnents
import MainButton from "./../MainButton/MainButton"

  // import redux hooks
import { useDispatch, useSelector } from "react-redux"

  // import data form user slice
import { DecreaseQuantity, getProductQuantity, IncreaseQuantity } from "./../../../Store/AppReduceSlice"
  /* props:
    prid: the product id to increase or decrease quantity
  */
export default function Numric(props) {
    // declare dispatch to use the redux actions
  const dispatch = useDispatch()
    // the initial value of count and counter
  const value = useSelector((state) => getProductQuantity(state , props.prid))
  return (
    <div className="row gap10 center">
      <MainButton prid={props.prid} className={"secondryBtn"} onClick={(e) =>{dispatch(IncreaseQuantity(e.target.getAttribute("prid")))}}>+</MainButton>
        <p className="quantityCount">{value}</p>
      <MainButton prid={props.prid} className={"secondryBtn"} onClick={(e) =>{dispatch(DecreaseQuantity(e.target.getAttribute("prid")))}}>-</MainButton>
    </div>
  )
}
