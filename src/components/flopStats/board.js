import React from "react";
import Square from "./square";

import { boardSquares } from "../../utils/flopStatsData";
export default function Board() {
  return (
    <section className="flop-stats-board-wrapper">
        <div className='flop-stats-board-title'>Board</div>
      <div className="flop-stats-board">
        {boardSquares.map((sArray) =>
          sArray.map((s) => (
            <Square name={s.name} key={s.name} color={s.color} active={s.active} />
          ))
        )}
      </div>
      <button className="poker-button">Clear</button>
      <button className="poker-button">Random</button>
    </section>
  );
}
