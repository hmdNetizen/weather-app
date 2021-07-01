import { Fragment } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { TiLocationArrow } from "react-icons/ti";

const RectangularCard: React.FC = () => {
  const { weatherData } = useTypedSelector((state) => state.weather);
  return (
    <Fragment>
      {weatherData && (
        <div className="rectangular__card">
          {/* COLUMN ONE - ROW ONE */}
          <div className="rectangular__card__content">
            <p className="rectangular__card_title">Wind Status</p>
            <h2 className="rectangular__card__rate">
              {weatherData.consolidated_weather[0].wind_speed.toFixed(2)}{" "}
              <span>mph</span>
            </h2>
            <div className="rectangular__card__bottom__wrapper">
              <div className="rectangular__card__icon__wrapper">
                <TiLocationArrow
                  size={20}
                  color="#E7E7EB"
                  className="rectangular__card__icon"
                />
              </div>
              <p>WSW</p>
            </div>
          </div>
          {/* COLUMN TWO - ROW ONE */}
          <div className="rectangular__card__content">
            <p className="rectangular__card_title">Humidity</p>
            <h2 className="rectangular__card__rate">
              {weatherData.consolidated_weather[0].humidity}
              <span style={{ marginLeft: 0 }}>%</span>
            </h2>
            <div className="rectangular__card__progressBar">
              <div className="rectangular__card__progressBar__wrapper">
                <p className="rectangular__card__progressBar__point">0</p>
                <p className="rectangular__card__progressBar__point">50</p>
                <p className="rectangular__card__progressBar__point">100</p>
              </div>
              <div className="rectangular__card__progressBar__line">
                <div
                  className="rectangular__card__progressBar__done"
                  style={{
                    width: weatherData.consolidated_weather[0].humidity + "%",
                  }}
                />
              </div>
              <p className="rectangular__card__progressBar__percent">%</p>
            </div>
          </div>
          {/* COLUMN ONE - ROW TWO */}
          <div className="rectangular__card__content rectangular__card__content--row">
            <p className="rectangular__card_title">Visibility</p>
            <h2 className="rectangular__card__rate">
              {weatherData.consolidated_weather[0].visibility.toFixed(1)}
              <span style={{ marginLeft: " 0.5em" }}>miles</span>
            </h2>
          </div>
          {/* COLUMN TWO - ROW TWO */}
          <div className="rectangular__card__content rectangular__card__content--row">
            <p className="rectangular__card_title">Air Pressure</p>
            <h2 className="rectangular__card__rate">
              {weatherData.consolidated_weather[0].air_pressure.toFixed(0)}
              <span style={{ marginLeft: " 0.5em" }}>mb</span>
            </h2>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RectangularCard;
