import React from 'react';
import './RecommendBtn.css';

const RecommendBtn = (props) => {
    return  (
        <div className='rmdb-RecommendBtn' onClick={props.onClick}>
            <p>{props.text}</p>
            
        </div>
    )
}

export default RecommendBtn;