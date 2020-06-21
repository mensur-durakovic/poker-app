import React from 'react'
import DeskCard from '../card/card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function CardPair(props) {
    const {title}=props;
    return (
        <div className='desk-card-pair'>
            <div className='desk-card-pair-title'>
                <FontAwesomeIcon icon={faPlusCircle} />
                {title}
            </div>
            <div className='desk-card-pair-container'>
                <DeskCard/>
                <DeskCard/>
            </div>
        </div>
    )
}
