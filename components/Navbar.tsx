import React from 'react';
import { ShoppingCart, Menu, Search, Shirt } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onCartClick }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Shirt className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight">Vua Áo Đấu</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 font-medium hover:text-emerald-600 transition">Trang Chủ</a>
            <a href="#products" className="text-gray-500 hover:text-emerald-600 transition">Sản Phẩm</a>
            <a href="#" className="text-gray-500 hover:text-emerald-600 transition">Câu Lạc Bộ</a>
            <a href="#" className="text-gray-500 hover:text-emerald-600 transition">Đội Tuyển</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-emerald-600 transition">
              <Search className="h-6 w-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-gray-500 hover:text-emerald-600 transition relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-500 hover:text-emerald-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
