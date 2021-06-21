import cloudBackground from "../../assets/Cloud-background.png";
import { MdMyLocation } from "react-icons/md";

const AsideContent: React.FC = () => {
  return (
    <aside className="aside">
      <img
        src={cloudBackground}
        alt="cloud background"
        className="aside__background"
      />
      <div className="aside__wrapper">
        <button className="aside__button">Search for places</button>
        <div className="aside__icon__wrapper">
          <MdMyLocation size={25} />
        </div>
      </div>
    </aside>
  );
};

export default AsideContent;
