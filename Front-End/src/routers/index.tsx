import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}