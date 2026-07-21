import React, { useState } from 'react';
import { CartItem, Product, Order } from '../types';
import { ShoppingBag, Trash2, Plus, Minus, User, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOrderCompleted: (order: Order) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderCompleted
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<Order | null>(null);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Group items by store for elegance
  const groupedItems = cartItems.reduce((acc, item) => {
    const storeName = item.product.storeName;
    if (!acc[storeName]) {
      acc[storeName] = [];
    }
    acc[storeName].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      setError('لطفاً تمامی فیلدهای الزامی برای ارسال را تکمیل نمایید.');
      return;
    }

    if (!/^09\d{9}$/.test(customerPhone)) {
      setError('شماره موبایل وارد شده معتبر نیست. نمونه معتبر: ۰۹۱۲۳۴۵۶۷۸۹');
      return;
    }

    setIsLoading(true);
    setError(null);

    const orderPayload = {
      customerName,
      customerPhone,
      customerAddress,
      items: cartItems.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        persianName: item.product.persianName,
        storeName: item.product.storeName,
        price: item.product.price,
        quantity: item.quantity
      })),
      totalAmount
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderPayload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'ثبت سفارش با خطا مواجه شد.');
      }

      setOrderSuccess(result.order);
      onOrderCompleted(result.order);
      onClearCart();
    } catch (err: any) {
      setError(err.message || 'خطایی در ارتباط با سرور رخ داده است.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" dir="rtl">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-lg bg-stone-50 h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-5 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-800" />
            <h2 className="text-lg font-bold text-stone-950">سبد خرید نهایی شما</h2>
            <span className="bg-amber-100 text-amber-900 text-xs px-2 py-0.5 rounded-full font-bold">
              {cartItems.length.toLocaleString('fa-IR')} کالا
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 text-sm font-bold bg-stone-100 p-1.5 px-3 rounded-lg"
          >
            بستن سبد
          </button>
        </div>

        {orderSuccess ? (
          /* SUCCESS SCREEN */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-white">
            <CheckCircle className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-stone-900 mb-2">سفارش شما با موفقیت ثبت گردید!</h3>
            <p className="text-stone-500 text-sm mb-6 max-w-sm">
              محصولات درخواستی شما به غرفه‌های همکار ارسال شد. فاکتور سفارش شما به شرح زیر آماده است.
            </p>
            
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 w-full text-right mb-6 text-xs leading-relaxed text-stone-700">
              <div className="flex justify-between border-b border-stone-200 pb-2 mb-2 font-bold">
                <span>کد پیگیری سفارش:</span>
                <span className="text-amber-800">{orderSuccess.id}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>تحویل‌گیرنده:</span>
                <span>{orderSuccess.customerName}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>تلفن تماس:</span>
                <span>{orderSuccess.customerPhone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>مبلغ کل فاکتور:</span>
                <span className="font-bold text-stone-950">{formatPrice(orderSuccess.totalAmount)} تومان</span>
              </div>
              <div className="pt-2 mt-2 border-t border-stone-200 flex justify-between">
                <span>وضعیت سفارش:</span>
                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">در انتظار تأیید غرفه‌دار</span>
              </div>
            </div>

            <button
              onClick={() => {
                setOrderSuccess(null);
                onClose();
              }}
              className="bg-amber-800 text-white w-full py-3 rounded-lg font-bold hover:bg-amber-900 transition-colors"
            >
              بازگشت به بازار دیبا
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          /* EMPTY CART SCREEN */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-stone-100 p-4 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-1">سبد خرید شما خالی است</h3>
            <p className="text-stone-500 text-xs max-w-xs leading-relaxed mb-6">
              می‌توانید از منوی بالا غرفه‌های نساجی یا البسه آماده را مرور کرده و به سبد خرید خود اضافه کنید.
            </p>
            <button
              onClick={onClose}
              className="border border-amber-800 text-amber-800 px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-50 transition-colors"
            >
              شروع خرید از ۲۰ غرفه
            </button>
          </div>
        ) : (
          /* ITEMS LIST & CHECKOUT FORM */
          <div className="flex-1 flex flex-col justify-between">
            {/* Scrollable Items */}
            <div className="p-6 overflow-y-auto max-h-[50vh] space-y-6">
              {Object.entries(groupedItems).map(([storeName, items]) => {
                const cartItemsGroup = items as CartItem[];
                return (
                  <div id={`cart-group-${storeName}`} key={storeName} className="bg-white border border-stone-200 rounded-xl p-4">
                    <div className="border-b border-stone-100 pb-2 mb-3">
                      <span className="text-[10px] text-stone-400 font-semibold uppercase">محصولات ارسالی از غرفه:</span>
                      <h4 className="font-bold text-xs text-amber-900">{storeName}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {cartItemsGroup.map(item => (
                      <div id={`cart-item-${item.product.id}`} key={item.product.id} className="flex justify-between items-center gap-3">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.persianName} 
                          className="w-12 h-12 object-cover rounded-lg bg-stone-100"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-stone-900 text-xs truncate">{item.product.persianName}</h5>
                          <span className="text-[10px] text-stone-500">{formatPrice(item.product.price)} تومان / {item.product.unit}</span>
                        </div>

                        {/* Adjust qty */}
                        <div className="flex items-center gap-1 border border-stone-200 rounded-lg p-0.5 bg-stone-50">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-stone-500 hover:text-stone-700 hover:bg-white rounded transition-colors"
                            id={`btn-cart-dec-${item.product.id}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs px-2 font-bold text-stone-900">{item.quantity.toLocaleString('fa-IR')}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="p-1 text-stone-500 hover:text-stone-700 hover:bg-white rounded transition-colors disabled:opacity-40"
                            id={`btn-cart-inc-${item.product.id}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button 
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                          title="حذف کالا"
                          id={`btn-cart-del-${item.product.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            </div>

            {/* Checkout Billing & Shipping Form */}
            <div className="bg-white border-t border-stone-200 p-6 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-1.5 border-b border-stone-100 pb-2">
                <MapPin className="w-4 h-4 text-amber-800" />
                <span>اطلاعات دقیق ارسال سفارش</span>
              </h3>

              {error && (
                <div className="bg-red-50 border-r-4 border-red-500 text-red-900 p-3 rounded text-xs font-semibold mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-stone-700 text-xs font-bold mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    نام و نام خانوادگی تحویل‌گیرنده <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="مثال: زهرا مرادی"
                    className="w-full border border-stone-300 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none bg-stone-50"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      شماره تلفن همراه <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full border border-stone-300 rounded-lg p-2.5 text-xs text-right focus:ring-1 focus:ring-amber-800 focus:outline-none bg-stone-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-xs font-bold mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    نشانی پستی دقیق جهت ارسال محصولات <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="مثال: اصفهان، خیابان بزرگمهر، کوچه بهار، پلاک ۱۵، طبقه دوم"
                    className="w-full border border-stone-300 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none bg-stone-50"
                  />
                </div>

                {/* Subtotals & Buy action */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 mt-4">
                  <div className="flex justify-between items-center text-xs text-stone-600 mb-2">
                    <span>جمع اقلام سبد خرید:</span>
                    <span>{formatPrice(totalAmount)} تومان</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-stone-600 mb-2">
                    <span>هزینه بسته‌بندی و پست سراسری:</span>
                    <span className="text-emerald-700 font-semibold">رایگان (ویژه سال نو)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-stone-900 border-t border-stone-200 pt-2">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-amber-900 text-base">{formatPrice(totalAmount)} تومان</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  id="btn-submit-order"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-4 rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2 disabled:bg-stone-300 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>در حال ثبت سفارش ایمن...</span>
                    </>
                  ) : (
                    <span>پرداخت و ثبت نهایی سفارش غرفه‌ها</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
