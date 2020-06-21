import React from 'react';
import Picker from './picker';
import { ALL_CARDS } from '../../../utils/cardImagesLoader';

export default function PickersWrapper() {

    const generatePickers = () => {
        const pickers = [];
        for (let [key, value] of Object.entries(ALL_CARDS)) {
            const picker = <Picker suit={value.suit} cards={value.allCards} key={key}/>;
            pickers.push(picker);
        }
        return pickers;
    }

    return (
        <div className='picker-wrapper'>
          {generatePickers()}  
        </div>
    )
}
