import { Route, Routes } from "react-router-dom";
import MainPage from "./scenes/MainPage";
import Login from "./scenes/Login";
import AllCoins from "./scenes/AllCoins";
import NotFound from "./scenes/NotFound";
import WatchList from "./scenes/WatchList";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("");
    }

    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      setDarkMode();
    };
  }, [darkMode]);
  // className="h-screen w-screen bg-[#f2f2f2]"
  return (
    <div>
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="all-coins" element={<AllCoins />} />
          <Route path="watchlist" element={<WatchList />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
