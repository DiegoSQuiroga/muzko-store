import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // 👈 agregamos el Footer
import CartSidebar from "../cart/CartSidebar";
import { useState, useEffect } from "react";

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  // Cerrar el carrito al cambiar de ruta
  useEffect(() => {
    setCartOpen(false);
  }, [location]);

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      
      <main>
        {/* Usamos context para pasar la función si se necesita más abajo */}
        <Outlet context={{ openCart: () => setCartOpen(true) }} />
      </main>
      
      <Footer /> {/* 👈 agregado aquí para que aparezca al final de todas las páginas */}
    </>
  );
}
