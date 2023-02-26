import React, { useEffect, useState } from "react";

import "./App.scss";
import Header from "@components/Header";
import { Context, Response } from "@utils/Context/Context";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CategoriesPage from "./pages/CategoriesPage";
import InfoPage from "./pages/InfoPage";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => {
  const [products, setProducts] = useState<Response[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/products",
      });
      setProducts(data);
    };

    fetch();
  }, []);
  return (
    <Context.Provider value={products}>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
