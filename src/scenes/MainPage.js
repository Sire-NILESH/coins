import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import AllCoins from "./AllCoins";
import WatchList from "./WatchList";

const MainPage = () => {
  return (
    <div className="flex my-6 space-x-20">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainPage;
