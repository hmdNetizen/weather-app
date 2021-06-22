import placeholderIcon from "../assets/Thunderstorm.png";

const SquareCard: React.FC = () => {
  return (
    <div className="squareCard">
      <div className="squareCard__title">Tomorrow</div>
      <img
        src={placeholderIcon}
        alt="Weather condition icon"
        className="squareCard__img"
      />
      <div className="squareCard__content">
        <p className="squareCard__content__text--1">
          16<sup>o</sup>C
        </p>
        <p className="squareCard__content__text--2">
          11<sup>o</sup>C
        </p>
      </div>
    </div>
  );
};

export default SquareCard;
