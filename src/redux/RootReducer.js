import cakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./icecream/IceCreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: IceCreamReducer,
});


export default rootReducer;