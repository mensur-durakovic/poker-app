import React from 'react';
import StartingHand from '../components/flopStats/startingHand';
import Board from '../components/flopStats/board';
import Statistics from '../components/flopStats/statistics';

export default function EquityCalculatorPage() {

    return (
        <div className='flop-stats-container'>
            <StartingHand/>
            <Board/>
            <Statistics/>
        </div>
    )
}
