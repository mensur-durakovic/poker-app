import React from "react";
import Picker from "./picker";
import { ALL_CARDS } from "../../../utils/cardImagesLoader";

const PickersWrapper = React.memo((props) => {
  const generatePickers = () => {
    const pickers = [];
    for (let [key, value] of Object.entries(ALL_CARDS)) {
      pickers.push(<Picker suit={value.suit} cards={value.allCards} key={key} />);
    }
    return pickers;
  };

  return <div className="picker-wrapper">{generatePickers()}</div>;
});

export default PickersWrapper;
