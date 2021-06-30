import clear from "../assets/Clear.png";
import hail from "../assets/Hail.png";
import heavyCloud from "../assets/HeavyCloud.png";
import lightCloud from "../assets/LightCloud.png";
import heavyRain from "../assets/HeavyRain.png";
import lightRain from "../assets/LightRain.png";
import shower from "../assets/Shower.png";
import sleet from "../assets/Sleet.png";
import snow from "../assets/Snow.png";
import thunderstorm from "../assets/Thunderstorm.png";

const showWeatherImage = (image: string) => {
  switch (image) {
    case "sn":
      return snow;
    case "sl":
      return sleet;
    case "h":
      return hail;
    case "t":
      return thunderstorm;
    case "hr":
      return heavyRain;
    case "lr":
      return lightRain;
    case "s":
      return shower;
    case "hc":
      return heavyCloud;
    case "lc":
      return lightCloud;
    case "c":
      return clear;
    default:
      return clear;
  }
};

export default showWeatherImage;
