import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import AllCoins from "./AllCoins";
import WatchList from "./WatchList";

const MainPage = () => {
  return (
    <div className="flex my-6 md:space-x-8 md:px-6 lg:px-8 lg:space-x-20">
      <SideBar />
      <div className="w-[75%] bg-neumorphic border-t-2 border-l-4 border-white border-r px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
