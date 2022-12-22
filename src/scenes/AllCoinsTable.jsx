import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { allCoins } from "../data/all-coins/all-coin-markets";

const CoinItem = ({ coin }) => {
  return (
    <>
      {/* STAR */}
      <div>
        <span>
          <AiOutlineStar className="h-6 w-6 text-slate-500" />
        </span>
      </div>
      {/* RANK */}
      <div>
        <span className="border bg-slate-100 text-slate-600 border-slate-300 flex items-center justify-center rounded-full h-6 w-6">
          {coin.market_cap_rank}
        </span>
      </div>
      {/* COIN */}
      <div className="col-span-2 place-self-start ">
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center gap-2">
            <img className="w-6 rounded-full" src={coin.image} alt={coin.id} />
            <span className="font-semibold text-slate-600">
              {coin.symbol.toUpperCase()}
            </span>
          </div>
          <p className="hidden sm:block text-slate-600 ml-8">{coin.name}</p>
        </Link>
      </div>
      {/* PRICE */}
      <div className="col-span-2">${coin.current_price.toLocaleString()}</div>
      {/* 24H */}
      <div>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600 font-semibold">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-500 font-semibold">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </div>
      {/* 24H VOL */}
      <div className="col-span-2 w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </div>
      {/* MKT */}
      <div className="col-span-2 w-[180px] hidden sm:table-cell">
        ${coin.market_cap.toLocaleString()}
      </div>
      {/* CHART */}

      <Sparklines data={coin.sparkline_in_7d.price}>
        <SparklinesLine color="#166534" />
      </Sparklines>
    </>
  );
};

const AllCoinsTable = () => {
  const [searchText, setSearchText] = useState("");
  // console.log(allCoins)
  return (
    <div div className="">
      <header className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-semibold mb-2 uppercase tracking-widest text-slate-500">
          All &nbsp;Cryptocurrencies
        </h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-full focus:outline-none focus:ring-blue-600"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </header>

      <div className="w-full border-collapse text-center rounded-3xl">
        <header className="px-4 grid grid-cols-12 place-items-center rounded-xl bg-gray-100 py-4 h-[80px]">
          {/* <div className="">⭐</div> */}
          <div className="px-4">⭐Wishlist</div>
          <div className="px-4">#</div>
          <div className="col-span-2 text-left text-slate-700">Coin</div>
          <div className="col-span-2">Price</div>
          <div>24h</div>
          <div className="col-span-2 hidden md:table-cell">24h Volume</div>
          <div className="col-span-2 hidden sm:table-cell">Mkt</div>
          <div className="">Last 7 Days</div>
        </header>
        <div className="grid grid-cols-12 place-items-center px-4 gap-y-9">
          {allCoins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoinsTable;
