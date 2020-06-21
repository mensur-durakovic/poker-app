import React from 'react';
import Card from './card/card';
import CardPair from './cardPair/cardPair';

export default function Desk(props) {
    return (
        <div className='desk'>
            <div className='desk-central'>
                <div className='desk-central-left'>
                    <Card central={true}/>
                    <Card central={true} title='Flop'/>
                    <Card central={true}/>
                </div>
                <div className='desk-central-right'>
                    <Card central={true} title='Turn'/>
                    <Card central={true} title='River'/>
                </div>
            </div>

            <div className='desk-top'>
                <CardPair title='Player 4'/>
                <CardPair title='Player 5'/>
                <CardPair title='Player 6'/>
            </div>
            <div className='desk-right'>
                <CardPair title='Player 7'/>
                <CardPair title='Player 8'/>
            </div>
            <div className='desk-bottom'>
                <CardPair title='Player 1'/>
                <CardPair title='Player 9'/>
            </div>
            <div className='desk-left'>
                <CardPair title='Player 3'/>
                <CardPair title='Player 2'/>
            </div>
        </div>
    )
}
