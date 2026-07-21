import React from 'react';
import { Store } from '../types';
import { MapPin, Phone, Star, ShieldCheck, ArrowLeft } from 'lucide-react';

interface StoreCardProps {
  store: Store;
  onSelect: (store: Store) => void;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store, onSelect }) => {
  return (
    <div 
      id={`store-card-${store.id}`}
      className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
      onClick={() => onSelect(store)}
    >
      <div>
        {/* Banner with City badge */}
        <div className={`h-24 bg-gradient-to-r ${store.bannerColor} p-4 flex flex-col justify-between relative`}>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-950 text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-stone-600" />
            <span>{store.persianCity}</span>
          </div>
          <div className="mt-auto">
            <span className="text-white/80 text-[10px] uppercase tracking-wider font-semibold">بخش غرفه‌های ویژه</span>
          </div>
        </div>

        {/* Store Info */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
              {store.persianName}
            </h3>
            <div className="flex items-center gap-1 bg-amber-50 text-amber-900 text-xs px-2 py-0.5 rounded font-bold">
              <span>{store.rating}</span>
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            </div>
          </div>

          <p className="text-xs text-amber-950/70 font-semibold mb-3">
            {store.persianSpecialization}
          </p>

          <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed mb-4">
            {store.persianDescription}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0 border-t border-stone-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-stone-500 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>ضمانت اصالت بافت</span>
        </div>
        <button 
          id={`btn-view-store-${store.id}`}
          className="text-amber-800 text-xs font-bold hover:text-amber-950 flex items-center gap-1 transition-colors"
        >
          <span>مشاهده محصولات</span>
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
