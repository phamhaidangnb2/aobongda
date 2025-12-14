import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product, Size } from '../types';
import { SIZES } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: Size) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-90 transition-opacity h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-center object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-emerald-600 mb-1">
            {product.team}
          </h3>
          <h2 className="text-lg font-bold text-gray-900 mb-2 truncate" title={product.name}>
            {product.name}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>
        
        <div>
           {/* Size Selector */}
           <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs text-gray-500 font-medium">Size:</span>
            <div className="flex space-x-1">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size as Size)}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded-full border transition-colors ${
                    selectedSize === size
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</p>
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                isAdded 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {isAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
