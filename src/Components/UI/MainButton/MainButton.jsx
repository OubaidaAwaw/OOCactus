  // import css files
import "./MainButton.css"

export default function MainButton(props) {
  return (
    <button prid={props.prid} disabled={props.disabled} type={props.type} className={`${props.className} mainButton`} name={props.name} onClick={props.onClick} id={props.id}>{props.children}</button>
  )
}
