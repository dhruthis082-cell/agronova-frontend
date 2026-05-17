import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Home from "./pages/Home";

import MarketplacePage from "./pages/MarketplacePage";

import BlockchainPage from "./pages/BlockchainPage";

import DashboardPage from "./pages/DashboardPage";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Cart from "./pages/Cart";

import Admin from "./pages/Admin";

import Assistant from "./pages/Assistant";

import Payment from "./pages/Payment";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/marketplace"
          element={<MarketplacePage />}
        />

        <Route
          path="/blockchain"
          element={<BlockchainPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/assistant"
          element={<Assistant />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;