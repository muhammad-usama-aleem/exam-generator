import {createStore,combineReducers} from 'redux';
import {filterReducer} from '../Reducers/filterReducer';
import {finalizeReducer} from '../Reducers/finalizeReducer';
import {addRemoveReducer} from '../Reducers/addRemoveReducer';
const rootReducer=combineReducers({filterReducer,finalizeReducer,addRemoveReducer});
const Store=createStore(rootReducer);
export default Store;