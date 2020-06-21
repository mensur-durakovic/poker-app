import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../../../../store/actions/index";

export default function Card(props) {
  const dispatch = useDispatch();
  const activePlace = useSelector((state) => state.activePlace);
  const deskState = useSelector((state) => state.deskState);
  const activePosition = useSelector((state) => state.activePosition);
  const pickedCardId = useSelector((state) => state.pickedCardId);
  const { central, title, active, place, position } = props;

  const cardClickedHandler = () => {
    console.log("cardClickedHandler", place, position);
    dispatch(actions.setActiveDeskCard(place, position));
  }

  const getActiveClass = () => {
    switch(active){
      case 0: return ''
      case 1: return 'desk-card-active'
      default: return ''
    }
  }

  const getPickedCardClass = () => {
    const currentCard = deskState[place].cards[position];
    return currentCard ? `${currentCard} bg` : '';
  }

  return (
    <div className="desk-card-wrapper">
      {central && <span className={`desk-card-title`}>{title}</span>}
      <div className={`desk-card ${central ? "desk-card-central" : ""} ${getActiveClass()} ${getPickedCardClass()}`}
        onClick={cardClickedHandler}>
        {!getPickedCardClass() && <FontAwesomeIcon icon={faPlusCircle} />}
      </div>
    </div>
  );
}
