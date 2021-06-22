import RectangularCard from "../RectangularCard";
import SquareCard from "../SquareCard";
import Footer from "./Footer";

const ContentSection: React.FC = () => {
  return (
    <section className="section">
      <div className="section__temperature">
        <div className="section__temperature__wrapper section__temperature__wrapper--celsius">
          <p>
            <sup>o</sup>C
          </p>
        </div>
        <div className="section__temperature__wrapper section__temperature__wrapper--fahrenheit">
          <p>
            <sup>o</sup>F
          </p>
        </div>
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
