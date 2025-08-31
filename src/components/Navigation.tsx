import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChessLogo from "@/assets/chesslogo.png";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" }
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
            <span className="text-xl font-bold text-white">FCHS Chess Club</span>
          </div>
          
          {/* Navigation Links */}
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
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
