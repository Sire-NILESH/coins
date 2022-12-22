import React from "react";
import { BiMedal } from "react-icons/bi";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import TableRowData from "../ui/TableRowData";
import HeaderButton from "./../ui/HeaderButton";

import { allCoins } from "../../data/all-coins/all-coin-markets";
import CoinImage from "./CoinImage";

const CoinReportRow = ({ index }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <span className="text-xs font-bold text-slate-500 px-2 py-1 inline rounded-full border">
        {allCoins[index].market_cap_rank}
      </span>
      <CoinImage image={allCoins[index].image} name={allCoins[index].name} />
      <TableRowData
        title={allCoins[index].name}
        value={allCoins[index].current_price}
      />
      <div className="flex items-center ml-6">
        {allCoins[0].market_cap_change_percentage_24h.toFixed(3) >= 0 ? (
          <RxTriangleUp className="text-green-600" />
        ) : (
          <RxTriangleDown className="text-red-600" />
        )}

        <span className="text-xs font-bold text-slate-500 px-2 py-1">{`${allCoins[
          index
        ].market_cap_change_percentage_24h.toFixed(3)}%`}</span>
      </div>
    </div>
  );
};

// space-y-4 p-6 shadow-2xl border-t-2 border-white rounded-3xl shadow-blue-100
const CoinsReport = (props) => {
  const rows = [];

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div className="space-x-2 flex py-1 items-center">
          <BiMedal className="h-6 w-6 inline text-yellow-500 " />
          <p className="text-lg inline font-semibold text-slate-600">
            {props.title}
            <span className="text-xs ml-4 font-light text-slate-500/80">
              Mkt cap (24hrs)
            </span>
          </p>
        </div>

        <HeaderButton className="flex-shrink-0" title="View all" />
      </header>
      <div className="space-y-4 px-8 w-full">
        {allCoins.map((coin, index) => {
          if (index < 3) return <CoinReportRow index={index} />;
        })}
      </div>
    </div>
  );
};

export default CoinsReport;
