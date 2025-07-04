import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNavbar from "../../assets/Logoarriba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-white/10 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logoNavbar} alt="Muzko Ink Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/collection">Colección</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/checkout">Carrito</Link>
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
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/collection" onClick={() => setIsOpen(false)}>Colección</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
          <Link to="/checkout" onClick={() => setIsOpen(false)}>Carrito</Link>
        </div>
      )}
    </nav>
  );
}