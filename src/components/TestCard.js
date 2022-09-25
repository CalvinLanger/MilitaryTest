import React from 'react';

function TestCard(props) {
    return (
        <div className='test-card'>
            <div className='test-card__title'>
                <p>{props.description}</p>
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}

export default TestCard;