import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (

    <section className="section" id="tours">

      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">

        {tours.map(tour => {

          const { id, img, tourDate, title, text, icon, country, days, from } = tour;

          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {text}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className={icon}></i></span> {country}
                  </p>
                  <p>{days}</p>
                  <p>{from}</p>
                </div>
              </div>
            </article>
          );

        })}
      
      </div>

    </section>
  )
}

export default Tours;