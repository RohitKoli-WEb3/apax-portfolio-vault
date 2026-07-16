import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Portfolio from "../pages/Portfolio";
import Wallet from "../pages/Wallet";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route path="/wallet" element={<Wallet />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;