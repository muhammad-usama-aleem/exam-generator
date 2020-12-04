import React from 'react';
import Data from '../../../Data/Data';
import './Short.css';

function Short() {
    return (
        <div className="main-section">
            {/* {console.log(Data[0].LU1.questions[0].content)} */}
            <div className='questionsection'>
                <h3 className='question'>Q: {Data[0].LU1.questions[0].content}</h3>
            </div>

            <div className="buttonsection">
                <div className="points">
                    <button type="button" className="points-text">Punkte: {Data[0].LU1.questions[0].points}</button>
                </div>
                <div className="Control">
                    <button type="button" className="control-text">Remove</button>
                    <button type="button" className="control-text">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Short;
