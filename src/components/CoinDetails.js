import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsFromApi } from '../redux/coinDetails/coinDetails';

const CoinDetails = () => {

    const coin = useParams();
    console.log('useeffect',coin)
    const data = useSelector((state)=> state.coinDetails[0])
    const dispatch = useDispatch();
  
    useEffect(() => {
        console.log("from useeffect")
        dispatch(getDetailsFromApi(coin));
        // return () => {
        //   dispatch(removeDetailsData());
        // };
      }, []);

      
    console.log(data)
  return (
    <div>
        {(data)
        ? (
            <section>
            <h1>
            {data.name}
            </h1>
           <h2>
               {data.symbol}
               </h2> 
           <h2>
           {data.current_price}
               </h2> 
               </section>
        ) : (
            <h1>loading</h1>
        )}
       
        </div>
  )
}

export default CoinDetails
