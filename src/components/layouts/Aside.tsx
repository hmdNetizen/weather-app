import cloudBackground from "../../assets/Cloud-background.png";
import { MdMyLocation, MdLocationOn } from "react-icons/md";
import showerIcon from "../../assets/Shower.png";

interface Props {
  setOpenSearch: (openSearch: boolean) => void;
  openSearch: boolean;
}

const AsideContent: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
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
        <img
          src={showerIcon}
          alt="Weather Icon"
          className="aside__weather__icon"
        />
        <div className="aside__weather__description">
          <h1 className="aside__weather__degree">
            15<sup>o</sup>
            <span>C</span>
          </h1>
          <h3 className="aside__weather__state">Shower</h3>
          <p className="aside__weather__date">Today - Fri Jun 5</p>
          <div className="aside__weather__location">
            <MdLocationOn size={15} />
            <p>Helsinki</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideContent;
