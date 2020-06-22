import React from 'react'
import Desk from '../components/equityCalculator/desk/desk';
import PickersWrapper from '../components/equityCalculator/picker/pickersWrapper';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

export default function EquityCalculatorPage() {
    const dispatch = useDispatch();
    const resetCardsHandler = () => {
        dispatch(actions.resetCards());
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
            <PickersWrapper/>
        </div>
    )
}
