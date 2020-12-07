import {ADD,REMOVE} from '../Types/types';






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








