import React, { useState } from "react";
import { SketchPicker } from "react-color";
import ColorPair from "../components/configurator/colorPair";

import * as actions from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function ColorConfigurator() {
  const colors = useSelector((state) => state.colors);
  const activeColorData = useSelector((state) => state.activeColorData);
  console.log("colors", colors);
/*   const [activeColorData, setActiveColorData] = useState({
    colorId: colors[0].id,
    colorType: 0,
    colorValue: colors[0].active,
  }); */
  const dispatch = useDispatch();

  const activeColorHandler = (colorId, colorType, colorValue) => {
      console.log("activeColorHandler", colorId, colorType, colorValue);
      dispatch(actions.setActiveColor(colorId, colorType, colorValue));
  };

  const handleChange = (color) => {

    dispatch(actions.setActiveColor(activeColorData.colorId, activeColorData.colorType, color));
  };

  return (
    <div className="configurator-container">
      <SketchPicker
        color={activeColorData.colorValue}
        onChange={handleChange}
      />
      <div className="configurator-colors">
        {colors &&
          colors.map((c) => (
            <ColorPair
              colorData={c}
              key={c.id}
              activeColorData={activeColorData}
              setActiveColor={activeColorHandler}
            />
          ))}
      </div>
    </div>
  );
}
