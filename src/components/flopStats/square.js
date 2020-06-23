import React from "react";
import PropTypes from "prop-types";
const Square = React.memo((props) => {
  const { name, color, active } = props;
  const squareColor = active
    ? `flop-stats-square-${color}-active`
    : `flop-stats-square-${color}`;
  return <div className={`flop-stats-square ${squareColor}`}>{name}</div>;
});
Square.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
export default Square;
