  // import css files
import "./About.css"

  // import images
import AboutImage from "./../../Assets/Images/LayoutImages/Layout (7).webp"

export default function About() {
  return (
    <section id="About-Company" className="AboutUs-Information">
      <div className="Contain-CircleImage-InfoAboutUS">
          <div className="Caption-AboutUs"><span>About Us</span></div>
          <div className="Cactus-Image-Layout">
              <div className="Back-Circle">
                  <div className="Container">
                      <div className="Contain-Image-Layout"></div>
                      <img height={"auto"} width={"auto"} src={AboutImage} alt="women luaghing and in his hands small cactus" className="Intro-Image"/>
                  </div>
              </div>
          </div>
          <div className="Contain-InfoAboutus">
              <span style={{"--TopVal":"40px ","--RightVal":"-580px"}} className="Info">We love to please our customers and therefore we have more than 2000 reviews in Yandex!</span>
              <span style={{"--TopVal":"240px","--RightVal":"-635px"}} className="Info">For 10 years we have been growing different types of cacti</span>
              <span style={{"--TopVal":"440px","--RightVal":"-610px"}} className="Info">We deliver new green friends all over Russia or we are waiting for you to visit in Moscow</span>
          </div>
      </div>
    </section>
  )
}
