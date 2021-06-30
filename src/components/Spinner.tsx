import Loader from "react-loader-spinner";
const Spinner: React.FC = () => (
  <div className="spinner__overlay">
    <Loader type="Bars" color="#00BFFF" height={50} width={50} />
  </div>
);

export default Spinner;
