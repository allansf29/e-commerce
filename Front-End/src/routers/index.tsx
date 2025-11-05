import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductPage from "../pages/ProductPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}