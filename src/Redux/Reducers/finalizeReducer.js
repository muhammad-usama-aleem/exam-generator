
import {CHECK_FIFTY,CHECK_SIXTY,CHECK_FORMEL,CHECK_SELBSTDEFINIERT} from '../Types/types.js';

const initialState={
          fifty: false,
          sixty: false,
          formel: false,
          selbstdefiniert:false,
          setLock:[0,0,0,0]
}

export const finalizeReducer=(state=initialState,action={})=>{
      
      switch(action.type)
      {
        case CHECK_FIFTY:
        if(action.payload)
        {
        return{
          ...state,fifty:true,setLock:[0,1,1,1]
        }
      }
      else
      {
         return initialState
      }
        case CHECK_SIXTY:
        if(action.payload)
        {
        return{
          ...state,sixty:true,setLock:[1,0,1,1]
        }
      }else {
         return initialState
        
      }
          case CHECK_FORMEL:

          if(action.payload)
          {
        return{
          ...state,formel:true,setLock:[1,1,0,1]
        }
      }
      else
      {
        return initialState
      }

         case CHECK_SELBSTDEFINIERT:
         if(action.payload)
         {
        return{
          ...state,selbstdefiniert:true,setLock:[1,1,1,0]
        }
      }
      else
      {
        return initialState
      }
      default:
        return state
    
      }
}

