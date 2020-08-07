import cakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./icecream/IceCreamReducer";
import userReducer from "./User/UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: IceCreamReducer,
  user: userReducer,
});

export default rootReducer;
