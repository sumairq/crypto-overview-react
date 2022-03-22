import React from 'react'
import { useSelector } from 'react-redux';
import Coins from '../Coins'

const Home = () => {
    const coinsList = useSelector((state)=> state.coins)
    console.log("coinsList from home",coinsList)
  return (
    <div>
    <Coins coinsList={coinsList}/>
        </div>
  )
}

export default Home
