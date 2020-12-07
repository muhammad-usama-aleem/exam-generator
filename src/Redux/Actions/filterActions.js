import{SET_CHAPTER,SET_DIFFICULTY,SET_LEARNING_AIMS} from '../Types/types';

export const setChapter=(UserInput)=>({
  type:SET_CHAPTER,
  payload:UserInput
})

export const setDifficulty=(UserInput)=>(
{
	type:SET_DIFFICULTY,
	payload:UserInput
})

export const setLearningAims=(UserInput)=>(
{
	type:SET_LEARNING_AIMS,
	payload:UserInput
})
























