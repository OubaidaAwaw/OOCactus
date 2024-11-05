  // import css files
import './AboutComp.css'

  // import react hooks and components
import { Suspense,lazy } from 'react'

  // import components
import About from '../../Components/About/About'
const Advantages = lazy(()=> import('../../Components/Advantages/Advantages'))
const Request = lazy(()=> import('../../Components/Request/Request'))
const Reviews = lazy(()=> import('../../Components/Reviews/Reviews'))
const Footer = lazy(()=> import('../../Components/Footer/Footer'))

export default function AboutComp() {
  return (
    <main role='main' className='aboutMainContainer col'>
      <About/>
      <Suspense>
        <Advantages/>
        <Reviews/>
        <Request/>
        <Footer/>
      </Suspense>
    </main>
  )
}