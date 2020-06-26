import React, { useState } from "react";

import styled from "styled-components";

const FilledDiv = styled.div`
  background-color: ${(props) => (props.fillColor ? props.fillColor : "white")};
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function ColorPair(props) {
  const {
    colorData,
    activeColorData,
    setActiveColor,
  } = props;

  const isActive = (colorId, colorType, colorValue) => {
      return activeColorData.colorId === colorId 
      && activeColorData.colorType === colorType 
      && activeColorData.colorValue === colorValue;
  }

  return (
    <div className="color-pair">
      <div
        className="color-pair-square"
        onClick={() => setActiveColor(colorData.id, 1, colorData.active)}
      >
        <FilledDiv
          fillColor={colorData.active}
          className={isActive(colorData.id, 1, colorData.active) ? "color-pair-square-active" : ""}
        />
        <div className="color-pair-square-title">{colorData.activeName}</div>
      </div>
      <div
        className="color-pair-square"
        onClick={() => setActiveColor(colorData.id, 2, colorData.inactive)}
      >
        <FilledDiv
          fillColor={colorData.inactive}
          className={isActive(colorData.id, 2, colorData.inactive) ? "color-pair-square-active" : ""}
        />
        <div className="color-pair-square-title">{colorData.inactiveName}</div>
      </div>
    </div>
  );
}
