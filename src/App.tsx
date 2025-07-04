import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Collection from "./features/collection/CollectionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="collection" element={<Collection />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}