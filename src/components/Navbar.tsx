import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AgileFinance</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-700 hover:text-blue-600">Funcionalidades</Link>
            <Link to="/#plans" className="text-gray-700 hover:text-blue-600">Planos</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-blue-600">Contato</Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#cta');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Funcionalidades
              </Link>
              <Link
                to="/#plans"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Planos
              </Link>
              <Link
                to="/#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector('#cta');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block px-3 py-2 bg-blue-600 text-white rounded-md"
              >
                Começar Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;