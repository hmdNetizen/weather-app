import moment from "moment";
import showWeatherImage from "./showWeatherImage";

interface Props {
  day: {
    id: number;
    applicable_date: string;
    weather_state_abbr: string;
    min_temp: number;
    max_temp: number;
  };
}

const SquareCard: React.FC<Props> = ({ day }) => {
  const days =
    day &&
    moment(day.applicable_date).format("ll") ===
      moment().add(1, "days").format("ll")
      ? "Tomorrow"
      : moment(day.applicable_date).format("ddd, D MMM");
  return (
    <div className="squareCard">
      <div className="squareCard__title">{days}</div>
      <img
        src={showWeatherImage(day.weather_state_abbr)}
        alt="Weather condition icon"
        className="squareCard__img"
      />
      <div className="squareCard__content">
        <p className="squareCard__content__text--1">
          {day.max_temp.toFixed(0)}
          <sup>o</sup>C
        </p>
        <p className="squareCard__content__text--2">
          {day.min_temp.toFixed(0)}
          <sup>o</sup>C
        </p>
      </div>
    </div>
  );
};

export default SquareCard;
