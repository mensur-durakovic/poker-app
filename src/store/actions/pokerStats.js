import * as actionTypes from "./actionTypes";

export const setActiveDeskCard = (place, position) => {
  return {
    type: actionTypes.SET_ACTIVE_DESK_CARD,
    place: place,
    position: position,
  };
};

export const pickCard = (cardId) => {
  return {
    type: actionTypes.PICK_CARD,
    cardId: cardId,
  };
};

export const resetCards = () => {
  return {
    type: actionTypes.RESET_CARDS,
  };
};
