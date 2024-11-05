  // import css files
import "./CactusProducts.css"

  // import components
import Product from "./../../Components/Product/Product"
import ProductsSlide from "./../../Components/ProductsSlide/ProductsSlide"
import Request from "./../../Components/Request/Request"
import Footer from "./../../Components/Footer/Footer"

export default function CactusProducts() {
  return (
    <main role="main" className={"productsPageContainer col"}>
      <div style={{marginTop:'50px'}} className="col gap20">
        <h1 className="h1Products">The Cactus Products</h1>
        <h2 className="h1Products">🌵 Discover Our Unique Collection Of Cacti And Succulents 🌵</h2>
      </div>
      <ProductsSlide/>
      <section className="productsWrapperRandowm row center">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </section>
      <ProductsSlide/>
      <Request/>
      <Footer/>
    </main>
  )
}
