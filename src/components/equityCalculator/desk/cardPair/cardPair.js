import React from "react";
import PropTypes from "prop-types";
import DeskCard from "../card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const CardPair = React.memo((props) => {
  const { title, pairState, place } = props;
  return (
    <div className="desk-card-pair">
      <div className="desk-card-pair-title">
        <FontAwesomeIcon icon={faPlusCircle} />
        {title}
      </div>
      <div className="desk-card-pair-container">
        <DeskCard active={pairState[0]} position={0} place={place} />
        <DeskCard active={pairState[1]} position={1} place={place} />
      </div>
    </div>
  );
});

CardPair.propTypes = {
  title: PropTypes.string.isRequired,
  pairState: PropTypes.arrayOf(PropTypes.number),
  place: PropTypes.string.isRequired,
};

export default CardPair;
