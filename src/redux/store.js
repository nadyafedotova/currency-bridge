import { createStore, combineReducers } from 'redux';
import { dateReducer, visibilityReducer } from './reducers';

const rootReducer = combineReducers({
    date:dateReducer,
    visibility:visibilityReducer,
});

export const store = createStore(rootReducer);
