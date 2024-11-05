  // import css files
import "./Header.css"
  // import redux hooks
import { useSelector } from "react-redux"

  // import react router components
import { NavLink ,Link } from "react-router-dom"

  // import data from redux
import { cartItems } from "../../Store/AppReduceSlice"

export default function Header() {
    // declare the count of carts item form redux
  const count = useSelector(cartItems)
  return (
      <nav className="headerContainer">
          {/* logo Container */}
        <div className="Logo-Contain">
          <p>Cactus</p>
        </div>
        <div className="Links-Pages">
            {/* <!-- Navigation Links --> */}
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="products">Cactus Products</NavLink></li>
              <li><NavLink to="about-company">About Company</NavLink></li>
            </ul>
        </div>
        <div className="Contain-Call-Number">
          <div className="BtnCall-Number">
              {/* cart button */}
            <Link aria-label="see your cart" to="products/my-cart" className="BtnCall center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>              
              {count !== 0?<span className="center">{count}</span>:<></>}
            </Link>
          </div>
        </div>
    </nav>
  )
}