import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNavbar from "../../assets/Logoarriba.png";
import { useCart } from "../../context/useCart";

interface Props {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-black text-white border-b border-white/10 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logoNavbar} alt="Muzko Ink Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold items-center">
          <Link to="/">Home</Link>
          <Link to="/collection">Colección</Link>
          <Link to="/contact">Contacto</Link>

          {/* Carrito */}
          <button
            onClick={onCartClick}
            className="relative"
            aria-label="Abrir carrito"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/collection" onClick={() => setIsOpen(false)}>
            Colección
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contacto
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              onCartClick();
            }}
            className="mx-auto"
          >
            🛒 Ver carrito
          </button>
        </div>
      )}
    </nav>
  );
}