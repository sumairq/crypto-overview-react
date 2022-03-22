/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducer, {fetchCoinsFromApi} from './coins/coins'
import coinDetailsReducer from './coinDetails/coinDetails'


const reducer = combineReducers({
    coins: coinsReducer,
    coinDetails: coinDetailsReducer
});

const elemStore = createStore(reducer, applyMiddleware(thunk, logger));
elemStore.dispatch(fetchCoinsFromApi());


export default elemStore;
