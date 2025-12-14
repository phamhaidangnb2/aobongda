import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import AIChat from './components/AIChat';
import { PRODUCTS } from './constants';
import { Product, CartItem, Size } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, size: Size) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, size }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: number, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const handleUpdateQuantity = (id: number, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.size === size) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartItems={cartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        
        <div id="products" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Sản Phẩm Nổi Bật</h2>
              <p className="mt-2 text-gray-500">Những mẫu áo đấu hot nhất mùa giải này.</p>
            </div>
            <a href="#" className="hidden sm:block text-sm font-semibold text-emerald-600 hover:text-emerald-500">
              Xem tất cả &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <a href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
              Xem tất cả &rarr;
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
               <div className="text-center p-6 bg-gray-50 rounded-xl">
                 <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-lg font-medium text-gray-900">Chính Hãng 100%</h3>
                 <p className="mt-2 text-base text-gray-500">Cam kết hàng chính hãng, hoàn tiền gấp đôi nếu phát hiện hàng giả.</p>
               </div>
               <div className="text-center p-6 bg-gray-50 rounded-xl">
                 <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h3 className="text-lg font-medium text-gray-900">Giao Hàng Nhanh</h3>
                 <p className="mt-2 text-base text-gray-500">Giao hàng toàn quốc trong vòng 2-4 ngày làm việc.</p>
               </div>
               <div className="text-center p-6 bg-gray-50 rounded-xl">
                 <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                 </div>
                 <h3 className="text-lg font-medium text-gray-900">Hỗ Trợ 24/7</h3>
                 <p className="mt-2 text-base text-gray-500">Đội ngũ tư vấn viên và AI luôn sẵn sàng hỗ trợ bạn.</p>
               </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-white mb-4 md:mb-0">
                <span className="text-2xl font-bold">Vua Áo Đấu</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                 <p className="text-gray-400 text-sm">Chính sách bảo mật</p>
                 <p className="text-gray-400 text-sm">Điều khoản sử dụng</p>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2024 Vua Áo Đấu. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      <AIChat />
    </div>
  );
}

export default App;
