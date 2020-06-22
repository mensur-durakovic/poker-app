import React from "react";
import Square from "./square";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

export default function Board() {
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
        {flopStatsBoard.map((sArray) =>
          sArray.map((s) => (
            <Square
              name={s.name}
              key={s.name}
              color={s.color}
              active={s.active}
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
}
