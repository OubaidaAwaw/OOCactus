  // import react router hooks
import { useNavigate } from "react-router";

  // import components
import MainButton from "./../../Components/UI/MainButton/MainButton";
  // import images
import HeroImage from "./../../Assets/Images/LayoutImages/Layout (4).webp"
export default function Hero() {
    // declare navigator to navigate user
  const navigate = useNavigate()
  return (
    <section className="heroSection">
      <div className="Text-Intro">
        <p><span style={{color: "var(--WColor)"}}>Cactus f</span>or all</p>
        <p><span style={{color: "var(--WColor)"}}>occasio</span>ns</p>
        <p><span style={{color: "var(--WColor)"}}>and mo</span>ods!</p>
      </div>
      <div className="Cactus-Image-Layout">
        <div className="Back-Circle">
          <div className="Container">
            <div className="Contain-Image-Layout"></div>
            <img height={"auto"} width={"auto"} src={HeroImage} alt="the hero cactus for this year for layout appear" className="Intro-Image"/>
          </div>
        </div>
      </div>
      <div className="SubmitBtn-CatalogBtn">
        <MainButton onClick={() => {navigate('/products')}}>See Our Products</MainButton>
        <MainButton onClick={() => {navigate('/about-company')}} className={"secondryBtn"}>About Us</MainButton>
      </div>
    </section>
  )
}
