import React from "react";
import SingleCoin from "./SingleCoin";

const CoinList = ({ data, isLoading }) => {
  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="marginBottom">
      {data.map((coin, index) => {
        return <SingleCoin key={index} coin={coin} />;
      })}
    </div>
  );
};

export default CoinList;
