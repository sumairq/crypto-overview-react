import React from 'react';
import PropTypes from 'prop-types';

const styleImg = {
  width: '4rem',
  height: 'auto',
};

const SingleCoin = ({ coin, vw }) => {
  const priceChange = coin.price_change_percentage;
  const styleLi = {
    width: vw,
    height: '27vh',
    listStyle: 'none',
    textDecoration: 'none',

  };
  return (
    <li style={styleLi} className="coin-list-item">
      <div className="center">
        <img src={coin.image} style={styleImg} alt="coin" />
        {coin.name}
      </div>
      <div>
        <p className="price">
          price:
          {coin.current_price}
        </p>
        <br />
        {priceChange < 0 ? (
          <p className="price-change red">
            {coin.price_change_percentage ? coin.price_change_percentage.toFixed(2)
              : coin.price_change_percentage_24h.toFixed(2)}
          </p>
        ) : (
          <p className="price-change green">
            {coin.price_change_percentage ? coin.price_change_percentage.toFixed(2)
              : coin.price_change_percentage_24h.toFixed(2)}
          </p>
        )}

      </div>
    </li>
  );
};

SingleCoin.propTypes = {
  coin: PropTypes.shape([PropTypes.object]).isRequired,
  vw: PropTypes.string.isRequired,
};

export default SingleCoin;
