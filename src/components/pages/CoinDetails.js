import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleCoin from '../SingleCoin';
import PrintDetails from '../PrintDetails';
import { getDetailsFromApi } from '../../redux/coinDetails/coinDetails';

const CoinDetails = () => {
  const coin = useParams();
  const data = useSelector((state) => state.coinDetails[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsFromApi(coin));
  }, []);

  return (
    <div>

      {(data)
        ? (
          <>
            <SingleCoin coin={data} vw="100vw" />
            <PrintDetails data={data} />
          </>
        ) : (
          <h1>loading</h1>
        )}

    </div>
  );
};

export default CoinDetails;
