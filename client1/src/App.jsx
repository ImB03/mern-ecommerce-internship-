import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Auth from "./page/auth/Auth";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import ExtraLayout from "./layout/ExtraLayout";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import A from "./components/a/A";
import ProductsPage from "./page/productsPage/ProductsPage";
import DetailPage from "./page/detailPage/DetailPage";
import Cart from "./page/cart/Cart";

function App() {
  const [user, setUser] = useState(false);
  const mode = useSelector((state) => state.persistedReducer.mode.mode);

  console.log(mode);

  return (
    <Router>
      <Routes>
        <Route element={<ExtraLayout />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/detailproduct" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
