import React from 'react'
import Desk from '../components/equityCalculator/desk/desk';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function EquityCalculatorPage() {

    const resetCardsHandler = () => {
        console.log("resetCardsHandler!");
    }

    return (
        <div className='equity-calc-container'>
            <Desk/>
            <div className='equity-calc-button-wrapper'>
                <button onClick={resetCardsHandler}>
                    <FontAwesomeIcon icon={faSync} />
                    Reset Cards
                </button>
            </div>
            <div>
                card picker
            </div>
        </div>
    )
}
