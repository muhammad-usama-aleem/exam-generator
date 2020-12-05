import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'; 
import {filterReducer} from '../Reducers/filterReducer';
import {finalizeReducer} from '../Reducers/finalizeReducer';
const rootReducer=combineReducers({filterReducer,finalizeReducer});
const Store=createStore(rootReducer,applyMiddleware(createLogger()));
export default Store;