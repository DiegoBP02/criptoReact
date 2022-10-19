import React, { useState, useEffect } from "react";
import CoinList from "./components/CoinList";
import Layout from "./components/Layout";

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const resp = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
    );
    const data = await resp.json();
    setIsLoading(false);
    setCoins(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout />
      <CoinList data={coins} isLoading={isLoading} />
    </>
  );
}

export default App;
