


import {CHECK_FIFTY,CHECK_SIXTY,CHECK_FORMEL,CHECK_SELBSTDEFINIERT} from '../Types/types';

export const checkFifty=(value)=>({
type:CHECK_FIFTY,
payload:value
})
export const checkSixty=(value)=>({
type:CHECK_SIXTY,
payload:value
})
export const checkFormel=(value)=>({
type:CHECK_FORMEL,
payload:value
})
export const checkSelbstdefiniert=(value)=>({
type:CHECK_SELBSTDEFINIERT,
payload:value
})






