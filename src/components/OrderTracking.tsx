import React, { useState, useEffect } from 'react';
import { Order } from '../types';
import { Truck, Search, Calendar, MapPin, RefreshCw, Layers } from 'lucide-react';

interface OrderTrackingProps {
  orders: Order[];
  onRefreshOrders: () => void;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ orders, onRefreshOrders }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefreshOrders();
    setIsRefreshing(false);
  };

  const filteredOrders = orders.filter(order => {
    return order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.customerPhone.includes(searchTerm);
  });

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm" dir="rtl">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Truck className="w-5 h-5 text-amber-800" />
            <span>سامانه رهگیری فاکتورها و مرسولات پستی</span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">تولیدات غرفه‌های ۲۰ گانه را در یک فاکتور مشترک مدیریت و رهگیری کنید.</p>
        </div>

        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-bold bg-amber-50 px-3 py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
          id="btn-refresh-orders"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>بروزرسانی وضعیت مرسولات</span>
        </button>
      </div>

      {/* Search Input bar */}
      <div className="relative mb-6">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جستجو با کد پیگیری فاکتور، نام خریدار یا شماره همراه..."
          className="w-full text-xs border border-stone-300 rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-amber-800 bg-stone-50"
        />
        <Search className="w-4 h-4 text-stone-400 absolute top-3.5 right-3.5" />
      </div>

      {/* Orders list */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-12 bg-stone-50 border border-dashed border-stone-200 rounded-xl">
          <Truck className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <p className="text-stone-500 text-xs font-bold mb-1">هیچ سفارشی یافت نشد</p>
          <p className="text-stone-400 text-[10px]">کدهای فاکتور جدید پس از ثبت خرید بلافاصله در این بخش نمایش داده می‌شوند.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map(order => (
            <div 
              id={`order-record-${order.id}`}
              key={order.id} 
              className="border border-stone-200 rounded-xl overflow-hidden hover:border-stone-300 transition-colors bg-white shadow-sm"
            >
              {/* Header inside order card */}
              <div className="bg-stone-50 border-b border-stone-200 px-4 py-3 flex flex-col sm:flex-row justify-between gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-bold text-stone-800">
                    شناسه پیگیری: <span className="text-amber-800 font-black">{order.id}</span>
                  </span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    {formatDate(order.createdAt)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-stone-400">وضعیت مرسوله:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                    order.status === 'pending' && 'bg-amber-100 text-amber-900' ||
                    order.status === 'shipping' && 'bg-indigo-100 text-indigo-900' ||
                    'bg-emerald-100 text-emerald-900'
                  }`}>
                    {order.status === 'pending' && 'در انتظار تأیید غرفه‌داران'}
                    {order.status === 'shipping' && 'تحویل به پستچی (در حال حمل)'}
                    {order.status === 'delivered' && 'تحویل نهایی گردید'}
                  </span>
                </div>
              </div>

              {/* Grid content inside card */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Column 1: Client and Shipping details */}
                <div className="space-y-3 border-b md:border-b-0 md:border-l border-stone-100 pb-4 md:pb-0 md:pl-6 text-xs text-stone-600 leading-relaxed">
                  <h4 className="font-bold text-stone-900">اطلاعات تحویل‌گیرنده</h4>
                  <div>
                    <span className="text-stone-400">نام خریدار:</span>
                    <span className="font-semibold text-stone-900 mr-1">{order.customerName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400">موبایل تماس:</span>
                    <span className="font-semibold text-stone-900 mr-1 ltr">{order.customerPhone}</span>
                  </div>
                  <div className="flex items-start gap-1.5 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>{order.customerAddress}</span>
                  </div>
                </div>

                {/* Column 2: Items purchased list */}
                <div className="md:col-span-2 space-y-3 text-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 mb-2">منسوجات و پارچه‌های خریداری شده</h4>
                    <div className="space-y-2 max-h-28 overflow-y-auto pr-1">
                      {order.items.map((item, idx) => (
                        <div id={`order-item-${item.productId}`} key={idx} className="flex justify-between items-center text-xs">
                          <div className="flex items-center gap-1.5 truncate">
                            <Layers className="w-3.5 h-3.5 text-stone-400" />
                            <span className="font-semibold text-stone-800 truncate max-w-xs">{item.persianName}</span>
                            <span className="text-[10px] text-amber-800">({item.storeName})</span>
                          </div>
                          <span className="text-stone-500 font-medium">
                            {item.quantity.toLocaleString('fa-IR')} عدد × {formatPrice(item.price)} ت
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing row */}
                  <div className="flex justify-between items-center border-t border-stone-100 pt-3 mt-2">
                    <span className="text-stone-400 font-bold">کل مبلغ پرداخت شده با کارت:</span>
                    <span className="font-black text-amber-900 text-sm">{formatPrice(order.totalAmount)} تومان</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
