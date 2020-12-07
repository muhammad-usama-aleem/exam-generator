
import {ADD,REMOVE,POPULATE_STATE} from '../Types/types.js';

const initialState={
        questions:[],
       points:0
}


export const addRemoveReducer=(state=initialState,action={})=>{
      
      switch(action.type)
      {
      	case ADD:
        return{...state,questions:state.questions.concat(action.payload),points:state.points+Number(action.payload.points)}
        case REMOVE:
        let newarray=[];
        return{...state,questions: state.questions.filter((ques) => ques.id !== action.payload.id),points:state.points-Number(action.payload.points)}	    
      	default:
      	return state
      }
}

