import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleCoin from './SingleCoin';

const Coins = ({ coinsList }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };
  return (
    <>
      <p className="txt-1">Showing 100 most active cryptocurrencies</p>
      <div className="coins">
        {coinsList.map((coin) => (

          <Link to={`/details/${coin.id}`} key={coin.id} className="coin-item" style={linkStyle}>
            <SingleCoin coin={coin} vw="50vw" />
          </Link>

        ))}
      </div>
    </>
  );
};

Coins.propTypes = {
  coinsList: PropTypes.shape([PropTypes.array]).isRequired,
};
export default Coins;
