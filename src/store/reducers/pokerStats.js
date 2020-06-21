import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/reduxUtils";

const cleanDesk = {
  player1: { cards: ["", ""], active: [0, 1] },
  player2: { cards: ["", ""], active: [0, 0] },
  player3: { cards: ["", ""], active: [0, 0] },
  player4: { cards: ["", ""], active: [0, 0] },
  player5: { cards: ["", ""], active: [0, 0] },
  player6: { cards: ["", ""], active: [0, 0] },
  player7: { cards: ["", ""], active: [0, 0] },
  player8: { cards: ["", ""], active: [0, 0] },
  player9: { cards: ["", ""], active: [0, 0] },
  desk: { cards: ["", "", "", "", ""], active: [0, 0, 0, 0, 0] },
};

const initialState = {
  deskState: cleanDesk,
  pickedCardId: "",
  activePlace: "player1",
  activePosition: 1,
};

const pickCard = (state, action) => {
  const newDeskState = {
    player1: { cards: [...state.deskState.player1.cards], active: [0, 0] },
    player2: { cards: [...state.deskState.player2.cards], active: [0, 0] },
    player3: { cards: [...state.deskState.player3.cards], active: [0, 0] },
    player4: { cards: [...state.deskState.player4.cards], active: [0, 0] },
    player5: { cards: [...state.deskState.player5.cards], active: [0, 0] },
    player6: { cards: [...state.deskState.player6.cards], active: [0, 0] },
    player7: { cards: [...state.deskState.player7.cards], active: [0, 0] },
    player8: { cards: [...state.deskState.player8.cards], active: [0, 0] },
    player9: { cards: [...state.deskState.player9.cards], active: [0, 0] },
    desk: { cards: [...state.deskState.desk.cards], active: [0, 0, 0, 0, 0] },
  };
  newDeskState[state.activePlace].active[state.activePosition] = 0;
  newDeskState[state.activePlace].cards[state.activePosition] = action.cardId;
  return updateObject(state, {
    pickedCardId: action.cardId,
    deskState: newDeskState,
  });
};

const setActiveCard = (state, action) => {
  console.log(action);
  const newDeskState = {
    player1: { cards: [...state.deskState.player1.cards], active: [0, 0] },
    player2: { cards: [...state.deskState.player2.cards], active: [0, 0] },
    player3: { cards: [...state.deskState.player3.cards], active: [0, 0] },
    player4: { cards: [...state.deskState.player4.cards], active: [0, 0] },
    player5: { cards: [...state.deskState.player5.cards], active: [0, 0] },
    player6: { cards: [...state.deskState.player6.cards], active: [0, 0] },
    player7: { cards: [...state.deskState.player7.cards], active: [0, 0] },
    player8: { cards: [...state.deskState.player8.cards], active: [0, 0] },
    player9: { cards: [...state.deskState.player9.cards], active: [0, 0] },
    desk: { cards: [...state.deskState.desk.cards], active: [0, 0, 0, 0, 0] },
  };
  const oldValue = state.deskState[action.place].active[action.position];
  newDeskState[action.place].active[action.position] = oldValue === 1 ? 0 : 1;
  console.log("newDeskState", newDeskState);
  return updateObject(state, {
    deskState: newDeskState,
    activePlace: action.place,
    activePosition: action.position,
  });
};

const resetCards = (state, action) => {
  const newDeskState = {
    player1: { cards: ["", ""], active: [0, 0] },
    player2: { cards: ["", ""], active: [0, 0] },
    player3: { cards: ["", ""], active: [0, 0] },
    player4: { cards: ["", ""], active: [0, 0] },
    player5: { cards: ["", ""], active: [0, 0] },
    player6: { cards: ["", ""], active: [0, 0] },
    player7: { cards: ["", ""], active: [0, 0] },
    player8: { cards: ["", ""], active: [0, 0] },
    player9: { cards: ["", ""], active: [0, 0] },
    desk: { cards: ["", "", "", "", ""], active: [0, 0, 0, 0, 0] },
  };
  return updateObject(state, {
    deskState: newDeskState,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PICK_CARD:
      return pickCard(state, action);
    case actionTypes.SET_ACTIVE_DESK_CARD:
      return setActiveCard(state, action);
    case actionTypes.RESET_CARDS:
      return resetCards(state, action);
    default:
      return state;
  }
};

export default reducer;
