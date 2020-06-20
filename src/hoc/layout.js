import React, { useState }  from 'react'
import Navigation from '../components/navigation/navigation';
import PokerDesk from '../components/pokerDesk/pokerDesk';
import Flopzilla from '../components/flopzilla/flopzilla';
import {
    EQUITY_CALC,
    FLOP_STATS,
  } from "../constants/navigation";
export default function Layout() {

    const [expanded, setExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState(EQUITY_CALC.keyName);

    const toggleNavigation = () => {
        console.log("toggleNavigation")
        const oldValue = expanded;
        setExpanded(!oldValue);
    }

    const getActivePage = () => {
        switch(activeItem){
            case EQUITY_CALC.keyName: return <PokerDesk/>;
            case FLOP_STATS.keyName: return <Flopzilla/>;
            default: return <PokerDesk/>;
        }
    }

    return (
        <div className='site-wrapper'>
            <Navigation expanded={expanded} activeItem={activeItem} setActiveItem={setActiveItem} toggleNavigation={toggleNavigation}/>
            <main className={`layout-container${expanded ? '-expanded' : ''}`}>
                {getActivePage()}
            </main>
        </div>
    )
}
