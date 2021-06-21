import ReactDOM from "react-dom";
import "./sass/index.css";
import MainContents from "./components/layouts/MainContents";

const App = () => {
  return (
    <div>
      <MainContents />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
