/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducer, {fetchCoinsFromApi} from './coins/coins'


const reducer = combineReducers({
    coins: coinsReducer
});

const elemStore = createStore(reducer, applyMiddleware(thunk, logger));
elemStore.dispatch(fetchCoinsFromApi());


export default elemStore;
