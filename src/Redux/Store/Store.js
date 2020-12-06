import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'; 
import {filterReducer} from '../Reducers/filterReducer';
import {finalizeReducer} from '../Reducers/finalizeReducer';
import {addRemoveReducer} from '../Reducers/addRemoveReducer';
const rootReducer=combineReducers({filterReducer,finalizeReducer,addRemoveReducer});
const Store=createStore(rootReducer,applyMiddleware(createLogger()));
export default Store;