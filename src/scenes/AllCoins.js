import React, { useContext, useState } from "react";
import CardWrapper from "../components/ui/CardWrapper";
import SingleCoinComponenet from "../components/SingleCoinComponenet";
import { CoinState } from "../uitls/CoinContext";

const AllCoins = () => {
  const [data, setData] = useState({
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 16598.8,
    market_cap: 318990514218,
    market_cap_rank: 1,
    fully_diluted_valuation: 348666390698,
    total_volume: 13725493750,
    high_24h: 16794.94,
    low_24h: 16529.2,
    price_change_24h: -69.31862507565893,
    price_change_percentage_24h: -0.41588,
    market_cap_change_24h: -1163676409.0980225,
    market_cap_change_percentage_24h: -0.36347,
    circulating_supply: 19212637,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -75.9554,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 24382.79333,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2022-11-20T15:59:31.090Z",
  });

  const currency = CoinState();
  console.log(currency);

  return (
    // <div className="w-[75%] bg-neumorphic border-t-2 border-l-4 border-white border-r px-4">
    <div className="h-full w-full">
      AllCoins
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-16">
        <SingleCoinComponenet data={data} />
        <SingleCoinComponenet data={data} />
        <SingleCoinComponenet data={data} />
        <SingleCoinComponenet data={data} />
      </div>
    </div>
  );
};

export default AllCoins;
