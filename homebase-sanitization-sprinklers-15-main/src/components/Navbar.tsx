import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "דף הבית", path: "/" },
    { title: "שירותים", path: "/services" },
    { title: "אודות", path: "/about" },
    { title: "צור קשר", path: "/contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full transform -rotate-45"></div>
                <div className="absolute inset-1 bg-white rounded-full"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                  WATER LIFE
                </h1>
                <p className="text-sm text-teal-600 font-medium">TECHNOLOGIES</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;