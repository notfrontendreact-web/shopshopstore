import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Bookmark, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isInCart }) => {
  // Format price helper (1200000 -> ۱,۲۰۰,۰۰۰)
  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
    >
      <div className="relative overflow-hidden aspect-square bg-stone-100">
        <img 
          src={product.imageUrl} 
          alt={product.persianName} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-stone-900/95 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
          {product.category === 'fabric' && 'پارچه متری'}
          {product.category === 'apparel' && 'پوشاک آماده'}
          {product.category === 'notions' && 'خرازی و ابزار'}
          {product.category === 'traditional' && 'صنایع دستی'}
        </span>

        {/* Stock status badge */}
        {product.stock === 0 ? (
          <span className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px] flex items-center justify-center text-white font-bold text-sm">
            ناموجود
          </span>
        ) : product.stock < 10 ? (
          <span className="absolute bottom-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
            تنها {formatNumber(product.stock)} {product.unit} باقی مانده
          </span>
        ) : null}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <span className="text-[10px] text-amber-900 font-bold bg-amber-50 px-2 py-0.5 rounded">
              {product.storeName}
            </span>
            {product.material && (
              <span className="text-[10px] text-stone-500">
                {product.material}
              </span>
            )}
          </div>
          
          <h4 className="font-bold text-stone-950 text-sm md:text-base line-clamp-1 mb-1 mt-1 group-hover:text-amber-800 transition-colors">
            {product.persianName}
          </h4>

          <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed mb-3">
            {product.persianDescription}
          </p>
        </div>

        <div className="mt-auto">
          {/* Details list */}
          <div className="flex gap-2 text-[10px] text-stone-400 mb-3 border-t border-stone-100 pt-2.5">
            {product.color && (
              <span>رنگ: {product.color}</span>
            )}
            <span>•</span>
            <span>واحد: {product.unit}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-stone-400 text-[10px]">قیمت هر {product.unit}</span>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-base text-stone-900">{formatPrice(product.price)}</span>
                <span className="text-[10px] text-stone-500 font-medium">تومان</span>
              </div>
            </div>

            <button
              id={`btn-add-to-cart-${product.id}`}
              disabled={product.stock === 0}
              onClick={() => onAddToCart(product)}
              className={`p-2.5 rounded-lg transition-all flex items-center justify-center ${
                isInCart 
                  ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' 
                  : product.stock === 0
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  : 'bg-amber-800 text-white hover:bg-amber-900 shadow-sm'
              }`}
              title={isInCart ? 'در سبد خرید شما موجود است' : 'اضافه به سبد خرید'}
            >
              {isInCart ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                <ShoppingBag className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
