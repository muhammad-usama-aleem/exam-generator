import React from "react";
import './filter.css'
import Data from '../../Data/Data';


const Filters = ({setValues,setLock,chapter}) => {




  return (
      <div className="center">
        <span className="custom-dropdown big">
            <select   onClick={(event)=>setValues(event.target.value,'','')}>    
                <option>None</option>
                <option>LU1</option>  
                <option>LU2</option>
                <option>LU3</option>
                <option>LU4</option>
            </select>
        </span>
        <span className="custom-dropdown big">
            <select disabled={setLock[0]}  onClick={(event)=>setValues('',event.target.value,'')}>    
                
                  {chapter!=='None'?
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
            <select disabled={setLock[1]}  onClick={(event)=>setValues('','',event.target.value)}> 
            <option>None</option>   
              {chapter!=='None'?
                  Object.values(Data[Number(chapter[2])-1])[0].learning_aims.map(aim=>( <option>{aim}</option>))
                  : <option>None</option>

              }
            </select>
        </span>
        
      </div>
    )
}

export default Filters;