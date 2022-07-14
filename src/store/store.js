import { createStore, combineReducers } from 'redux';

import callReducer from '../store/reducer/reducer';

const rootReducer = combineReducers(
    { data:callReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;s