import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Coins from '../Coins';
import Search from '../Search';

const Home = () => {
  const coinsList = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinsList.filter((coin) => coin.name.toLowerCase()
    .includes(search.toLowerCase()));
  return (
    <div>
      <Search handleChange={handleChange} />
      <Coins coinsList={filteredCoins} />
    </div>
  );
};

export default Home;
