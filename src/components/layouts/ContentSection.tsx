import { Fragment } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";
import RectangularCard from "../RectangularCard";
import SquareCard from "../SquareCard";
import Footer from "./Footer";

const ContentSection: React.FC = () => {
  const { weatherData, error } = useTypedSelector((state) => state.weather);
  const { getDegreeCelsius, getDegreeFahrenheit } = useActions();
  return (
    <section className="section">
      <div className="section__temperature">
        <button
          className="section__temperature__button section__temperature__button--celsius"
          onClick={getDegreeCelsius}
        >
          <sup>o</sup>C
        </button>
        <button
          className="section__temperature__button section__temperature__button--fahrenheit"
          onClick={getDegreeFahrenheit}
        >
          <sup>o</sup>F
        </button>
      </div>
      {error ? (
        <div className="section__error">
          <h2 className="section__error__text">{error}</h2>
        </div>
      ) : (
        <Fragment>
          <div className="card">
            {weatherData &&
              weatherData.consolidated_weather
                .slice(1)
                .map((data: any) => <SquareCard key={data.id} day={data} />)}
          </div>
          <div className="section__highlights">
            <h2 className="section__highlights__title">Today's highlights</h2>
            <RectangularCard />
          </div>
        </Fragment>
      )}

      <Footer />
    </section>
  );
};

export default ContentSection;
