import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import logoNavbar from '../../assets/Logofinal.png';

interface Props {
  onCartClick?: () => void;
}

export default function Navbar({ onCartClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const itemCount = state.items.length;
  return (
    <nav className="bg-black text-white border-b border-white/10 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logoNavbar} alt="Muzko Ink Logo" className="h-10" />
        </Link>
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/collection" className="hover:text-gray-300">Colección</Link>
          <Link to="/contact" className="hover:text-gray-300">Contacto</Link>
          <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
          <button onClick={onCartClick} className="relative hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l.4 2M7 13h10l3-8H6.4m4.6 8a3 3 0 11-6 0m13 0a3 3 0 11-6 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                {itemCount}
              </span>
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <button onClick={onCartClick} className="relative ml-4 text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l.4 2M7 13h10l3-8H6.4m4.6 8a3 3 0 11-6 0m13 0a3 3 0 11-6 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-6 py-2 hover:text-gray-300">Home</Link>
          <Link to="/collection" onClick={() => setIsOpen(false)} className="block px-6 py-2 hover:text-gray-300">Colección</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-6 py-2 hover:text-gray-300">Contacto</Link>
          <Link to="/checkout" onClick={() => setIsOpen(false)} className="block px-6 py-2 hover:text-gray-300">Checkout</Link>
        </div>
      )}
    </nav>
  );
}
