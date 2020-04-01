import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index'

const intialState = {};

const middleware = [thunk];
const store = createStore(rootReducer, intialState, compose(
    applyMiddleware(...middleware)
));

export default store;