import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const waLink = "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Dora%20Pancakes%20%26%20Waffles";

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-dora-blue font-bold transition-colors"
      : "text-slate-600 hover:text-dora-blue transition-colors font-medium";
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-dora-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <span className="font-bold text-2xl text-dora-blue tracking-tight">Dora Pancakes & Waffles</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/menu" className={getLinkClass('/menu')}>Menu</Link>
            <Link to="/about" className={getLinkClass('/about')}>About</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </div>

          <div className="hidden md:flex">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
            >
              <Phone size={18} /> Order Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dora-blue">
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link to="/" onClick={closeMenu} className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-dora-blue rounded-md font-medium">Home</Link>
          <Link to="/menu" onClick={closeMenu} className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-dora-blue rounded-md font-medium">Menu</Link>
          <Link to="/about" onClick={closeMenu} className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-dora-blue rounded-md font-medium">About</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-dora-blue rounded-md font-medium">Contact</Link>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-4 w-full bg-green-500 text-white px-4 py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
          >
            <Phone size={18} /> WhatsApp Order
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
