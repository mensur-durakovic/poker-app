import React from "react";
import SliderVertical from "./sliderVertical";
import SliderHorizontal from "./sliderHorizontal";
import Square from "./square";
import { startingHandSquares } from "../../utils/flopStatsData";

export default function StartingHand() {
  return (
    <section className="flop-stats-starting-hand">
      <div className="flop-stats-starting-hand-head">
        <button className="poker-button">Range</button>
        <div className="flop-stats-starting-hand-head-title">Starting Hand</div>
      </div>
      <div className="flop-stats-starting-hand-body">
        <div className="flop-stats-starting-hand-body-squares">
          {startingHandSquares.map((sArray) =>
            sArray.map((s) => (
              <Square name={s.name} key={s.name} color={s.color} active={s.active} />
            ))
          )}
        </div>
        <div className="flop-stats-starting-hand-body-slider">
          <SliderVertical />
        </div>
      </div>
      <div className="flop-stats-starting-hand-footer">
        <div className="flop-stats-starting-hand-footer-slider">
          <SliderHorizontal />
        </div>
        <div className="flop-stats-starting-hand-footer-button">
          <button className="poker-button">Clear</button>
        </div>
      </div>
    </section>
  );
}
