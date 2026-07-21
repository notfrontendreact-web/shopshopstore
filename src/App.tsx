import { useState, useEffect } from 'react';
import { Product, Store, CartItem, Order } from './types';
import { StoreCard } from './components/StoreCard';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { StoreModal } from './components/StoreModal';
import { OrderTracking } from './components/OrderTracking';
import { 
  ShoppingBag, 
  Store as StoreIcon, 
  MapPin, 
  Info, 
  Download, 
  FileArchive, 
  Layers, 
  Grid, 
  CheckCircle,
  Scissors
} from 'lucide-react';

export default function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState<'products' | 'stores' | 'tracking'>('products');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  
  // Modals & Sliders
  const [cartOpen, setCartOpen] = useState(false);
  const [zipHelpOpen, setZipHelpOpen] = useState(false);

  // Load baseline database from Express APIs
  useEffect(() => {
    const loadData = async () => {
      try {
        const storesRes = await fetch('/api/stores');
        const storesData = await storesRes.json();
        setStores(storesData);

        const productsRes = await fetch('/api/products');
        const productsData = await productsRes.json();
        setProducts(productsData);

        const ordersRes = await fetch('/api/orders');
        const ordersData = await ordersRes.json();
        setOrders(ordersData);
      } catch (err) {
        console.error('Error fetching baseline marketplace data:', err);
      }
    };
    loadData();
  }, []);

  const refreshOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Failed to refresh order status:', err);
    }
  };

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        // Toggle off if already in cart (easy user experience)
        return prev.filter(item => item.product.id !== product.id);
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          const productMax = item.product.stock;
          if (newQty < 1) return item;
          if (newQty > productMax) return item;
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderCompleted = (newOrder: Order) => {
    setOrders(prev => [newOrder, ...prev]);
    // Refresh products to show updated stock values
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  };

  // Filter products based on search, category and city
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.persianName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.material && product.material.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Find store to get city
    const store = stores.find(s => s.id === product.storeId);
    const matchesCity = selectedCity === 'all' || (store && store.city === selectedCity);

    return matchesSearch && matchesCategory && matchesCity;
  });

  // Unique list of cities from stores
  const cities: { en: string; fa: string }[] = Array.from(
    new Map<string, string>(stores.map(s => [s.city, s.persianCity])).entries()
  ).map(([en, fa]) => ({ en, fa }));

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans" dir="rtl">
      {/* Upper Navigation & Premium Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo and App Title */}
            <div className="flex items-center gap-3">
              <div className="bg-amber-800 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center">
                <Scissors className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h1 className="text-xl font-black text-stone-950 flex items-center gap-1.5 leading-none">
                  <span>دیبا بازار</span>
                  <span className="text-[10px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded-full font-bold">۲۰ غرفه فعال نساجی</span>
                </h1>
                <p className="text-[10px] text-stone-400 font-medium mt-1">بازار جامع مواد پوشاک، منسوجات و البسه سنتی</p>
              </div>
            </div>

            {/* Central Navigation Tabs */}
            <nav className="hidden md:flex space-x-reverse space-x-1 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => { setActiveTab('products'); setSelectedStore(null); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'products' && !selectedStore
                    ? 'bg-white text-amber-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                کالای غرفه‌ها
              </button>
              <button
                onClick={() => { setActiveTab('stores'); setSelectedStore(null); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'stores'
                    ? 'bg-white text-amber-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                ۲۰ غرفه نساجی و پوشاک
              </button>
              <button
                onClick={() => { setActiveTab('tracking'); setSelectedStore(null); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'tracking'
                    ? 'bg-white text-amber-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                رهگیری فاکتورها
              </button>
            </nav>

            {/* Right-Side Action Controls */}
            <div className="flex items-center gap-3">
              
              {/* ZIP Help Guide info */}
              <button 
                id="btn-zip-help"
                onClick={() => setZipHelpOpen(true)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FileArchive className="w-4 h-4 text-amber-700" />
                <span className="hidden sm:inline">دریافت فایل ZIP</span>
              </button>

              {/* Shopping Cart button */}
              <button
                id="btn-open-cart"
                onClick={() => setCartOpen(true)}
                className="bg-amber-800 hover:bg-amber-900 text-white text-xs font-black py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>سبد خرید</span>
                {totalCartCount > 0 && (
                  <span className="bg-white text-amber-900 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">
                    {totalCartCount.toLocaleString('fa-IR')}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile navigation tab-bar */}
      <div className="md:hidden bg-white border-b border-stone-200 flex justify-around p-2 text-xs sticky top-20 z-30 shadow-sm">
        <button
          onClick={() => { setActiveTab('products'); setSelectedStore(null); }}
          className={`flex-1 py-2 rounded-lg text-center font-bold ${
            activeTab === 'products' && !selectedStore ? 'bg-amber-50 text-amber-950' : 'text-stone-500'
          }`}
        >
          کالاها
        </button>
        <button
          onClick={() => { setActiveTab('stores'); setSelectedStore(null); }}
          className={`flex-1 py-2 rounded-lg text-center font-bold ${
            activeTab === 'stores' ? 'bg-amber-50 text-amber-950' : 'text-stone-500'
          }`}
        >
          ۲۰ غرفه نساجی
        </button>
        <button
          onClick={() => { setActiveTab('tracking'); setSelectedStore(null); }}
          className={`flex-1 py-2 rounded-lg text-center font-bold ${
            activeTab === 'tracking' ? 'bg-amber-50 text-amber-950' : 'text-stone-500'
          }`}
        >
          رهگیری
        </button>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* APP PROMOTION & INFO INTRO */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-850 text-white rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-lg border border-stone-800">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-stone-500/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              اولین نمایشگاه آنلاین مواد پوشاک ایران
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2 leading-tight">
              بازارگاه نساجی دیبا: با همکاری ۲۰ غرفه تخصصی از سراسر کشور
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
              دیبا بازار بستری هماهنگ است که در آن ۲۰ کارگاه، غرفه بافندگی و توزیع‌کننده مواد اولیه پوشاک، مخمل، ابریشم، کتان، لنین، ابزار خیاطی و صنایع دستی سوزن‌دوزی، مستقیماً محصولات اصیل خود را عرضه می‌کنند. تمامی خریدها از غرفه‌های مختلف در قالب یک مرسوله پستی یکپارچه جمع‌آوری و برای شما ارسال می‌شود.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-amber-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ارسال مستقیم از یزد، اصفهان، گیلان، تبریز، شیراز و زاهدان</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ضمانت ۱۰۰٪ پنبه، ابریشم طبیعی و دوخت اصیل</span>
              </div>
            </div>
          </div>
        </div>

        {/* TAB 1: ALL PRODUCTS CATALOG */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            {/* Filter controls and Search bar */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch">
                
                {/* Search text field */}
                <div className="flex-1">
                  <label className="block text-stone-700 text-xs font-bold mb-1.5">جستجوی هوشمند در کالاها و غرفه‌ها</label>
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="مثال: ترمه ابریشمی، لنین، جین، پشم تبریز، سوزندوزی..."
                    className="w-full text-xs border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                {/* Filter by Category */}
                <div className="w-full lg:w-48">
                  <label className="block text-stone-700 text-xs font-bold mb-1.5">دسته‌بندی مواد پوشاک</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-xs border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:outline-none cursor-pointer"
                  >
                    <option value="all">همه دسته‌بندی‌ها</option>
                    <option value="fabric">پارچه متری</option>
                    <option value="apparel">پوشاک آماده</option>
                    <option value="notions">خرازی و ابزار</option>
                    <option value="traditional">صنایع دستی و سنتی</option>
                  </select>
                </div>

                {/* Filter by City */}
                <div className="w-full lg:w-48">
                  <label className="block text-stone-700 text-xs font-bold mb-1.5">شهر تولیدکننده و غرفه</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full text-xs border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:outline-none cursor-pointer"
                  >
                    <option value="all">همه شهرها</option>
                    {cities.map(city => (
                      <option key={city.en} value={city.en}>{city.fa}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Clear filters label if active */}
              {(searchQuery || selectedCategory !== 'all' || selectedCity !== 'all') && (
                <div className="flex justify-between items-center pt-2 border-t border-stone-100 text-xs text-stone-500">
                  <span>تعداد کالای فیلتر شده: <b>{filteredProducts.length.toLocaleString('fa-IR')}</b> مورد</span>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedCity('all');
                    }}
                    className="text-amber-800 font-bold hover:underline"
                  >
                    پاک کردن فیلترها
                  </button>
                </div>
              )}
            </div>

            {/* Grid of filtered products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white border border-stone-200 rounded-2xl">
                <Layers className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <h3 className="font-bold text-stone-800 text-base mb-1">کالایی یافت نشد</h3>
                <p className="text-stone-500 text-xs">لطفاً واژه جستجو را تغییر دهید یا فیلترهای بالا را ریست کنید.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(prod => (
                  <ProductCard 
                    key={prod.id}
                    product={prod}
                    onAddToCart={handleAddToCart}
                    isInCart={cart.some(item => item.product.id === prod.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: 20 ACTIVE BOUTIQUE STORES GRID */}
        {activeTab === 'stores' && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <h2 className="text-xl font-bold text-stone-900">لیست ۲۰ غرفه و فروشگاه رسمی همکار</h2>
              <p className="text-xs text-stone-500 mt-1">با کلیک بر روی هر غرفه می‌توانید شناسنامه، کارگاه و محصولات ویژه آن را مجزا مشاهده کنید.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map(store => (
                <StoreCard 
                  key={store.id}
                  store={store}
                  onSelect={(s) => setSelectedStore(s)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ORDER DISPATCH TRACKING */}
        {activeTab === 'tracking' && (
          <OrderTracking 
            orders={orders}
            onRefreshOrders={refreshOrders}
          />
        )}

      </main>

      {/* ZIP ARCHIVE DOWNLOADING INSTRUCTIONS DIALOG/MODAL */}
      {zipHelpOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm" dir="rtl">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative border border-stone-200">
            <button 
              onClick={() => setZipHelpOpen(false)}
              className="absolute top-4 left-4 text-stone-400 hover:text-stone-600 font-bold bg-stone-150 p-1.5 rounded-lg text-xs"
            >
              بستن
            </button>

            <div className="flex items-center gap-2 mb-4 text-amber-800">
              <FileArchive className="w-6 h-6 stroke-[2]" />
              <h3 className="text-lg font-bold text-stone-900">راهنمای دریافت فایل زیپ (ZIP) پروژه</h3>
            </div>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed text-justify">
              <p>
                کدنویسی این سایت فروشگاهی مواد پوشاک به طور کامل به صورت فول‌استک (Express + React) انجام شده است. شما به سادگی می‌توانید فایل کامل فشرده آن را دانلود کرده و روی کامپیوتر شخصی خود اجرا کنید.
              </p>

              <div className="bg-amber-50 border-r-4 border-amber-600 p-3.5 rounded text-amber-950 font-semibold space-y-2">
                <span className="block font-bold">مراحل دانلود فایل ZIP از پنل AI Studio:</span>
                <ol className="list-decimal list-inside space-y-1 text-[11px]">
                  <li>به منوی بالای صفحه مراجعه کنید.</li>
                  <li>بر روی دکمه <b className="text-amber-900">Export</b> یا آیکون تنظیمات کلیک کنید.</li>
                  <li>گزینه <b className="text-amber-900">Download Project as ZIP</b> را انتخاب کنید.</li>
                  <li>فایل به صورت مستقیم روی مرورگر شما بارگیری خواهد شد.</li>
                </ol>
              </div>

              <div className="space-y-1">
                <span className="block font-bold text-stone-900">نحوه اجرای آفلاین پروژه روی کامپیوتر:</span>
                <ol className="list-decimal list-inside space-y-1">
                  <li>فایل ZIP را استخراج (Extract) کنید.</li>
                  <li>ترمینال را در پوشه پروژه باز کنید.</li>
                  <li>دستور <code className="bg-stone-100 text-red-600 px-1 rounded font-bold">npm install</code> را جهت نصب پکیج‌ها بزنید.</li>
                  <li>دستور <code className="bg-stone-100 text-red-600 px-1 rounded font-bold">npm run dev</code> را جهت اجرای همزمان بکند و فرانت بزنید.</li>
                </ol>
              </div>
            </div>

            <button
              onClick={() => setZipHelpOpen(false)}
              className="mt-6 w-full bg-stone-900 hover:bg-black text-white py-2.5 rounded-lg font-bold text-xs transition-colors"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}

      {/* RENDER MODALS */}
      {selectedStore && (
        <StoreModal 
          store={selectedStore}
          onClose={() => setSelectedStore(null)}
          products={products}
          onAddToCart={handleAddToCart}
          cartProductIds={cart.map(item => item.product.id)}
        />
      )}

      {/* CART DRAWER */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-8 border-t border-stone-800 mt-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="font-bold text-stone-300">بازارچه منسوجات سنتی و البسه ایرانی دیبا - ۱۴۰۵</p>
          <p>توسعه‌یافته با معماری فرانت‌اند React و بک‌اند اختصاصی Node.js (Express)</p>
          <p className="text-[10px] text-stone-500">تمامی تصاویر و مشخصات کالاها نمادین بوده و برای شبیه‌سازی دقیق فرآیندهای تجاری طراحی گردیده است.</p>
        </div>
      </footer>
    </div>
  );
}
