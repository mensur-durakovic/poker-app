import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { STARTING_HAND_MODE } from "../../constants/modes";
import * as actions from "../../store/actions/index";
const Square = React.memo((props) => {
  const dispatch = useDispatch();
  const { name, color, active, mode, rowIndex, squareIndex } = props;
  const clickHandler = () => {
    if (mode === STARTING_HAND_MODE) {
      dispatch(actions.toggleSquare(rowIndex, squareIndex));
    }
  };
  const squareColor = active
    ? `flop-stats-square-${color}-active`
    : `flop-stats-square-${color}`;
  return (
    <div className={`flop-stats-square ${squareColor}`} onClick={clickHandler}>
      {name}
    </div>
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
