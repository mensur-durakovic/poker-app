import React from "react";

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
    firstColorData,
    secondColorData,
    activeColorData,
    setActiveColor,
  } = props;

  const isActive = (colorId, colorType) => {
      return activeColorData.id === colorId 
      && activeColorData.type === colorType;
  }

  return (
    <div className="color-pair">
      <div
        className="color-pair-square"
        onClick={() => setActiveColor(firstColorData.id, firstColorData.type)}
      >
        <FilledDiv
          fillColor={firstColorData.value}
          className={isActive(firstColorData.id, firstColorData.type) ? "color-pair-square-active" : ""}
        />
        <div className="color-pair-square-title">{firstColorData.name}</div>
      </div>
      <div
        className="color-pair-square"
        onClick={() => setActiveColor(secondColorData.id, secondColorData.type )}
      >
        <FilledDiv
          fillColor={secondColorData.value}
          className={isActive(secondColorData.id, secondColorData.type) ? "color-pair-square-active" : ""}
        />
        <div className="color-pair-square-title">{secondColorData.name}</div>
      </div>
    </div>
  );
}
