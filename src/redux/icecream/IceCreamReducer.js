import React from "react";
import { VANILLA_STRAW } from "./IceCreamTypes";

const initialState = {
  iceCreams: 10,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case VANILLA_STRAW:
      return {
        ...state,
        iceCreams: state.iceCreams + 1,
      };

    default:
      return state;
  }
};

export default IceCreamReducer;
