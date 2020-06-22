import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
export default function Picker(props) {
  const dispatch = useDispatch();
  const deskState = useSelector((state) => state.deskState);
  const { suit, cards } = props;

  const cardClickHandler = (cardId) => {
    console.log(cardId);
    for (let [key,] of Object.entries(deskState)) {
      const cardFound = deskState[key].cards.find((c) => c === cardId);
      if (cardFound) {
        return;
      }
    }
    dispatch(actions.pickCard(cardId));
  };

  const isAlreadyLocked = (cardId) => {
    for (let [key,] of Object.entries(deskState)) {
      const cardFound = deskState[key].cards.find((c) => c === cardId);
      if (cardFound) {
        return true;
      }
    }
  };

  return (
    <div className="picker">
      <div className="picker-suit">
        <img src={suit.image} alt={suit.altText}></img>
      </div>
      <div className="picker-cards">
        {cards.map((c) => (
          <img
            className={isAlreadyLocked(c.id) ? 'gray-overlay' : ''}
            src={c.image}
            alt={c.altText}
            key={c.id}
            onClick={() => cardClickHandler(c.id)}
          ></img>
        ))}
      </div>
    </div>
  );
}
