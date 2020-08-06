import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakContainer from "./components/HooksCakContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakContainer />
        <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer />
        
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
