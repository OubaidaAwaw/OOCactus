  // import css files
import './SingleProduct.css'
  // import react hooks and componenets
import { Suspense , lazy} from 'react'
  // import components
import BackButton from "./../../Components/UI/BackButton/BackButton"
import ProductDetails from './ProductDetails'
const Reviews = lazy(() => import('../../Components/Reviews/Reviews'))
const ProductsSlide = lazy(() => import('../../Components/ProductsSlide/ProductsSlide'))
const Request = lazy(() => import('../../Components/Request/Request'))
const Footer = lazy(() => import('../../Components/Footer/Footer'))

export default function SingleProduct() {
  return (
    <main role='main' className='singleProductContainer col'>
      <BackButton/>
      <ProductDetails/>
      <hr/>
      <Suspense>
        <Reviews/>
        <ProductsSlide/>
        <ProductsSlide/>
        <ProductsSlide/>
        <Request/>
        <Footer/>
      </Suspense>
    </main>
  )
}
