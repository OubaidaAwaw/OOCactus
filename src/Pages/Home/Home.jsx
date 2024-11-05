  // import css files
import "./Home.css"
  // import react hooks and components
import { Suspense , lazy } from "react"

  // import components
import Hero from "./Hero"
const ProductsSlide = lazy(() => import("../../Components/ProductsSlide/ProductsSlide"))
const About = lazy(() => import("../../Components/About/About"))
const Advantages = lazy(() => import( "../../Components/Advantages/Advantages"))
const Reviews = lazy(() => import("../../Components/Reviews/Reviews"))
const Request = lazy(() => import("../../Components/Request/Request"))
const Footer = lazy(() => import("../../Components/Footer/Footer"))

export default function Home() {
  return (
    <main className="mainHomeContainer col" role="main">
      <Hero/>
      <Suspense>
        <ProductsSlide/>
        <About/>
        <Advantages/>
        <Reviews/>
        <Request/>
        <Footer/>
      </Suspense>
    </main>
  )
}