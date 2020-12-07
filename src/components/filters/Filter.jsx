import React from "react";
import './filter.css'
import Data from '../../Data/Data';
import {connect} from 'react-redux';
import {setDifficulty,setChapter,setLearningAims} from '../../Redux/Actions/filterActions';



const mapDispatchToProps=(dispatch)=>({
  
  setDifficulty:(event)=>dispatch(setDifficulty(event.target.value)) ,
  setChapter:(event)=>dispatch(setChapter(event.target.value)) ,
  setLearningAims:(event)=>dispatch(setLearningAims(event.target.value))

})



const Filters = ({setLock,chapter,setDifficulty,setChapter,setLearningAims}) => {




  return (
      <div className="center">
        <span className="custom-dropdown big">
            <select onClick={setChapter}>    
                <option>None</option>
                <option>LU1</option>  
                <option>LU2</option>
                <option>LU3</option>
                <option>LU4</option>
                <option>LU9</option>
            </select>
        </span>
        <span className="custom-dropdown big">
            <select disabled={setLock[0]}   onClick={setDifficulty}>    
                
                  {chapter && chapter!=='None' ? 
                    <>
                    <option>None</option>
                    <option>*</option>  
                    <option>**</option>
                    <option>***</option>
                    <option>****</option>
                    </>
                    :
                   <option>None</option>

              }
              
            </select>
        </span>
        <span className="custom-dropdown big">
            <select disabled={setLock[1]}  onClick={setLearningAims}> 
              <option>None</option>
              {chapter && chapter!=='None' ?
                  chapter==='LU9'?Object.values(Data[Number(chapter[2])-5])[0].learning_aims.map(aim=>( <option key={Math.random()*1000/Math.random()}>{aim}</option>)) :
                  Object.values(Data[Number(chapter[2])-1])[0].learning_aims.map(aim=>( <option key={Math.random()*1000/Math.random()}>{aim}</option>))
                  : <option>None</option>
              }
            </select>
        </span>
        
      </div>
    )
}

export default connect(null,mapDispatchToProps)(Filters);