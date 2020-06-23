import React from "react";
import styled from "styled-components";

import {
  statisticsDataUpper,
  statisticsDataLower,
} from "../../utils/flopStatsData";

const FilledDiv = styled.div`
  width: ${(props) => (props.filled ? props.filled : "100%")};
  background-color: ${(props) =>
    props.fillColor ? props.fillColor : "rgba(26,126,21,1)"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
`;

const Statistics = React.memo((props) => {
  return (
    <section className="flop-stats-statistics">
      <div className="flop-stats-statistics-title">Statistics</div>
      <div className="flop-stats-statistics-body">
        <div className="flop-stats-statistics-body-upper">
          {statisticsDataUpper.map((s) => (
            <div className="flop-stats-statistics-body-upper-row" key={s.name}>
              <div className="flop-stats-statistics-body-upper-row-title">
                {s.name}
              </div>
              <div className="flop-stats-statistics-body-upper-bar">
                <FilledDiv
                  filled={`${s.value}%`}
                  fillColor="rgba(27, 98, 211, 1)"
                >{`${s.value}%`}</FilledDiv>
              </div>
            </div>
          ))}
        </div>
        <div className="flop-stats-statistics-body-lower">
          {statisticsDataLower.map((s) => (
            <div className="flop-stats-statistics-body-upper-row" key={s.name}>
              <div className="flop-stats-statistics-body-upper-row-title">
                {s.name}
              </div>
              <div className="flop-stats-statistics-body-upper-bar">
                <FilledDiv
                  filled={`${s.value}%`}
                  fillColor="rgba(26,126,21,1)"
                >{`${s.value}%`}</FilledDiv>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Statistics;
