import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Portfolio from "../pages/Portfolio";
import Wallet from "../pages/Wallet";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/portfolio" element={<Portfolio />} />

    <Route path="/wallet" element={<Wallet/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;