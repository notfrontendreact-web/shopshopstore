import React, { useState, useEffect } from 'react';
import { Store, Product, Review } from '../types';
import { X, MapPin, Phone, Star, ShieldAlert, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface StoreModalProps {
  store: Store;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const StoreModal: React.FC<StoreModalProps> = ({
  store,
  onClose,
  products,
  onAddToCart,
  cartProductIds
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  // Filter products for this store
  const storeProducts = products.filter(p => p.storeId === store.id);

  // Fetch reviews on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews/${store.id}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Failed to load reviews:', err);
      }
    };
    fetchReviews();
  }, [store.id]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/reviews/${store.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, rating, comment })
      });

      const result = await response.json();
      if (response.ok) {
        setReviews(prev => [...prev, result.review]);
        setSuccessMsg(true);
        setAuthor('');
        setComment('');
        setRating(5);
        // Fade success message out
        setTimeout(() => setSuccessMsg(false), 3000);
      }
    } catch (err) {
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm" dir="rtl">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-stone-200">
        
        {/* Header with Close */}
        <div className={`h-40 bg-gradient-to-r ${store.bannerColor} p-6 flex flex-col justify-between text-white relative`}>
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors cursor-pointer"
            id="btn-close-store-modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="bg-amber-800/80 backdrop-blur-sm self-start text-xs px-2.5 py-1 rounded-full font-bold">
            غرفه رسمی و تاییدشده بازار دیبا
          </div>

          <div>
            <h2 className="text-2xl font-black mb-1">{store.persianName}</h2>
            <p className="text-white/80 text-xs font-semibold">{store.persianSpecialization}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Side: Products and descriptions */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 border-b border-stone-100 pb-2">درباره این غرفه نساجی</h3>
              <p className="text-stone-600 text-sm leading-relaxed text-justify">
                {store.persianDescription}
              </p>
            </div>

            {/* Products of this store */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">
                محصولات و منسوجات عرضه شده ({formatNumber(storeProducts.length)})
              </h3>
              
              {storeProducts.length === 0 ? (
                <div className="bg-stone-50 border border-stone-100 text-stone-400 p-8 text-center text-xs rounded-xl">
                  محصولی در این غرفه ثبت نشده است.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {storeProducts.map(prod => (
                    <ProductCard 
                      key={prod.id}
                      product={prod}
                      onAddToCart={onAddToCart}
                      isInCart={cartProductIds.includes(prod.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Contact, address, ratings & reviews submission */}
          <div className="space-y-6">
            {/* Quick Stats Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
              <h4 className="font-bold text-stone-900 text-sm">شناسنامه و آدرس غرفه</h4>
              
              <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>{store.persianAddress}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                  <span className="ltr text-right inline-block">{store.phone}</span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-stone-200">
                  <span className="font-bold text-stone-800">رتبه مردمی:</span>
                  <div className="flex items-center gap-1 bg-amber-100 text-amber-950 px-2 py-0.5 rounded font-black text-xs">
                    <span>{store.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  </div>
                  <span className="text-stone-400">({formatNumber(store.reviewCount)} نظر خریدار)</span>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="space-y-4">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-stone-500" />
                <span>نظرات و بازخوردهای خریداران ({formatNumber(reviews.length)})</span>
              </h4>

              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {reviews.length === 0 ? (
                  <p className="text-stone-400 text-xs text-center py-4">اولین خریدار باشید که نظر خود را ثبت می‌کند!</p>
                ) : (
                  reviews.map(rev => (
                    <div id={`review-${rev.id}`} key={rev.id} className="bg-stone-50 border border-stone-100 rounded-lg p-3 text-[11px] leading-relaxed">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-stone-800">{rev.author}</span>
                        <div className="flex items-center text-amber-600 font-bold">
                          <span>{rev.rating}</span>
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                        </div>
                      </div>
                      <p className="text-stone-600">{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Add review form */}
              <form onSubmit={handleSubmitReview} className="border-t border-stone-200 pt-4 space-y-3">
                <span className="block text-stone-900 text-xs font-bold">ارسال نظر و امتیاز غرفه</span>
                
                {successMsg && (
                  <div className="bg-emerald-50 border-r-4 border-emerald-500 text-emerald-900 p-2 rounded text-[10px] font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>امتیاز ارزشمند شما ثبت گردید!</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    placeholder="نام شما"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border border-stone-300 rounded p-2 text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                  <div className="flex items-center justify-between border border-stone-300 rounded px-2">
                    <span className="text-[10px] text-stone-400">امتیاز:</span>
                    <select 
                      value={rating} 
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="text-xs text-amber-800 font-bold focus:outline-none cursor-pointer bg-transparent"
                    >
                      <option value={5}>۵ ستاره</option>
                      <option value={4}>۴ ستاره</option>
                      <option value={3}>۳ ستاره</option>
                      <option value={2}>۲ ستاره</option>
                      <option value={1}>۱ ستاره</option>
                    </select>
                  </div>
                </div>

                <textarea 
                  placeholder="دیدگاه شما درباره کیفیت محصولات یا اصالت غرفه..."
                  required
                  rows={2}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border border-stone-300 rounded p-2 text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 hover:bg-black text-white text-xs font-bold py-2 rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>ثبت بازخورد خریدار</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
