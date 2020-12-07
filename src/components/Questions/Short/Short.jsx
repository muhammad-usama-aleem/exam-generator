import React,{useState} from 'react';
import Data from '../../../Data/Data';
import Mcqs from './Mcqs/Mcqs';
import './Short.css';
import {connect} from 'react-redux';
import {addQuestion,removeQuestion} from '../../../Redux/Actions/addRemoveActions';

const mapDispatchToProps=(dispatch)=>({
addQuestion:(data)=>dispatch(addQuestion(data)),
removeQuestion:(data)=>dispatch(removeQuestion(data)),
})

function Short(props) {



const [locks,endis]=useState([0,1]);




function addOrRemove(event)
{


   if(event.target.name==='Add')
   {
       endis([1,0])
       console.log(locks)

     props.addQuestion(props.ques)

   }else {
         endis([0,1])
     props.removeQuestion(props.ques)
   }

}


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
                    <button disabled={locks[1]} name="Remove" onClick={addOrRemove} type="button" className={locks[1]?"disabled":"control-text"}>Remove</button>
                    <button    disabled={locks[0]} name="Add" onClick={addOrRemove} type="button" className={locks[0]?"disabled":"control-text"}>Add</button>
                </div>
            </div>
            <div className="extra_spacing">
            </div>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(Short);
