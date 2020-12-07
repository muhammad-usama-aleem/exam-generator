import {ADD,REMOVE,POPULATE_STATE} from '../Types/types';






export const addQuestion=(ques)=>({
	type:ADD,
	payload:ques

}
)

export const removeQuestion=(ques)=>({
    type:REMOVE,
	payload:ques

}
)

// export const populateState=(ques)=>({
// type:POPULATE_STATE,
// payload:ques

// })








