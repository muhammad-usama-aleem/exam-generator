import React from 'react';
import Data from '../../../Data/Data';
import Mcqs from './Mcqs/Mcqs';
import './Short.css';

function Short(props) {
    const tobechange = Data[1].LU2.questions[0];
    return (
        <div className="main-section">
            {/* {console.log(Data[0].LU1.questions[0].content)} */}
            <div className='questionsection'>
                <h3 className='question'>Q: {tobechange.content}</h3>
                {/* FOR IMAGE */}
                {(tobechange.img !== undefined || tobechange.img !== 0) ?
                    <img src={tobechange.img} alt={tobechange.img} />            
                :
                    null
                }
                {/* END OF IMAGE */}
                {/* FOR MCQS */}
                {
                (tobechange.list !== undefined || tobechange.list !== 0) ?
                    tobechange.list.map(lists => {
                        return <Mcqs list={lists} />
                    })            
                :
                    null
                }
                {/* END OF MCQ */}
            </div>

            <div className="buttonsection">
                <div className="points">
                    <button type="button" className="points-text">Punkte: {tobechange.points}</button>
                </div>
                <div className="Control">
                    <button type="button" className="control-text">Remove</button>
                    <button type="button" className="control-text">Add</button>
                </div>
            </div>
            <div className="extra_spacing">
            </div>
        </div>
    )
}

export default Short;
