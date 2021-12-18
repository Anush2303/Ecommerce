import React from 'react';
import '../css/Card.css';

function Card(props){
    return (
        <div className='card'>
            <div className='card_'>
            <h5>{props.item}</h5>
            <h5>{props.title}</h5>
            </div>
            <h6>{props.id}</h6>
        </div>
    )
}

export default Card;
