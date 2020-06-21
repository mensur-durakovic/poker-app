import React from "react";

export default function Picker(props) {
  const { suit, cards } = props;
  return (
    <div className="picker">
      <div className="picker-suit">
        <img src={suit.image} alt={suit.altText}></img>
      </div>
      <div className="picker-cards">
        {cards.map((c) => (
          <img src={c.image} alt={c.altText} key={c.altText}></img>
        ))}
      </div>
    </div>
  );
}
