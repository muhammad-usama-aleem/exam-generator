
import {ADD,REMOVE,POPULATE_STATE} from '../Types/types.js';

const initialState={
        questions:[],
        displayQuestions:[]
}


export const addRemoveReducer=(state=initialState,action={})=>{
      
      switch(action.type)
      {
      	case ADD:

        return{...state,questions:state.questions.concat(action.payload)}

        case REMOVE:
        let newarray=[];
        
        return{...state,questions: state.questions.filter((ques) => ques.id !== action.payload)}

      //   case POPULATE_STATE:
      //     let contains=false;
      //     state.displayQuestions.map(ques=>{
      //       if(ques.id===action.payload.id)
      //       {
      //         contains=true
      //       }
      //     })       //lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0)

      //    if(!contains)
      //    {
      //   return{...state,displayQuestions:state.displayQuestions.push(action.payload)}
      // }
      // else
      // {
      //   return state;
      // }




	    
      	default:
      	return state
      }
}

