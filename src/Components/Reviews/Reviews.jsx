  // import css files
import "./Reviews.css"

  // import images
import FlowerImageLayout from "./../../Assets/Images/LayoutImages/Layout (8).webp"

export default function Reviews() {
  return (
    <section className="Reviews">
      <div className="Caption-Reviews">Reviews</div>
      <div className="Contain-Cards-Reviews">
          <div className="Card-Review">
              <img src={FlowerImageLayout} alt="a cactus flower"/>
              <span className="Caption-Card">Michael</span>
              <span className="Content-Review-Card">
                  I bought a large, fleshy cactus, the roots are long, sticking out of the pot. The varieties are the same as those of the Dutch cacti. Yoo can't tell them apart right away because they're all mixed up. And most importantly - there is no glue on top (which you have to melt with       a hairdryer to remove) and pink ...
              </span>
          </div>
          <div className="Card-Review">
              <img src={FlowerImageLayout} alt="a cactus flower"/>
              <span className="Caption-Card">Michael</span>
              <span className="Content-Review-Card">
                  I bought a large, fleshy cactus, the roots are long, sticking out of the pot. The varieties are the same as those of the Dutch cacti. Yoo can't tell them apart right away because they're all mixed up. And most importantly - there is no glue on top (which you have to melt with       a hairdryer to remove) and pink ...
              </span>
          </div>
          <div className="Card-Review">
              <img src={FlowerImageLayout} alt="a cactus flower"/>
              <span className="Caption-Card">Michael</span>
              <span className="Content-Review-Card">
                  I bought a large, fleshy cactus, the roots are long, sticking out of the pot. The varieties are the same as those of the Dutch cacti. Yoo can't tell them apart right away because they're all mixed up. And most importantly - there is no glue on top (which you have to melt with       hairdryer  to remove) and pink ...
              </span>
          </div>
      </div>
    </section>
  )
}
