import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import './Actor.css';

const Actor = (props) => {

    const POSTER_SIZE = "w154";

    return (
        <div className='rmdb-actor'>
         
            <span className='rmdb-actor-name'>{props.actor.name}</span>
            <span className='rmdb-actor-character'>{props.actor.character}</span>
        </div>
    )
}

export default Actor;