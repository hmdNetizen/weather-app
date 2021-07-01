import { Fragment } from "react";
import Moment from "react-moment";
import cloudBackground from "../../assets/Cloud-background.png";
import { MdMyLocation, MdLocationOn } from "react-icons/md";
import { useTypedSelector } from "../hooks/useTypedSelector";
import showWeatherImage from "./../showWeatherImage";

interface Props {
  setOpenSearch: (openSearch: boolean) => void;
  openSearch: boolean;
}

const AsideContent: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
  const { weatherData } = useTypedSelector((state) => state.weather);

  return (
    <div className="aside__content">
      <img
        src={cloudBackground}
        alt="cloud background"
        className="aside__background"
      />
      <div className="aside__wrapper">
        <button className="aside__button" onClick={() => setOpenSearch(true)}>
          Search for places
        </button>
        <div className="aside__location__icon">
          <MdMyLocation size={25} />
        </div>
      </div>

      <div className="aside__weather">
        {weatherData && (
          <Fragment>
            <img
              src={showWeatherImage(
                weatherData.consolidated_weather[0].weather_state_abbr
              )}
              alt="Weather Icon"
              className="aside__weather__icon"
            />
            <div className="aside__weather__description">
              <h1 className="aside__weather__degree">
                {weatherData.consolidated_weather[0].the_temp.toFixed(0)}
                <sup>o</sup>
                <span>C</span>
              </h1>
              <h3 className="aside__weather__state">
                {weatherData.consolidated_weather[0].weather_state_name}
              </h3>
              <p className="aside__weather__date">
                Today -{" "}
                <Moment format="ddd, D MMM">
                  {weatherData.consolidated_weather[0].applicable_date}
                </Moment>
              </p>
              <div className="aside__weather__location">
                <MdLocationOn size={15} />
                <p>{weatherData.title}</p>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default AsideContent;
