import Routers from "./Routers";
// providers and store
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Routers />
        {/* <Home /> */}
      </div>
    </Provider>
  );
}

export default App;
