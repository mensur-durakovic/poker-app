import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../store/actions/index";

const Card = React.memo((props) => {
  const dispatch = useDispatch();
  const deskState = useSelector((state) => state.deskState);
  const { central, title, active, place, position } = props;

  const cardClickedHandler = () => {
    dispatch(actions.setActiveDeskCard(place, position));
  };

  const getActiveClass = () => {
    return active ? "desk-card-active" : "";
  };

  const getPickedCardClass = () => {
    const currentCard = deskState[place].cards[position];
    return currentCard ? `${currentCard} bg` : "";
  };

  return (
    <div className="desk-card-wrapper">
      {central && <span className={`desk-card-title`}>{title}</span>}
      <div
        className={`desk-card ${
          central ? "desk-card-central" : ""
        } ${getActiveClass()} ${getPickedCardClass()}`}
        onClick={cardClickedHandler}
      >
        {!getPickedCardClass() && <FontAwesomeIcon icon={faPlusCircle} />}
      </div>
    </div>
  );
});

Card.propTypes = {
  central: PropTypes.bool,
  title: PropTypes.string,
  active: PropTypes.number,
  place: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default Card;
