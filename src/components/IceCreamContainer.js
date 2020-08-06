import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const ice = useSelector((state) => state.ice.iceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Icecreams {ice}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Add more</button>
    </div>
  );
}

export default IceCreamContainer;
