import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer'

const combine = combineReducers(reducers);

const store = createStore(combine, {}, applyMiddleware(thunk));

export {
    store,
}
