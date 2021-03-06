import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/reduxUtils";
import { boardSquares, startingHandSquares } from "../../utils/flopStatsData";
import { ALL_COLORS } from "../../utils/configurator";

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
  flopStatsBoard: boardSquares,
  flopStatsStartingHandBoard: startingHandSquares,
  colors: [...ALL_COLORS],
  activeColor: {
    id: ALL_COLORS[0].id,
    type: ALL_COLORS[0].type,
    value: ALL_COLORS[0].value,
  },
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
  newDeskState[action.place].active[action.position] = 1;
  return updateObject(state, {
    deskState: newDeskState,
    activePlace: action.place,
    activePosition: action.position,
  });
};

const resetCards = (state, action) => {
  const newDeskState = { ...cleanDesk };
  return updateObject(state, {
    deskState: newDeskState,
  });
};

const clearBoard = (state, action) => {
  const newBoard = boardSquares.map((row) =>
    row.map((square) => ({ ...square, active: false }))
  );
  return updateObject(state, {
    flopStatsBoard: newBoard,
  });
};

const clearStartingHandBoard = (state, action) => {
  const newStartingHandBoard = startingHandSquares.map((row) =>
    row.map((square) => ({ ...square, active: false }))
  );
  return updateObject(state, {
    flopStatsStartingHandBoard: newStartingHandBoard,
  });
};
const toggleSquare = (state, action) => {
  const newStartingHandBoard = [...state.flopStatsStartingHandBoard];
  const oldValue =
    state.flopStatsStartingHandBoard[action.rowIndex][action.squareIndex]
      .active;
  newStartingHandBoard[action.rowIndex][action.squareIndex].active = !oldValue;
  return updateObject(state, {
    flopStatsStartingHandBoard: newStartingHandBoard,
  });
};

const randomizeBoard = (state, action) => {
  // min and max included
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const random1 = randomIntFromInterval(0, 12);
  const random2 = randomIntFromInterval(0, 12);
  const random3 = randomIntFromInterval(0, 12);
  const random4 = randomIntFromInterval(0, 12);
  const newBoard = boardSquares.map((row) =>
    row.map((square) => ({ ...square, active: false }))
  );
  newBoard[random1][0].active = true;
  newBoard[random2][1].active = true;
  newBoard[random3][2].active = true;
  newBoard[random4][3].active = true;
  return updateObject(state, {
    flopStatsBoard: newBoard,
  });
};

const setActiveColor = (state, action) => {
  const { colorId, colorType } = action;

  const newActiveColor = state.colors.find(
    (c) => c.id === colorId && c.type === colorType
  );

  return updateObject(state, {
    activeColor: newActiveColor,
  });
};
const changeColor = (state, action) => {
  const { colorValue } = action;
  const { activeColor, colors } = state;
  const newColors = [...colors];

  for (let i = 0; i < newColors.length; i++) {
    if (
      newColors[i].id === activeColor.id &&
      newColors[i].type === activeColor.type
    ) {
      newColors[i].value = colorValue;
    }
  }

  return updateObject(state, {
    colors: newColors,
    activeColor: { ...activeColor, value: colorValue },
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
    case actionTypes.CLEAR_BOARD:
      return clearBoard(state, action);
    case actionTypes.RANDOMIZE_BOARD:
      return randomizeBoard(state, action);
    case actionTypes.CLEAR_STARTING_HAND_BOARD:
      return clearStartingHandBoard(state, action);
    case actionTypes.TOGGLE_SQUARE:
      return toggleSquare(state, action);
    case actionTypes.SET_ACTIVE_COLOR:
      return setActiveColor(state, action);
    case actionTypes.CHANGE_COLOR:
      return changeColor(state, action);
    default:
      return state;
  }
};

export default reducer;
