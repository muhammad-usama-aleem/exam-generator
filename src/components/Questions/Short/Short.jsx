import React from 'react';
import Data from '../../../Data/Data';
import Mcqs from './Mcqs/Mcqs';
import './Short.css';
import {connect} from 'react-redux';
import {addQuestion,removeQuestion} from '../../../Redux/Actions/addRemoveActions';

const mapDispatchToProps=(dispatch)=>({
addQuestion:(data)=>dispatch(addQuestion(data)),
removeQuestion:(data)=>dispatch(removeQuestion(data)),
//populateState:(data)=>dispatch(populateState(data))
})

function Short(props) {


function addOrRemove(event)
{

 console.log("hello")
  console.log(event.target.name)
   if(event.target.name==='Add')
   {
    console.log(event.target.value)
     props.addQuestion(props.ques)
   }else {
     props.removeQuestion(props.ques.id)
   }

}

    // if(props.ques)
    // {

    // }

    console.log(props,"props")
    const tobechange = props.ques;
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
                    <button name="Remove" onClick={addOrRemove} type="button" className="control-text">Remove</button>
                    <button name="Add" onClick={addOrRemove} type="button" className="control-text">Add</button>
                </div>
            </div>
            <div className="extra_spacing">
            </div>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(Short);
