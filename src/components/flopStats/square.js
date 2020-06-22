import React from 'react'

export default function Square(props) {
    const {name, color, active} = props;
    const squareColor = (active ? `flop-stats-square-${color}-active` : `flop-stats-square-${color}`);
    return (
        <div className={`flop-stats-square ${squareColor}`}>
            {name}
        </div>
    )
}
