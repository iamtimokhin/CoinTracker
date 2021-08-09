import React, { useEffect, useState } from "react";
import Tracker from "./components/Tracker";
import Header from "./components/Header";

const App = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setCoin(json);
        console.warn(json);
      } catch (error) {
        console.error("error", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Tracker coin={filteredCoins} isLoading={isLoading} />
    </div>
  );
};

export default App;
