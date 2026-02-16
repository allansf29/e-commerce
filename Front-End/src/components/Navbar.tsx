import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X, Heart } from "lucide-react";
import ThemeToggle from "../components/ui/SliderToggle";
import Logo from "../assets/shirt.svg";
import { useCart } from "../components/CartContext"; // 👈 IMPORTANTE

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // pega os itens do carrinho
  const { cartItems } = useCart();

  // soma todas as quantidades
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="bg-background dark:bg-background-dark shadow-sm sticky top-0 z-50 transition-colors duration-300">
      
      <div className="w-full h-[3px] bg-primary dark:bg-primary-dark" />

      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-9 w-9 rounded-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <span className="text-2xl font-bold text-primary dark:text-white tracking-tight hidden sm:block">
            Ecom<span className="text-text dark:text-detail-dark">Store</span>
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[16px] font-medium text-text dark:text-white hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-[16px] font-medium text-text dark:text-white hover:text-primary transition-colors"
          >
            Produtos
          </Link>
          <Link
            to="/contact"
            className="text-[16px] font-medium text-text dark:text-white hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Busca */}
        <div className="hidden lg:flex items-center bg-muted dark:bg-secondary-dark rounded-full px-4 py-2 w-[30%] shadow-inner">
          <Search className="text-muted-foreground mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="bg-transparent focus:outline-none text-text dark:text-white w-full"
          />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4">

          <Link
            to="/favorites"
            className="text-muted-foreground hover:text-secondary transition dark:text-text-dark"
          >
            <Heart className="w-6 h-6" />
          </Link>

          {/* Carrinho com contador real */}
          <Link
            to="/cart"
            className="text-muted-foreground hover:text-secondary transition relative dark:text-text-dark"
          >
            <ShoppingCart className="w-6 h-6" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/profile"
            className="text-muted-foreground hover:text-secondary transition dark:text-text-dark"
          >
            <User className="w-6 h-6" />
          </Link>

          <ThemeToggle />

          {/* Menu Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary dark:text-white"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-background dark:bg-background-dark border-t px-6 py-4 space-y-3 shadow-lg"
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Produtos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
