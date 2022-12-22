import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { allCoins } from "../data/all-coins/all-coin-markets";
import CoinCard from "../components/coins/CoinCard";

// bg-neumorphic
const MainPage = () => {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="w-[65vw] h-[95vh] overflow-y-scroll border-t-white border-t-2 rounded-3xl border-l-2 border-l-gray-200/30 bg-blue-50 py-4 xl:py-10 px-6 md:px-10 xl:px-12">
        <Outlet />
      </div>
      {/* <div className="space-y-7 h-full overflow-y-scroll bg-blue-100/60 p-4  pb-20 rounded-xl">
        {allCoins.map((coin, i) => {
          // eslint-disable-next-line array-callback-return
          if (i < 3) return;
          return (
            <CoinCard
              data={{
                name: allCoins[i].name,
                image: allCoins[i].image,
                rank: allCoins[i].market_cap_rank,
                OverAllchange: allCoins[i].market_cap_change_percentage_24h,
                currentPrice: allCoins[i]["current_price"],
                priceChange24Hr: allCoins[i]["price_change_24h"],
                marketCap: allCoins[i]["market_cap"],
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default MainPage;
