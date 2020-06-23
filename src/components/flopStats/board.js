import React from "react";
import Square from "./square";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import { BOARD_MODE } from '../../constants/modes';

const Board = React.memo((props) => {
  const flopStatsBoard = useSelector((state) => state.flopStatsBoard);
  const dispatch = useDispatch();
  const clearBoardHandler = () => {
    dispatch(actions.clearBoard());
  };

  const randomizeBoard = () => {
    dispatch(actions.randomizeBoard());
  };

  return (
    <section className="flop-stats-board-wrapper">
      <div className="flop-stats-board-title">Board</div>
      <div className="flop-stats-board">
        {flopStatsBoard.map((sArray, rowIndex) =>
          sArray.map((s, squareIndex) => (
            <Square
              name={s.name}
              key={s.name}
              color={s.color}
              active={s.active}
              mode={BOARD_MODE}
              rowIndex={rowIndex}
              squareIndex={squareIndex}
            />
          ))
        )}
      </div>
      <button className="poker-button" onClick={clearBoardHandler}>
        Clear
      </button>
      <button className="poker-button" onClick={randomizeBoard}>
        Random
      </button>
    </section>
  );
});

export default Board;