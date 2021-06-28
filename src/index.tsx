import ReactDOM from "react-dom";
import "./sass/index.css";
import MainContents from "./components/layouts/MainContents";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MainContents />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
