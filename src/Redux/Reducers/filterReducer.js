
import {SET_DIFFICULTY,SET_CHAPTER,SET_LEARNING_AIMS} from '../Types/types.js';

const initialState={
          chapter:'',
          difficulty:'',
          learning_goals:'',
          setLock:[1,1]
}


export const filterReducer=(state=initialState,action={})=>{
      
      switch(action.type)
      {
      	case SET_CHAPTER:

	       if( action.payload!=='None')
          {    
           if(state.setLock.every(item=>item===1))
           {
            return{...state,chapter:action.payload,setLock:[0,1]}
           }else {
              
             return initialState

           

          }
      }
        else 
        {
             return initialState; 
        }
       
      	case SET_DIFFICULTY:   
      	if( state.chapter!=='None')
        {
        
            if(state.setLock.some(item=>item===1) &&   action.payload!=='None')
            {
             return{...state,difficulty:action.payload,setLock:[0,0]};
            }else {
              return{...state,difficulty:action.payload} 
            } 
         }

      	case SET_LEARNING_AIMS:
   
           return{...state,learning_goals:action.payload};
        

      	default:
      	return state
      }
}

