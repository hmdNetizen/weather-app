import RectangularCard from "../RectangularCard";
import SquareCard from "../SquareCard";
import Footer from "./Footer";

const ContentSection: React.FC = () => {
  return (
    <section className="section">
      <div className="section__temperature">
        <button className="section__temperature__button section__temperature__button--celsius">
          <sup>o</sup>C
        </button>
        <button className="section__temperature__button section__temperature__button--fahrenheit">
          <sup>o</sup>F
        </button>
      </div>
      <div className="card">
        {[...new Array(5)].map((data: any) => (
          <SquareCard />
        ))}
      </div>
      <div className="section__highlights">
        <h2 className="section__highlights__title">Today's highlights</h2>
        <RectangularCard />
      </div>
      <Footer />
    </section>
  );
};

export default ContentSection;
