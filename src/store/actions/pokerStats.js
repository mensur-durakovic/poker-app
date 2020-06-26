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

export const randomizeBoard = () => {
  return {
    type: actionTypes.RANDOMIZE_BOARD,
  };
};
export const clearBoard = () => {
  return {
    type: actionTypes.CLEAR_BOARD,
  };
};

export const toggleSquare = (rowIndex, squareIndex) => {
  return {
    type: actionTypes.TOGGLE_SQUARE,
    rowIndex: rowIndex,
    squareIndex: squareIndex
  };
};
export const clearStartingHandBoard = () => {
  return {
    type: actionTypes.CLEAR_STARTING_HAND_BOARD,
  };
};

export const setActiveColor = (colorId, colorType) => {
  return {
    type: actionTypes.SET_ACTIVE_COLOR,
    colorId,
    colorType
  };
};
export const changeColor = (colorValue) => {
  return {
    type: actionTypes.CHANGE_COLOR,
    colorValue
  };
};
