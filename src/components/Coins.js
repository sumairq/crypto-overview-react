import React from 'react'
import { Link } from 'react-router-dom';


const Coins = ({coinsList}) => {
    console.log(coinsList)
  return (
      <>
    <div>Coins</div>
    {coinsList.map((coin) => (
        
        <Link to={`/details/${coin.id}`}>
            <li>
                {coin.name}
                </li>
                </Link>
                
    ))}
     </>
)
    }
export default Coins
