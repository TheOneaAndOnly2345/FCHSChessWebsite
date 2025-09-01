import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChessLogo from "@/assets/chesslogo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-club-black border-b border-club-red/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src={ChessLogo}
                alt="FCHS Chess Club Logo"
                className="h-10 w-auto"
              />
            </Link>
            <span className="text-xl font-bold text-white">
              Forsyth Central Chess Club
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
                className={`font-medium ${
                  location.pathname === item.path
                    ? "bg-club-red text-white"
                    : "text-gray-300 hover:text-white hover:bg-club-red/20"
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-club-black border-t border-club-red/30 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "bg-club-red text-white"
                      : "text-gray-300 hover:text-white hover:bg-club-red/20"
                  }`}
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
