// Action Types
const GET_COINS = 'space-travelers/coins/GET_COINS';
const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false';

// ACTION CREATORS

export const getCoins = (payload) => ({
  type: GET_COINS,
  payload,
});

// Fetch Coins

export const fetchCoinsFromApi = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const coins = await response.json();

  const coinsToDispatch = coins.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.current_price,
    market_cap: coin.market_cap,
    image: coin.image,
    total_volume: coin.total_volume,
    price_change_percentage: coin.price_change_percentage_24h,
  }));

  dispatch(getCoins(coinsToDispatch));
};

// Reducers

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_COINS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
