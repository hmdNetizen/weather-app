import { TiLocationArrow } from "react-icons/ti";

const RectangularCard: React.FC = () => {
  return (
    <div className="rectangular__card">
      {/* COLUMN ONE */}
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
      {/* COLUMN TWO */}
      <div className="rectangular__card__content">
        <p className="rectangular__card_title">Humidity</p>
        <h2 className="rectangular__card__rate">
          84<span style={{ marginLeft: 0 }}>%</span>
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
    </div>
  );
};

export default RectangularCard;
