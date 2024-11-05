  // import css files
import "./Request.css"

  // import images
import CactusLayout1 from "./../../Assets/Images/LayoutImages/Layout (1).webp"
import CactusLayout6 from "./../../Assets/Images/LayoutImages/Layout (6).webp"
import MainButton from "../UI/MainButton/MainButton"

export default function Request() {
  return (
    <section className="Container-Leave-Request">
      <div className="Contain-RequestForm-ImageLayout">
        <div className="Contian-RequestForm">
          <div className="Caption-RequestForm">Leave a request and we will contact <br/> you as soon as possible!</div>
          <form action="#" className="Request-Form">
            <input name="UserName2" type="text" required placeholder="Name"/>
            <input name="UserTelephone" type="tel" required placeholder="Telephone"/>
            <input name="Useremail" type="email" required placeholder="email"/>
            <div className="Contain-BtnResetSubmit-Leave">
              <MainButton type="submit">Leave it</MainButton>
              <MainButton className={'secondryBtn'} type="reset">Cancel</MainButton>
            </div>
          </form>
        </div>
        <div className="Back-Circle-Big Center">
          <div className="Back-Circle-Small Center">
            <div className="Content-Advantage Center">
              <img height={"auto"} width={"auto"} src={CactusLayout6} alt="Layout Cactus" />
            </div>
          </div>
        </div>
      </div>
      <div className="Cactus-Image-Layout">
        <div className="Back-Circle">
          <div className="Container">
            <div className="Contain-Image-Layout"></div>
            <img src={CactusLayout1} alt="It is good Cactus" className="Intro-Image"/>
          </div>
        </div>
      </div>
    </section>
  )
}
