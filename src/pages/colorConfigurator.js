import React from "react";
import { SketchPicker } from "react-color";
import ColorPair from "../components/configurator/colorPair";

import * as actions from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function ColorConfigurator() {
  const colors = useSelector((state) => state.colors);
  const activeColor = useSelector((state) => state.activeColor);
  const dispatch = useDispatch();

  const activeColorHandler = (colorId, colorType) => {
    dispatch(actions.setActiveColor(colorId, colorType));
  };

  const handleChange = (color) => {
    dispatch(actions.changeColor(color.hex));
  };

  const getMappedColors = () => {
    const mappedColors = [];
    for (let i = 0; i < colors.length; i += 2) {
      const pair = (
        <ColorPair
          firstColorData={colors[i]}
          secondColorData={colors[i + 1]}
          key={colors[i].id}
          activeColorData={activeColor}
          setActiveColor={activeColorHandler}
        />
      );
      mappedColors.push(pair);
    }
    return mappedColors;
  };

  return (
    <div className="configurator-container">
      <SketchPicker color={activeColor.value} onChange={handleChange} />
      <div className="configurator-colors">{colors && getMappedColors()}</div>
    </div>
  );
}
