import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SliderVertical from "./sliderVertical";
import SliderHorizontal from "./sliderHorizontal";
import Square from "./square";
import { STARTING_HAND_MODE } from '../../constants/modes';
import * as actions from "../../store/actions/index";
const StartingHand = React.memo((props) => {
  const dispatch = useDispatch();
  const startingHandSquares = useSelector((state) => state.flopStatsStartingHandBoard);

  const clearStartingHandBoardHandler = () => {
    dispatch(actions.clearStartingHandBoard());
  }
  return (
    <section className="flop-stats-starting-hand">
      <div className="flop-stats-starting-hand-head">
        <button className="poker-button">Range</button>
        <div className="flop-stats-starting-hand-head-title">Starting Hand</div>
      </div>
      <div className="flop-stats-starting-hand-body">
        <div className="flop-stats-starting-hand-body-squares">
          {startingHandSquares.map((sArray, rowIndex) =>
            sArray.map((s, squareIndex) => (
              <Square
                name={s.name}
                key={s.name}
                color={s.color}
                active={s.active}
                mode={STARTING_HAND_MODE}
                rowIndex={rowIndex}
                squareIndex={squareIndex}
              />
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
          <button className="poker-button" onClick={clearStartingHandBoardHandler}>Clear</button>
        </div>
      </div>
    </section>
  );
});

export default StartingHand;
