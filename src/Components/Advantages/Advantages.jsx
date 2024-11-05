  // import css files
import "./Advantages.css"

  // import images
import LayoutImage9 from "./../../Assets/Images/LayoutImages/Layout (9).webp"

export default function Advantages() {
  return (
    <section className="Our-Advantages">
      <p className="Caption-Advantages">Our Advantages</p>
      <div className="Container-Advantages">
        <img className="Image-Back-Container" src={LayoutImage9} alt="Small Cactus For Layout"/>
        <div className="Back-Circle-Big Center">
          <div className="Back-Circle-Small Center">
            <div className="Content-Advantage Center">
              We will deliver your order the very next day.
            </div>
          </div>
        </div>
        <div className="Back-Circle-Big Center">
          <div className="Back-Circle-Small Center">
            <div className="Content-Advantage Center">
              We will show <br/> live photos before sending.
            </div>
          </div>
          <img className="Image-Layout-Advantages" src={LayoutImage9} alt="Small Cactus For Layout"/>
        </div>
        <div className="Back-Circle-Big Center">
          <img className="Image-Layout-Advantages" src={LayoutImage9} alt="Small Cactus For Layout"/>
          <div className="Back-Circle-Small Center">
            <div className="Content-Advantage Center">
              Payment at receiving in any way.
            </div>
          </div>
        </div>
        <img className="Image-Back-Container" src={LayoutImage9} alt="Small Cactus For Layout"/>
      </div>
    </section>
  )
}
