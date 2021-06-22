import { TiLocationArrow } from "react-icons/ti";

const RectangularCard: React.FC = () => {
  return (
    <div className="rectangular__card">
      {/* COLUMN ONE - ROW ONE */}
      <div className="rectangular__card__content">
        <p className="rectangular__card_title">Wind Status</p>
        <h2 className="rectangular__card__rate">
          7 <span>mph</span>
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
          84<span style={{ marginLeft: 0 }}>%</span>
        </h2>
        <div className="rectangular__card__progressBar">
          <div className="rectangular__card__progressBar__wrapper">
            <p className="rectangular__card__progressBar__point">0</p>
            <p className="rectangular__card__progressBar__point">50</p>
            <p className="rectangular__card__progressBar__point">100</p>
          </div>
          <div className="rectangular__card__progressBar__line" />
          <p className="rectangular__card__progressBar__percent">%</p>
        </div>
      </div>
      {/* COLUMN ONE - ROW TWO */}
      <div className="rectangular__card__content rectangular__card__content--row">
        <p className="rectangular__card_title">Visibility</p>
        <h2 className="rectangular__card__rate">
          6,4<span style={{ marginLeft: " 0.5em" }}>miles</span>
        </h2>
      </div>
      {/* COLUMN TWO - ROW TWO */}
      <div className="rectangular__card__content rectangular__card__content--row">
        <p className="rectangular__card_title">Air Pressure</p>
        <h2 className="rectangular__card__rate">
          998<span style={{ marginLeft: " 0.5em" }}>mb</span>
        </h2>
      </div>
    </div>
  );
};

export default RectangularCard;
