import React from "react";
import Card from "./card/card";
import CardPair from "./cardPair/cardPair";
import {
  PLAYER1,
  PLAYER2,
  PLAYER3,
  PLAYER4,
  PLAYER5,
  PLAYER6,
  PLAYER7,
  PLAYER8,
  PLAYER9,
  DESK,
} from "../../../constants/desk";
import { useSelector } from "react-redux";

export default function Desk() {
  const player1State = useSelector((state) => state.deskState.player1.active);
  const player2State = useSelector((state) => state.deskState.player2.active);
  const player3State = useSelector((state) => state.deskState.player3.active);
  const player4State = useSelector((state) => state.deskState.player4.active);
  const player5State = useSelector((state) => state.deskState.player5.active);
  const player6State = useSelector((state) => state.deskState.player6.active);
  const player7State = useSelector((state) => state.deskState.player7.active);
  const player8State = useSelector((state) => state.deskState.player8.active);
  const player9State = useSelector((state) => state.deskState.player9.active);
  const deskState = useSelector((state) => state.deskState.desk.active);

  return (
    <div className="desk">
      <div className="desk-central">
        <div className="desk-central-left">
          <Card
            central={true}
            place={"desk"}
            id={DESK.first.id}
            position={0}
            active={deskState[0]}
          />
          <Card
            central={true}
            title={DESK.flop.title}
            id={DESK.flop.id}
            place={"desk"}
            position={1}
            active={deskState[1]}
          />
          <Card
            central={true}
            id={DESK.third.id}
            place={"desk"}
            position={2}
            active={deskState[2]}
          />
        </div>
        <div className="desk-central-right">
          <Card
            central={true}
            title={DESK.turn.title}
            place={"desk"}
            id={DESK.turn.id}
            position={3}
            active={deskState[3]}
          />
          <Card
            central={true}
            title={DESK.river.title}
            place={"desk"}
            id={DESK.river.id}
            position={4}
            active={deskState[4]}
          />
        </div>
      </div>

      <div className="desk-top">
        <CardPair
          title={PLAYER4.title}
          place={PLAYER4.id}
          pairState={player4State}
        />
        <CardPair
          title={PLAYER5.title}
          place={PLAYER5.id}
          pairState={player5State}
        />
        <CardPair
          title={PLAYER6.title}
          place={PLAYER6.id}
          pairState={player6State}
        />
      </div>
      <div className="desk-right">
        <CardPair
          title={PLAYER7.title}
          place={PLAYER7.id}
          pairState={player7State}
        />
        <CardPair
          title={PLAYER8.title}
          place={PLAYER8.id}
          pairState={player8State}
        />
      </div>
      <div className="desk-bottom">
        <CardPair
          title={PLAYER1.title}
          place={PLAYER1.id}
          pairState={player1State}
        />
        <CardPair
          title={PLAYER9.title}
          place={PLAYER9.id}
          pairState={player9State}
        />
      </div>
      <div className="desk-left">
        <CardPair
          title={PLAYER3.title}
          place={PLAYER3.id}
          pairState={player3State}
        />
        <CardPair
          title={PLAYER2.title}
          place={PLAYER2.id}
          pairState={player2State}
        />
      </div>
    </div>
  );
}
