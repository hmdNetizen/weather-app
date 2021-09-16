import { Provider } from "react-redux";
import { store } from "../store";

const Root : React.FC = (props) => {
return (
    <Provider store={store}>
        { props.children }
    </Provider>
)
};

export default Root;