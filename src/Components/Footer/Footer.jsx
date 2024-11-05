  // import css files
import "./Footer.css"

  // import images
import HugeImageFooter from "./../../Assets/Images/LayoutImages/Layout (5).webp"

export default function Footer() {
  return (
    <footer>
      <div className="Contain-Image-LinkSocial-Logo">
        <div className="Top-BackFooter">
          <img height={"auto"} width={"auto"} src={HugeImageFooter} className="Footer-Image-Huge" alt="huge cactus for layout with good appear" />
          <div className="Footer-Logo">
            <p>Cac<span style={{color: "var(--WColor)"}}>tus</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
