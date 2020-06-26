import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { STARTING_HAND_MODE } from "../../constants/modes";
import { COLOR_TYPES } from "../../utils/configurator";
import * as actions from "../../store/actions/index";

const SquaredDiv = styled.div`
  background-color: ${(props) => props.fillColor};
`;

const Square = React.memo((props) => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const { name, color, active, mode, rowIndex, squareIndex } = props;
  const clickHandler = () => {
    if (mode === STARTING_HAND_MODE) {
      dispatch(actions.toggleSquare(rowIndex, squareIndex));
    }
  };

  const getSquareColor = () => {
    const colorType = active ? COLOR_TYPES.active : COLOR_TYPES.inactive;
    const col = colors.find((c) => c.id === color && c.type === colorType);
    return col.value;
  };

  return (
    <SquaredDiv
      className={`flop-stats-square }`}
      fillColor={getSquareColor()}
      onClick={clickHandler}
    >
      {name}
    </SquaredDiv>
  );
});

Square.propTypes = {
  name: PropTypes.string.isRequired,
  mode: PropTypes.string,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool,
  rowIndex: PropTypes.number.isRequired,
  squareIndex: PropTypes.number.isRequired,
};

export default Square;
