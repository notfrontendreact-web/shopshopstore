import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Product, Store, Order, Review } from './src/types';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory Mock Database
const stores: Store[] = [
  {
    id: 's1',
    name: 'Termeh Razavi',
    persianName: 'ترمه رضوی یزد',
    city: 'Yazd',
    persianCity: 'یزد',
    rating: 4.9,
    reviewCount: 34,
    specialization: 'Traditional Hand-woven Termeh & Silk',
    persianSpecialization: 'ترمه دست‌بافت و ابریشم اصیل',
    bannerColor: 'from-amber-700 to-red-900',
    description: 'Generations of master weavers presenting the finest silk Termeh, gold-threaded brocades, and luxury heritage textiles of Yazd.',
    persianDescription: 'نسل‌ها هنر بافندگی در تولید نفیس‌ترین ترمه‌های ابریشمی، زربفت و منسوجات اصیل و سنتی یزد با شناسنامه هنری.',
    phone: '035-36224150',
    address: 'Traditional Bazaar, Passage Razavi, Yazd',
    persianAddress: 'یزد، بازار سنتی، سرای شاه‌عباسی، پلاک ۲۴',
    featuredProductIds: ['p1', 'p2']
  },
  {
    id: 's2',
    name: 'Karbas Esfahan',
    persianName: 'کرباس اصفهان',
    city: 'Isfahan',
    persianCity: 'اصفهان',
    rating: 4.8,
    reviewCount: 28,
    specialization: 'Natural Linen & Block-Printed Ghalamkar',
    persianSpecialization: 'کتان طبیعی و پارچه‌های قلمکار اصفهان',
    bannerColor: 'from-teal-700 to-blue-900',
    description: 'Preserving the art of woodblock-printed cotton fabrics (Ghalamkar) using pure organic dyes and high-quality canvas and linen.',
    persianDescription: 'حفظ و ترویج هنر بی‌نظیر قلمکار اصفهان با مهرهای چوبی گلابی و رنگ‌های کاملاً گیاهی بر بستر متقال و کتان باکیفیت.',
    phone: '031-32210850',
    address: 'Naqsh-e Jahan Square, Bazaar, Isfahan',
    persianAddress: 'اصفهان، میدان نقش جهان، بازار غربی، پلاک ۱۱۰',
    featuredProductIds: ['p3', 'p4']
  },
  {
    id: 's3',
    name: 'Diba Gilan',
    persianName: 'دیبای گیلان',
    city: 'Rasht',
    persianCity: 'رشت',
    rating: 4.7,
    reviewCount: 19,
    specialization: 'Pure Natural Silks & Northern Textiles',
    persianSpecialization: 'ابریشم طبیعی گیلان و چادرشب‌بافی سنتی',
    bannerColor: 'from-emerald-700 to-teal-900',
    description: 'Premium organic silk and northern hand-loomed textiles (Chador Shab) crafted by local artisans with authentic traditions.',
    persianDescription: 'عرضه ابریشم درجه یک نوغان و منسوجات دست‌بافت چادرشب گیلان حاصل دسترنج زنان هنرمند خطه شمال.',
    phone: '013-33221940',
    address: 'Bazaar Square, Golsar Rd, Rasht',
    persianAddress: 'رشت، بلوار گلسار، نبش خیابان ۱۱۲، گالری ابریشم شمال',
    featuredProductIds: ['p5', 'p6']
  },
  {
    id: 's4',
    name: 'Saten Tehran',
    persianName: 'پارچه ساتن تهران',
    city: 'Tehran',
    persianCity: 'تهران',
    rating: 4.6,
    reviewCount: 42,
    specialization: 'Luxury Satin, Velvet, and Bridal Fabrics',
    persianSpecialization: 'ساتن، مخمل لوکس و پارچه‌های مجلسی و عروس',
    bannerColor: 'from-purple-800 to-indigo-950',
    description: 'Tehrans premier importer of luxurious French and Italian satins, soft velvets, and ornate bridal laces for high fashion.',
    persianDescription: 'مرکز تخصصی لوکس‌ترین پارچه‌های مجلسی، ساتن‌های ضخیم فرانسوی، مخمل‌های لطیف ابریشمی و توری‌های کارشده ایتالیایی.',
    phone: '021-55612345',
    address: 'Grand Bazaar, Fabrics Alley, Tehran',
    persianAddress: 'تهران، بازار بزرگ، بازار رضا، طبقه اول، پلاک ۴۲',
    featuredProductIds: ['p7', 'p8']
  },
  {
    id: 's5',
    name: 'Katan Zagros',
    persianName: 'کتان زاگرس',
    city: 'Shiraz',
    persianCity: 'شیراز',
    rating: 4.5,
    reviewCount: 22,
    specialization: 'Denim Fabrics & Heavy Cottons',
    persianSpecialization: 'پارچه جین، کتان ضخیم و مخمل کبریتی',
    bannerColor: 'from-indigo-700 to-sky-950',
    description: 'Durable, high-grade cotton canvas, thick denim sheets, and sturdy twill materials perfect for tailoring premium trousers and jackets.',
    persianDescription: 'تأمین‌کننده تخصصی انواع پارچه کتان کجراه، کتان جین سنگ‌شور، کتان ضخیم برزنتی و مخمل کبریتی با دوام استثنایی.',
    phone: '071-32245080',
    address: 'Zand Blvd, Shiraz',
    persianAddress: 'شیراز، بلوار زند، پاساژ شعله، طبقه همکف، پلاک ۵',
    featuredProductIds: ['p9', 'p10']
  },
  {
    id: 's6',
    name: 'Pashmineh Tabriz',
    persianName: 'پشمینه تبریز',
    city: 'Tabriz',
    persianCity: 'تبریز',
    rating: 4.9,
    reviewCount: 51,
    specialization: 'Premium Winter Wool & Cashmere',
    persianSpecialization: 'پارچه‌های پشمی، پالتویی و کشمیر عالی',
    bannerColor: 'from-amber-900 to-stone-900',
    description: 'The warmest cashmere, woolen footer, and traditional thick winter outerwear textiles, milled in Azerbaijans historic factories.',
    persianDescription: 'ارائه باکیفیت‌ترین پارچه‌های پشمی فوتر کوبیده، کشمیر چهارخانه لطیف و فاستونی‌های گرم بالا، مناسب فصول سرد سال.',
    phone: '041-35567890',
    address: 'Historic Tabriz Grand Bazaar, Tabriz',
    persianAddress: 'تبریز، بازار بزرگ سرپوشیده، تیمچه مظفریه، پلاک ۱۸',
    featuredProductIds: ['p11', 'p12']
  },
  {
    id: 's7',
    name: 'Baharak Gallery',
    persianName: 'گالری پوشاک بهارک',
    city: 'Tehran',
    persianCity: 'تهران',
    rating: 4.4,
    reviewCount: 15,
    specialization: 'Modern Apparel & Lightweight Cottons',
    persianSpecialization: 'پوشاک مدرن زنانه و پارچه‌های سبک بهاره',
    bannerColor: 'from-rose-700 to-pink-900',
    description: 'Casual modern ready-to-wear garments alongside lovely light cotton and rayon dressmaking materials.',
    persianDescription: 'گالری خلاقانه پوشاک آماده و نیمه‌آماده زنانه با طرح‌های مدرن و اسلیم بر بستر الیاف خنک و پنبه‌ای بهاره.',
    phone: '021-22008855',
    address: 'Tajrish Square, Tehran',
    persianAddress: 'تهران، تجریش، پاساژ قائم، طبقه دوم، پلاک ۳۰۸',
    featuredProductIds: ['p13', 'p14']
  },
  {
    id: 's8',
    name: 'Silk Atelier',
    persianName: 'آتلیه ابریشم مشهد',
    city: 'Mashhad',
    persianCity: 'مشهد',
    rating: 4.8,
    reviewCount: 26,
    specialization: 'Designer Scarves & Silk Bolts',
    persianSpecialization: 'روسری و شال ابریشمی و قواره‌های مجلسی ابریشم',
    bannerColor: 'from-fuchsia-800 to-stone-950',
    description: 'Bespoke hand-painted silk scarves, shawls, and premium raw silk yardage directly sourced from eastern silk road weavers.',
    persianDescription: 'طراحی و تولید روسری‌های نقاشی شده دست‌دوز، شال‌های مجلسی و قواره‌های نفیس ابریشمی ابریشم‌بافان مشهد.',
    phone: '051-38401122',
    address: 'Sajad Blvd, Mashhad',
    persianAddress: 'مشهد، بلوار سجاد، مرکز خرید امین، پلاک ۴۴',
    featuredProductIds: ['p15', 'p16']
  },
  {
    id: 's9',
    name: 'Harir Shiraz',
    persianName: 'حریر و ارگانزا شیراز',
    city: 'Shiraz',
    persianCity: 'شیراز',
    rating: 4.7,
    reviewCount: 12,
    specialization: 'Chiffon, Organza, and Sheer Fabric',
    persianSpecialization: 'حریر، کرپ حریر، ارگانزا و پارچه‌های ظریف',
    bannerColor: 'from-cyan-700 to-blue-900',
    description: 'Delicate sheer textiles, printed organzas, lightweight georgettes, and breezy fabrics suitable for wedding and party gowns.',
    persianDescription: 'دنیای حریرهای لطیف شیشه‌ای، ارگانزای حاشیه‌دار، ژرژت ترک و پارچه‌های توری ظریف برای انواع لباس شب بلند.',
    phone: '071-36278899',
    address: 'Afif-Abad St, Shiraz',
    persianAddress: 'شیراز، خیابان عفیف‌آباد، مجتمع تجاری ستاره، طبقه اول، پلاک ۸',
    featuredProductIds: ['p17', 'p18']
  },
  {
    id: 's10',
    name: 'Natural Fiber Co.',
    persianName: 'کتان و الیاف طبیعی باران',
    city: 'Karaj',
    persianCity: 'کرج',
    rating: 4.6,
    reviewCount: 30,
    specialization: 'Eco-friendly Linen & Organic Cotton',
    persianSpecialization: 'پیراهن‌ها و پارچه‌های ۱۰۰٪ کتان و الیاف طبیعی',
    bannerColor: 'from-emerald-800 to-green-950',
    description: 'Dedicated to earth-friendly unbleached textiles, pure linen bolts, and ready-to-wear natural organic garments.',
    persianDescription: 'عرضه پارچه‌های لنین خام، الیاف صددرصد پنبه ارگانیک و لباس‌های راحتی دوستدار محیط‌زیست بدون حساسیت پوستی.',
    phone: '026-32504060',
    address: 'Jahangir Rd, Karaj',
    persianAddress: 'کرج، جهانشهر، میدان هلال احمر، پاساژ هلال، طبقه همکف',
    featuredProductIds: ['p19', 'p20']
  },
  {
    id: 's11',
    name: 'Baloch Needlework',
    persianName: 'سوزن‌دوزی و زری‌دوزی بلوچ',
    city: 'Zahedan',
    persianCity: 'زاهدان',
    rating: 5.0,
    reviewCount: 45,
    specialization: 'Handmade Needlework & Ethnic Garments',
    persianSpecialization: 'سوزن‌دوزی اصیل، پلیوار و نوارهای حاشیه‌ای دست‌دوز',
    bannerColor: 'from-orange-800 to-yellow-950',
    description: 'Museum-quality hand-stitched Baloch embroidery, premium traditional trims, and beautiful ethnic materials directly supporting Balochi women.',
    persianDescription: 'هنر بی‌مثال سوزن‌دوزی سنتی، پلیواربافی و تکه‌دوزی‌های اصیل بلوچی مستقیم از کارگاه‌های روستایی زاهدان و ایرانشهر.',
    phone: '054-33221040',
    address: 'Moallem St, Zahedan',
    persianAddress: 'زاهدان، خیابان معلم، روبروی دانشگاه، بازارچه صنایع دستی، غرفه ۶',
    featuredProductIds: ['p21', 'p22']
  },
  {
    id: 's12',
    name: 'Pars Fabric World',
    persianName: 'پارچه سرای پارس تبریز',
    city: 'Tabriz',
    persianCity: 'تبریز',
    rating: 4.3,
    reviewCount: 14,
    specialization: 'General Sewing Materials & Crepe',
    persianSpecialization: 'پارچه‌های روزمره، مانتویی، کرپ و آستری',
    bannerColor: 'from-blue-800 to-indigo-900',
    description: 'High quality daily textiles, multi-color crepe fabrics, teteron, and lining materials at highly wholesale competitive rates.',
    persianDescription: 'بزرگترین فروشگاه پارچه‌های روزمره و خیاطی، تترون مرغوب، انواع کرپ مازراتی و کشی، و آستری فاستونی زیر قیمت بازار.',
    phone: '041-35234567',
    address: 'Shariati Rd, Tabriz',
    persianAddress: 'تبریز، خیابان شریعتی جنوبی، چهارراه والمان، جنب مسجد پارس',
    featuredProductIds: ['p23', 'p24']
  },
  {
    id: 's13',
    name: 'Alborz Denim',
    persianName: 'جین و کتان البرز',
    city: 'Qazvin',
    persianCity: 'قزوین',
    rating: 4.5,
    reviewCount: 18,
    specialization: 'Raw Denim & Sturdy Canvas Rolls',
    persianSpecialization: 'پارچه کتان لی کشی، برزنت لباس و ملزومات کار',
    bannerColor: 'from-slate-700 to-sky-950',
    description: 'Thick heavy-duty twill, robust canvas for backpacks, and stretchable industrial denim rolls for apparel designers.',
    persianDescription: 'ارائه طاقه‌های جین ۱۲ و ۱۴ اونس، کتان‌های ارتشی، برزنت نرم پنبه‌ای برای کیف و ملزومات کار ضخیم صنعتی.',
    phone: '028-33359010',
    address: 'Valiasr Ave, Qazvin',
    persianAddress: 'قزوین، خیابان ولیعصر، نرسیده به چهارراه ولیعصر، مجتمع پارچه اطلس',
    featuredProductIds: ['p25', 'p26']
  },
  {
    id: 's14',
    name: 'Velvet Kashan',
    persianName: 'مخمل و زری‌بفت کاشان',
    city: 'Kashan',
    persianCity: 'کاشان',
    rating: 4.9,
    reviewCount: 29,
    specialization: 'Premium Velvet & Handloom Brocade',
    persianSpecialization: 'مخمل اعلای کاشان و زری‌بافی باشکوه سنتی',
    bannerColor: 'from-amber-800 to-rose-950',
    description: 'Exquisite velvet woven with traditional floral patterns and majestic golden brocades with historical integrity.',
    persianDescription: 'ارائه مخمل فوق‌العاده نرم برجسته، پارچه‌های اطلس زری‌بفت و زربفت ابریشمی با اصالت قاجاری کارگاه‌های ممتاز کاشان.',
    phone: '031-55441220',
    address: 'Mohtasham Kashani St, Kashan',
    persianAddress: 'کاشان، خیابان محتشم، سرای امین‌الدوله، غرفه مخمل‌بافی',
    featuredProductIds: ['p27', 'p28']
  },
  {
    id: 's15',
    name: 'Negin Haberdashery',
    persianName: 'خرازی و یراق‌سرای نگین',
    city: 'Tehran',
    persianCity: 'تهران',
    rating: 4.6,
    reviewCount: 37,
    specialization: 'Premium Buttons, Threads & Notions',
    persianSpecialization: 'دکمه‌های فانتزی، قرقره ابریشمی و ابزار خیاطی لوکس',
    bannerColor: 'from-amber-600 to-stone-900',
    description: 'Every tailoring requirement under one roof: designer shell buttons, luxury embroidery threads, scissors, and lace trim rolls.',
    persianDescription: 'کامل‌ترین مجموعه ملزومات خیاطی، دکمه‌های طبیعی صدفی و چوبی، زیپ‌های فلزی باکیفیت و نخ‌های مرغوب دمسه فرانسه.',
    phone: '021-33908877',
    address: 'Bazaar-e-Ahangaran, Haberdashery Line, Tehran',
    persianAddress: 'تهران، بازار آهنگران، کوچه مروی، خرازی بزرگ نگین',
    featuredProductIds: ['p29', 'p30']
  },
  {
    id: 's16',
    name: 'Saba Iranian Wear',
    persianName: 'رخت و جامه ایرانی صبا',
    city: 'Isfahan',
    persianCity: 'اصفهان',
    rating: 4.7,
    reviewCount: 21,
    specialization: 'Authentic Costumes & Traditional Skirts',
    persianSpecialization: 'لباس‌های اصیل ایرانی، جلیقه‌های زردوزی و دامن‌های پرچین',
    bannerColor: 'from-rose-800 to-amber-950',
    description: 'Reimagining classic Persian attire for modern closets: pleated skirts, majestic long-coats, and traditional vests.',
    persianDescription: 'تلفیقی هنرمندانه از رخت سنتی ایرانی و برش‌های امروزی؛ دامن‌های پرچین رنگارنگ و جلیقه‌های سوزن‌دوزی مردانه و زنانه.',
    phone: '031-36689090',
    address: 'Chahar Bagh Ave, Isfahan',
    persianAddress: 'اصفهان، خیابان چهارباغ عباسی، مجتمع پارک، طبقه همکف، پلاک ۱۴',
    featuredProductIds: ['p31', 'p32']
  },
  {
    id: 's17',
    name: 'Apadana Suiting',
    persianName: 'کت و شلوار و پارچه فاستونی آپادانا',
    city: 'Tehran',
    persianCity: 'تهران',
    rating: 4.8,
    reviewCount: 40,
    specialization: 'Premium Woolen Suiting & Italian Tweed',
    persianSpecialization: 'پارچه فاستونی پشمی، گاباردین و توئید انگلیسی',
    bannerColor: 'from-slate-800 to-indigo-950',
    description: 'Exquisite menswear suiting fabrics, 100% fine merino wool bolts, tweed, and herringbone lining textiles.',
    persianDescription: 'تأمین برترین فاستونی‌های پشمی جامعه و مطهری، پارچه‌های کت تک توئید بریتانیایی و فاستونی‌های عالی ایتالیایی.',
    phone: '021-88899010',
    address: 'Valiasr Blvd, Above Fatima Square, Tehran',
    persianAddress: 'تهران، خیابان ولیعصر، بالاتر از میدان فاطمی، جنب کوچه صدر',
    featuredProductIds: ['p33', 'p34']
  },
  {
    id: 's18',
    name: 'Bond Street Apparel',
    persianName: 'پوشاک بوند استریت تبریز',
    city: 'Tabriz',
    persianCity: 'تبریز',
    rating: 4.7,
    reviewCount: 33,
    specialization: 'Tailored Men Coats & Modern Suits',
    persianSpecialization: 'پالتوهای پشمی آماده، کت‌های تک اسپورت و شلوار اداری',
    bannerColor: 'from-blue-900 to-stone-950',
    description: 'Expertly structured ready-to-wear coats, wool blend jackets, and modern workwear manufactured in Tabriz workshops.',
    persianDescription: 'پالتوهای پشمی مردانه کلاسیک، کت‌های تک چهارخانه شیک و پوشاک رسمی دوخته‌شده با برترین فاستونی‌ها در کارخانجات تبریز.',
    phone: '041-33334455',
    address: 'Elgoli Blvd, Tabriz',
    persianAddress: 'تبریز، بلوار ائل‌گلی، ساختمان بوند استریت، طبقه اول',
    featuredProductIds: ['p35', 'p36']
  },
  {
    id: 's19',
    name: 'Hirkan Spinning Co.',
    persianName: 'نخ‌ریسی و کاموابافی هیرکان',
    city: 'Gorgan',
    persianCity: 'گرگان',
    rating: 4.6,
    reviewCount: 16,
    specialization: 'Organic Spun Yarn & Knitting Supplies',
    persianSpecialization: 'کلاف‌های کاموای طبیعی پشمی و نخ‌های قلاب‌بافی',
    bannerColor: 'from-emerald-900 to-amber-950',
    description: 'Cozy hand-spun sheep wool yarns, fine cotton crochets, and authentic dyes harvested from Hyrcanian forest botanicals.',
    persianDescription: 'عرضه نخ‌های دست‌ریس و طبیعی پشم بره، کلاف‌های کاموای دست‌باف زنده و الیاف نخ پنبه خالص رنگرزی شده گیاهی گرگان.',
    phone: '017-32214550',
    address: 'Nahar Khoran Rd, Gorgan',
    persianAddress: 'گرگان، بلوار ناهارخوران، نبش عدالت ۶۸، کارگاه نخ‌ریسی هیرکان',
    featuredProductIds: ['p37', 'p38']
  },
  {
    id: 's20',
    name: 'Khazar Weaving Mills',
    persianName: 'نساجی و بافندگی خزر ساری',
    city: 'Sari',
    persianCity: 'ساری',
    rating: 4.4,
    reviewCount: 20,
    specialization: 'Performance Fabrics & Waterproof Nylon',
    persianSpecialization: 'پارچه‌های ورزشی کشی، ریون و شمعی کاپشنی ضدآب',
    bannerColor: 'from-sky-800 to-indigo-950',
    description: 'Cutting-edge flexible sports materials, lightweight waterproof lining fabrics, and heavy-duty activewear materials.',
    persianDescription: 'نساجی تخصصی پارچه‌های ورزشی ریون اعلا، پارچه ضدآب بارانی و شمعی بادگیر مناسب کاپشن و کیسه خواب.',
    phone: '011-33245610',
    address: 'Basij Square, Sari',
    persianAddress: 'ساری، میدان بسیج، ابتدای جاده قائمشهر، مجتمع نساجی خزر',
    featuredProductIds: ['p39', 'p40']
  }
];

const products: Product[] = [
  // s1 Termeh Razavi
  {
    id: 'p1',
    name: 'Shah Abbasi Premium Termeh',
    persianName: 'پارچه ترمه ابریشمی طرح شاه‌عباسی',
    storeId: 's1',
    storeName: 'Termeh Razavi',
    price: 450000,
    category: 'traditional',
    description: 'Stunning 5-color handloomed silk Termeh featuring gold and silver threading. Perfect for luxurious traditional layouts and festive tables.',
    persianDescription: 'ترمه ابریشمی بسیار نفیس ۵ رنگ دست‌بافت با پودهای زربفت و سیم‌بفت طرح شاه‌عباسی یزد، مناسب رومیزی‌های لوکس و جهیزیه.',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
    stock: 25,
    unit: 'متر',
    material: 'Silk Blend',
    color: 'Red Gold'
  },
  {
    id: 'p2',
    name: 'Traditional Termeh Tablecloth Bundle',
    persianName: 'رومیزی بقچه ترمه یزد ابریشم ۱۰۰×۱۰۰',
    storeId: 's1',
    storeName: 'Termeh Razavi',
    price: 1200000,
    category: 'traditional',
    description: 'An elegant square Termeh cover with hand-stitched silk fringes and premium lining.',
    persianDescription: 'رومیزی بقچه مربع ترمه ابریشمی حاشیه‌دوزی شده با مغزی ابریشم و آسترکشی بسیار تمیز مخمل سنتی سرخ.',
    imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    stock: 12,
    unit: 'قواره',
    material: 'Pure Silk Yarn',
    color: 'Crimson Burgundy'
  },
  // s2 Karbas Esfahan
  {
    id: 'p3',
    name: 'Hand-Stamped Ghalamkar Pattern Fabric',
    persianName: 'پارچه متقال قلمکار پنبه‌ای دست‌ساز',
    storeId: 's2',
    storeName: 'Karbas Esfahan',
    price: 180000,
    category: 'fabric',
    description: 'Premium organic cotton textile hand-stamped with traditional Esfahan arabesque blocks using walnut husk and pomegranate shell dyes.',
    persianDescription: 'پارچه متقال پنبه‌ای خالص کار‌شده با نقوش اسلیمی و اسب‌های مینیاتور اصفهان، رنگرزی‌شده کاملاً طبیعی گیاهی.',
    imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
    stock: 60,
    unit: 'متر',
    material: '100% Organic Cotton',
    color: 'Indigo Cream'
  },
  {
    id: 'p4',
    name: 'Premium Esfahan Floral Ghalamkar Spread',
    persianName: 'سفره قلمکار سنتی طرح ترنج ۱۲۰ سانتی‌متری',
    storeId: 's2',
    storeName: 'Karbas Esfahan',
    price: 250000,
    category: 'traditional',
    description: 'Finished round tablecloth printed by woodblock with gorgeous center medallion.',
    persianDescription: 'سفره قلمکار گرد طرح ترنج اعلای اصفهان با لبه دالبری دست‌دوز، کاملاً قابل شستشو بدون تغییر رنگ.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    stock: 35,
    unit: 'عدد',
    material: 'Canvas Cotton',
    color: 'Teal Blue Beige'
  },
  // s3 Diba Gilan
  {
    id: 'p5',
    name: 'Raw Natural Silk Fabric',
    persianName: 'پارچه ابریشم طبیعی خام درجه یک گیلان',
    storeId: 's3',
    storeName: 'Diba Gilan',
    price: 850000,
    category: 'fabric',
    description: 'Pure, organic mulberry silk directly harvested from the silk farm coccoons in Lahijan. Lustrous texture and elegant weight.',
    persianDescription: 'پارچه ابریشمی حاصل از نوغان ارگانیک لاهیجان، با بافت نامنظم جذاب ابریشم خام و درخشش فوق‌العاده زیبا در نور.',
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    stock: 15,
    unit: 'متر',
    material: '100% Mulberry Silk',
    color: 'Ivory White'
  },
  {
    id: 'p6',
    name: 'Artisan Northern Chador Shab Silk',
    persianName: 'پارچه چادرشب دست‌بافت ابریشمی قاسم‌آباد',
    storeId: 's3',
    storeName: 'Diba Gilan',
    price: 950000,
    category: 'traditional',
    description: 'Authentic silk and cotton colorful hand-loomed cloth featuring geometric Northern symbols of mountains and birds.',
    persianDescription: 'چادرشب اصیل قاسم‌آباد بافته‌شده با دستگاه چادرشب‌بافی چوبین، سرشار از نقوش زیگزاگ و شانه، با تار ابریشم طلایی.',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
    stock: 8,
    unit: 'قواره',
    material: 'Silk and Cotton Mix',
    color: 'Multi-color Orange-Red'
  },
  // s4 Saten Tehran
  {
    id: 'p7',
    name: 'Ultra Glossy French Satin Fabric',
    persianName: 'پارچه ساتن فرانسه براق درجه یک مجلسی',
    storeId: 's4',
    storeName: 'Saten Tehran',
    price: 220000,
    category: 'fabric',
    description: 'Heavy weight satin imported from France, featuring a high gloss finish on one side and structured texture perfect for gowns.',
    persianDescription: 'ساتن فرانسه ضخیم با گرم بالا، ریزش بسیار عالی و درخشش کریستالی لاکچری، مناسب دوخت لباس عروس و ماکسی شب.',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    stock: 100,
    unit: 'متر',
    material: 'French Polyester Silk',
    color: 'Royal Emerald Green'
  },
  {
    id: 'p8',
    name: 'Soft Royal Velvet Fabric',
    persianName: 'پارچه مخمل فرانسه ابریشمی لطیف',
    storeId: 's4',
    storeName: 'Saten Tehran',
    price: 380000,
    category: 'fabric',
    description: 'Exceptional deep-black French velvet fabric with elastic comfort and premium luxury touch.',
    persianDescription: 'پارچه مخمل کوبیده وارداتی فرانسوی با کشسانی کم‌نظیر و بافت بسیار متراکم مشکی عمیق بدون پرزدهی.',
    imageUrl: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80',
    stock: 50,
    unit: 'متر',
    material: 'Rayon-Silk Blend Velvet',
    color: 'Jet Black'
  },
  // s5 Katan Zagros
  {
    id: 'p9',
    name: '14oz Premium Denim Indigo',
    persianName: 'پارچه کتان جین ضخیم ۱۴ اونس ژاپنی',
    storeId: 's5',
    storeName: 'Katan Zagros',
    price: 190000,
    category: 'fabric',
    description: 'Authentic 14oz raw denim fabric perfect for creating custom jeans, heavy jackets, and long-lasting workwear.',
    persianDescription: 'کتان جین بسیار محکم و ضخیم ۱۴ اونس خام، بدون رنگ‌رفتن زودهنگام، عالی برای دوخت کاپشن، جین مردانه و شلوار کارگاهی.',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    stock: 120,
    unit: 'متر',
    material: '100% Cotton Denim',
    color: 'Dark Indigo Blue'
  },
  {
    id: 'p10',
    name: 'Stretch Twill Cotton Fabric',
    persianName: 'پارچه کتان کجراه پنبه‌ای کشی',
    storeId: 's5',
    storeName: 'Katan Zagros',
    price: 130000,
    category: 'fabric',
    description: 'Elastic cotton twill with high breathability, suitable for office trousers, skirts, and uniform tailoring.',
    persianDescription: 'کتان کجراه پنبه‌ای لطیف با ۳٪ الیاف اسپندکس جهت کشسانی مطلوب، مناسب انواع کت خلبانی، شلوار کتان و فرم اداری.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    stock: 80,
    unit: 'متر',
    material: 'Cotton Lycra Blend',
    color: 'Desert Sand Khaki'
  },
  // s6 Pashmineh Tabriz
  {
    id: 'p11',
    name: 'Thick Woolen Footer Coat Fabric',
    persianName: 'پارچه پشمی فوتر پالتویی گرم بالا تبریز',
    storeId: 's6',
    storeName: 'Pashmineh Tabriz',
    price: 480000,
    category: 'fabric',
    description: 'Superb heavy-weight wool footer fabric crafted in Azarshahr Tabriz. Unparalleled insulation and elegant fall for custom coats.',
    persianDescription: 'پارچه پالتویی فوتر کوبیده بسیار گرم و نرم، با درصد بالای پشم گوسفندی تبریز، مناسب شیک‌ترین پالتوهای زمستانه زنانه و مردانه.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    stock: 45,
    unit: 'متر',
    material: '80% Fine Wool, 20% Polyester',
    color: 'Camel Brown'
  },
  {
    id: 'p12',
    name: 'Plaid Cashmere Winter Fabric',
    persianName: 'پارچه پشمی کشمیر چهارخانه لطیف',
    storeId: 's6',
    storeName: 'Pashmineh Tabriz',
    price: 320000,
    category: 'fabric',
    description: 'Delicate and warm cashmere touch plaid material ideal for luxury ponchos, scarves, and warm flannel-like shirts.',
    persianDescription: 'پارچه کشمیر گرم و لطیف با طرح چهارخانه ترند، ایده آل برای دوخت شکت، پانچو، شنل و شال‌گردن‌های پاییزی دنج.',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
    stock: 65,
    unit: 'متر',
    material: 'Cashmere-Poly Blend',
    color: 'Grey-Burgundy Plaid'
  },
  // s7 Baharak Gallery
  {
    id: 'p13',
    name: 'Saba Cotton Summer Manteau',
    persianName: 'مانتو کتان خنک بهاره مدل صبا دکمه‌ای',
    storeId: 's7',
    storeName: 'Baharak Gallery',
    price: 780000,
    category: 'apparel',
    description: 'Ready-to-wear lightweight pure cotton manteau, featuring hand-carved coconut buttons and a relaxed artistic fit.',
    persianDescription: 'مانتوی آماده و بسیار سبک دوخته‌شده با کتان خنک ضدحساسیت بهاره، طرح دکمه‌های نارگیلی پهلو و برش آزاد و هنری.',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    stock: 18,
    unit: 'عدد',
    material: 'Organic Cotton',
    color: 'Ochre Yellow'
  },
  {
    id: 'p14',
    name: 'Natural Fiber Spring Crinkled Scarf',
    persianName: 'شال نخی بهاره الیاف طبیعی چروک',
    storeId: 's7',
    storeName: 'Baharak Gallery',
    price: 160000,
    category: 'apparel',
    description: 'Breathable, relaxed crinkle scarf made with natural dyes. Lightweight and stylish.',
    persianDescription: 'شال نخی چروک خنک ساخته شده با الیاف نخی ارگانیک و لبه ریش‌دار دست‌ساز، بسیار سبک و شیک در رنگ‌های جذاب پاستلی.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    stock: 40,
    unit: 'عدد',
    material: 'Cotton',
    color: 'Mint Green'
  },
  // s8 Silk Atelier
  {
    id: 'p15',
    name: 'Hand-Stitched Painted Silk Scarf',
    persianName: 'روسری ابریشم خالص دست‌دوز نقاشی دست',
    storeId: 's8',
    storeName: 'Silk Atelier',
    price: 420000,
    category: 'apparel',
    description: 'Unique custom hand-painted silk scarf featuring Persian calligraphic curves and beautiful flower motifs. Hand-rolled edges.',
    persianDescription: 'روسری ۱۰۰٪ ابریشم طبیعی قواره ۱۲۰، نقاشی‌شده تک با دست با نقوش مینیاتور و تذهیب، با لبه‌دوزی دست‌دوز لول‌شده اعلا.',
    imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80',
    stock: 10,
    unit: 'عدد',
    material: 'Pure Silk',
    color: 'Turquoise Ivory'
  },
  {
    id: 'p16',
    name: 'Wild Raw Silk Shawl',
    persianName: 'شال ابریشم وحشی مجلسی ضخیم',
    storeId: 's8',
    storeName: 'Silk Atelier',
    price: 480000,
    category: 'apparel',
    description: 'Luxurious heavy silk road shawl with a unique raw texturized weave.',
    persianDescription: 'شال ابریشم وحشی با بافت کج‌راه ضخیم و با وقار، مناسب مهمانی‌ها با جلوه طلایی مات در نور روز.',
    imageUrl: 'https://images.unsplash.com/photo-1544030109-47bb65c47e4a?auto=format&fit=crop&w=600&q=80',
    stock: 15,
    unit: 'عدد',
    material: 'Tussar Wild Silk',
    color: 'Antique Bronze'
  },
  // s9 Harir Shiraz
  {
    id: 'p17',
    name: 'Crystal Chiffon Silk Fabric',
    persianName: 'پارچه حریر کریستال مجلسی شیشه‌ای',
    storeId: 's9',
    storeName: 'Harir Shiraz',
    price: 140000,
    category: 'fabric',
    description: 'Ultra-thin, elegant crystal chiffon with a high sheen. Best suited for sleeve linings, overlays, and flowing bridal accessories.',
    persianDescription: 'حریر بسیار لطیف کریستالی با ریزش رویایی و براق، ایده آل برای رویه مانتو، شال حریر عروس و پرده‌های حاشیه لوکس.',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80',
    stock: 150,
    unit: 'متر',
    material: 'Chiffon Polyester',
    color: 'Lavender Tint'
  },
  {
    id: 'p18',
    name: 'Embossed Patterned Organza',
    persianName: 'پارچه ارگانزا طرح‌دار برجسته آهاردار',
    storeId: 's9',
    storeName: 'Harir Shiraz',
    price: 165000,
    category: 'fabric',
    description: 'Stiff, textured organza with elegant floral embroidery patterns for structural skirts and gowns.',
    persianDescription: 'ارگانزای نیمه شفاف آهاردار با گلدوزی‌های ظریف گل مریم برجسته، عالی برای پف دامن و آستین‌های فانتزی مجلسی.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    stock: 90,
    unit: 'متر',
    material: 'Organza Nylon-Silk',
    color: 'Blush Pink'
  },
  // s10 Natural Fiber Co.
  {
    id: 'p19',
    name: 'Premium Slub Linen Natural Fabric',
    persianName: 'پارچه لنین الیاف طبیعی اسلپ درجه یک',
    storeId: 's10',
    storeName: 'Natural Fiber Co.',
    price: 195000,
    category: 'fabric',
    description: 'Lightweight and highly breathable linen with premium slub textures. Perfect for cool trousers and summer blouses.',
    persianDescription: 'لنین صددرصد پنبه بدون مواد پلاستیکی با بافت راه‌راه افقی اسلپ بسیار شیک، مناسب استایل‌های تابستانه کژوال.',
    imageUrl: 'https://images.unsplash.com/photo-1545007805-a44ee834a8be?auto=format&fit=crop&w=600&q=80',
    stock: 110,
    unit: 'متر',
    material: '100% Slub Linen',
    color: 'Off-White Oatmeal'
  },
  {
    id: 'p20',
    name: 'Men Eco-Friendly Organic Shirt',
    persianName: 'پیراهن مردانه الیاف طبیعی پنبه‌ای باران',
    storeId: 's10',
    storeName: 'Natural Fiber Co.',
    price: 490000,
    category: 'apparel',
    description: 'Pure pre-shrunk organic cotton shirt with comfortable loose tailoring and wooden collar buttons.',
    persianDescription: 'پیراهن دکمه‌دار مردانه الیاف طبیعی، شست‌وشو رفته بدون آبرفت، با یقه دیپلمات و دکمه‌های چوب گردو.',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    stock: 22,
    unit: 'عدد',
    material: 'Organic Cotton Flannel',
    color: 'Ocean Indigo'
  },
  // s11 Baloch Needlework
  {
    id: 'p21',
    name: 'Stunning Polivar Hand-Embroidered Fabric',
    persianName: 'پارچه سوزن‌دوزی و پلیوار دست‌بافت بلوچی زاهدان',
    storeId: 's11',
    storeName: 'Baloch Needlework',
    price: 1800000,
    category: 'traditional',
    description: 'Extremely detailed ethnic panel completely hand-embroidered by local artisan women in Balochistan. Heavy colorful silk geometric threadings.',
    persianDescription: 'یک قطعه قواره پنل سوزندوزی اصیل دست‌دوز سیستان با نقوش هندسی بی‌نظیر پلیواربافی گران‌بها و آینه‌دوزی ظریف.',
    imageUrl: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=600&q=80',
    stock: 4,
    unit: 'قواره',
    material: 'Silk Thread on Heavy Cotton Canvas',
    color: 'Vibrant Crimson Multi'
  },
  {
    id: 'p22',
    name: 'Traditional Baloch Border Trim',
    persianName: 'نوار سوزن‌دوزی سنتی عریض متری',
    storeId: 's11',
    storeName: 'Baloch Needlework',
    price: 75000,
    category: 'notions',
    description: '4cm wide traditional Balochi embroidered trim ribbon for embellishing sleeve ends and robe collars.',
    persianDescription: 'نوار سوزندوزی عریض ۴ سانتی متری جهت تزئین دم‌آستین، یقه مانتو و حاشیه شال‌های طراحان مد ایرانی.',
    imageUrl: 'https://images.unsplash.com/photo-1544030109-47bb65c47e4a?auto=format&fit=crop&w=600&q=80',
    stock: 200,
    unit: 'متر',
    material: 'Cotton Silk Thread',
    color: 'Red Gold Black'
  },
  // s12 Pars Fabric World
  {
    id: 'p23',
    name: 'Tergal All-Season Dress Fabric',
    persianName: 'پارچه ترگال رنگی درجه یک مانتویی',
    storeId: 's12',
    storeName: 'Pars Fabric World',
    price: 95000,
    category: 'fabric',
    description: 'Premium Tergal fabric with highly stable dye and zero pilling. Ideal for uniforms, coats, and durable apparel.',
    persianDescription: 'پارچه ترگال فدک ضخیم، با تثبیت رنگ عالی در شستشوی مداوم، بدون چروک‌پذیری، مناسب دوخت روپوش مدارس و لباس کار.',
    imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
    stock: 300,
    unit: 'متر',
    material: 'Polyester Viscose Tergal',
    color: 'Navy Blue'
  },
  {
    id: 'p24',
    name: 'Premium Crepe Maserati Stretch',
    persianName: 'پارچه کرپ کش مازراتی مشکی درجه یک',
    storeId: 's12',
    storeName: 'Pars Fabric World',
    price: 180000,
    category: 'fabric',
    description: 'Smooth luxury crepe fabric with comfortable stretch. Great for skirts and formal slacks.',
    persianDescription: 'پارچه کرپ مازراتی ترک با گرم بالا، ریزش بسیار شیک و سنگین و کشسانی دوطرفه، مناسب دوخت کت شلوار زنانه مجلسی.',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    stock: 140,
    unit: 'متر',
    material: 'Polyester Spandex Crepe',
    color: 'Charcoal Black'
  },
  // s13 Alborz Denim
  {
    id: 'p25',
    name: 'Raw Stretch Lycra Denim',
    persianName: 'پارچه کتان جین کشی سرمه‌ای تیره',
    storeId: 's13',
    storeName: 'Alborz Denim',
    price: 175000,
    category: 'fabric',
    description: 'Lycra denim fabric with excellent recovery and Indigo dye. Perfect for tailor fit fashion jeans.',
    persianDescription: 'کتان جین لی کشی نرم، مناسب شلوارهای جذب اندامی زنانه و مردانه با بازگشت کش عالی پس از چندین بار استفاده.',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    stock: 150,
    unit: 'متر',
    material: '97% Cotton 3% Lycra Denim',
    color: 'Midnight Indigo'
  },
  {
    id: 'p26',
    name: 'Heavy-Duty 100% Cotton Canvas',
    persianName: 'پارچه برزنت کتان ضخیم کیف و بارانی',
    storeId: 's13',
    storeName: 'Alborz Denim',
    price: 210000,
    category: 'fabric',
    description: 'Water-resistant heavy cotton canvas for sewing durable backpacks, bags, and outdoor jackets.',
    persianDescription: 'برزنت کتان صددرصد پنبه‌ای با روکش موم نیمه ضدآب، فوق العاده مقاوم برای کیف، کوله پشتی و پالتوهای هودی اسپرت.',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
    stock: 75,
    unit: 'متر',
    material: 'Waxed Cotton Canvas',
    color: 'Army Olive Green'
  },
  // s14 Velvet Kashan
  {
    id: 'p27',
    name: 'Royal Suede Velvet Fabric',
    persianName: 'پارچه مخمل سوئیت گرم بالا درجه یک',
    storeId: 's14',
    storeName: 'Velvet Kashan',
    price: 240000,
    category: 'fabric',
    description: 'Thick suede-finished velvet with a soft touch. Perfect for luxurious fall coats and upholstery details.',
    persianDescription: 'پارچه سوئیت مخمل غواصی ۴۸۰ گرمی، ریزش سنگین عالی، بسیار لطیف و گرم، بدون ساییدگی مناسب پالتو و کت زمستانی.',
    imageUrl: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80',
    stock: 80,
    unit: 'متر',
    material: 'Micro Suede Velvet',
    color: 'Mustard Golden Brown'
  },
  {
    id: 'p28',
    name: 'Gold Traditional Velvet Brocade',
    persianName: 'پارچه مخمل زرکوب سنتی کاشان',
    storeId: 's14',
    storeName: 'Velvet Kashan',
    price: 650000,
    category: 'traditional',
    description: 'Exquisite heavy royal velvet featuring intricate woven gold thread floral patterns of Persia.',
    persianDescription: 'مخمل مجلل زرکوب کاشان با گلهای برجسته زری‌بافی سنتی، نقوش اسلیمی زرین مناسب البسه شاهانه ایرانی و دکوراسیون.',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
    stock: 20,
    unit: 'متر',
    material: 'Velvet Silk with Lurex',
    color: 'Teal Gold'
  },
  // s15 Negin Haberdashery
  {
    id: 'p29',
    name: 'Natural Handmade Shell Buttons Pack',
    persianName: 'دکمه صدف طبیعی دست‌ساز (بسته ۱۰ عددی)',
    storeId: 's15',
    storeName: 'Negin Haberdashery',
    price: 120000,
    category: 'notions',
    description: 'Pack of 10 handcrafted genuine sea shell buttons with beautiful iridescent rainbow reflections.',
    persianDescription: 'بسته ۱۰ عددی دکمه تراشیده شده از صدف مروارید طبیعی خلیج فارس، با بازتاب رنگین‌کمانی خیره‌کننده.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    stock: 150,
    unit: 'بسته',
    material: 'Natural Sea Shell',
    color: 'Iridescent Pearl'
  },
  {
    id: 'p30',
    name: 'Turkish Premium Silk Thread Spool',
    persianName: 'قرقره نخ ابریشم ترک یوزبای ۱۰۰۰ متری',
    storeId: 's15',
    storeName: 'Negin Haberdashery',
    price: 35000,
    category: 'notions',
    description: 'Extremely high strength silk thread spool for premium tailoring and embroidery details.',
    persianDescription: 'قرقره نخ ابریشمی ممتاز وارداتی ترکیه با تاب عالی و درخشان، بسیار مقاوم در مقابل کشش مخصوص دوخت‌های تزئینی.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    stock: 300,
    unit: 'عدد',
    material: 'Turkish Spun Silk',
    color: 'Golden Honey'
  },
  // s16 Saba Iranian Wear
  {
    id: 'p31',
    name: 'Men Hand-Embroidered Traditional Vest',
    persianName: 'جلیقه سوزن‌دوزی سنتی مردانه طرح صبا',
    storeId: 's16',
    storeName: 'Saba Iranian Wear',
    price: 580000,
    category: 'apparel',
    description: 'Exquisite tailored mens vest with handloom Baloch trims and traditional front buttons. Perfect for styling over white linen shirts.',
    persianDescription: 'جلیقه جلو باز مردانه آستردار با قواره کلاسیک ایرانی، کار شده با نوارهای گران‌بهای سوزن‌دوزی سنتی شاه‌عباسی سرخ.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    stock: 14,
    unit: 'عدد',
    material: 'Canvas with Silk Trims',
    color: 'Teal Crimson'
  },
  {
    id: 'p32',
    name: 'Traditional Pleated Atlas Skirt',
    persianName: 'دامن پرچین بلند سنتی اطلس رنگین',
    storeId: 's16',
    storeName: 'Saba Iranian Wear',
    price: 620000,
    category: 'apparel',
    description: 'Flowy pleated skirt inspired by northern Gilaki models, crafted in shiny satin and bordered with colourful ribbon stripes.',
    persianDescription: 'دامن پرچین نوستالژیک گیلکی بلند با توری هفت‌رنگ و روبان‌های رنگارنگ دوزی شده سنتی بر بستر ساتن اطلس درخشان.',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    stock: 12,
    unit: 'عدد',
    material: 'Satin and Ribbon Trim',
    color: 'Multicolor Rainbow'
  },
  // s17 Apadana Suiting
  {
    id: 'p33',
    name: 'Fine Merino Wool Suit Fabric',
    persianName: 'پارچه فاستونی پشم تترون مطهری سرمه‌ای',
    storeId: 's17',
    storeName: 'Apadana Suiting',
    price: 390000,
    category: 'fabric',
    description: 'High-grade merino wool blend suiting fabric. Smooth texture, crease-resistant, and premium formal appearance.',
    persianDescription: 'فاستونی مطهری (تحت لیسانس سلکا انگلستان) با ۴۵٪ پشم طبیعی مرینو و ۵۵٪ تترون، با پرستیژ عالی و ایست فوق العاده برای کت شلوار.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    stock: 80,
    unit: 'متر',
    material: '45% Wool, 55% Tetron',
    color: 'Deep Navy Blue'
  },
  {
    id: 'p34',
    name: 'English Herringbone Tweed Fabric',
    persianName: 'پارچه پشمی جناغی انگلیسی کت تک',
    storeId: 's17',
    storeName: 'Apadana Suiting',
    price: 450000,
    category: 'fabric',
    description: 'Classic rustic English Herringbone weave tweed, thick and texturized for gentleman blazers.',
    persianDescription: 'پارچه توئید پشمی ضخیم با بافت سنتی جناغی، بسیار بادوام، مناسب کت تک‌های اسپرت مردانه پاییزی استایل انگلیسی.',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
    stock: 45,
    unit: 'متر',
    material: 'Virgin Wool Tweed',
    color: 'Forest Green Oak'
  },
  // s18 Bond Street Apparel
  {
    id: 'p35',
    name: 'Classic Mens Woolen Overcoat',
    persianName: 'پالتو فوتر مردانه کلاسیک یقه انگلیسی تبریز',
    storeId: 's18',
    storeName: 'Bond Street Apparel',
    price: 1850000,
    category: 'apparel',
    description: 'Finished premium heavy woolen coat. Expertly tailored with double stitching and satin lining.',
    persianDescription: 'پالتو دوخته‌شده آماده از پشم فوتر کوبیده تبریز، آستردار ساتن ابریشمی بسیار باپرستیژ، یقه انگلیسی پهن کلاسیک.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    stock: 8,
    unit: 'عدد',
    material: 'Wool Footer with Satin Lining',
    color: 'Classic Charcoal Grey'
  },
  {
    id: 'p36',
    name: 'Plaid Tailored Autumn Blazer',
    persianName: 'کت تک اسپرت چهارخانه نیمه‌رسمی کژوال',
    storeId: 's18',
    storeName: 'Bond Street Apparel',
    price: 1450000,
    category: 'apparel',
    description: 'Expertly crafted single-breasted plaid coat with slim fit contours.',
    persianDescription: 'کت تک نیمه‌رسمی اسلیم‌فیت با چهارخانه طوسی قهوه‌ای ظریف، دارای جیب جلیقه‌ای و دو چاک پشت، بسیار خوش‌دوخت.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    stock: 11,
    unit: 'عدد',
    material: 'Tweed Plaid Woolen',
    color: 'Earth Brown Grey'
  },
  // s19 Hirkan Spinning Co.
  {
    id: 'p37',
    name: 'Hand-Spun Natural Wool Yarn Skein',
    persianName: 'کلاف کاموا پشمی طبیعی دست‌ریس هیرکان',
    storeId: 's19',
    storeName: 'Hirkan Spinning Co.',
    price: 65000,
    category: 'notions',
    description: 'Organic hand-spun yarn skein from local sheep fleece, natural plant dyed. Perfect for knitting cozy winter socks and winter shawls.',
    persianDescription: 'کلاف کاموای دست‌ریس پشم خالص بهاره بره، رنگ‌آمیزی شده سنتی با گردو و انار، بی نظیر برای بافت دستکش و شال‌گردن دنج.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    stock: 120,
    unit: 'عدد',
    material: '100% Sheep Wool',
    color: 'Natural Walnut Gold'
  },
  {
    id: 'p38',
    name: 'Organic Unbleached Cotton Crochet Thread',
    persianName: 'نخ پنبه‌ای خام قلاب‌بافی و گیوه‌بافی',
    storeId: 's19',
    storeName: 'Hirkan Spinning Co.',
    price: 48000,
    category: 'notions',
    description: 'Extremely durable pure organic cotton thread for handmade crochet crafts, dreamcatchers, and traditional shoes (Giveh).',
    persianDescription: 'دوک نخ پنبه‌ای خام ضخیم، تصفیه نشده بسیار مقاوم برای مکرومه‌بافی، قلاب‌بافی سنتی و تولید کفش گیوه محلی.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    stock: 90,
    unit: 'عدد',
    material: 'Raw Cotton Thread',
    color: 'Ecru Cream'
  },
  // s20 Khazar Weaving Mills
  {
    id: 'p39',
    name: 'Sportswear Premium Stretch Rayon',
    persianName: 'پارچه ریون کشی ورزشی ضخیم ورزشی',
    storeId: 's20',
    storeName: 'Khazar Weaving Mills',
    price: 120000,
    category: 'fabric',
    description: 'Thick elastic rayon material perfect for workout leggings, custom activewear, and stretch dresses.',
    persianDescription: 'پارچه ورزشی ریون کریستال ضخیم با کشسانی ۴ جهته عالی بدون چروک، مناسب شلوار لگ، تی‌شرت ورزشی و پوشاک تمرین.',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80',
    stock: 200,
    unit: 'متر',
    material: 'Rayon Spandex',
    color: 'Royal Steel Blue'
  },
  {
    id: 'p40',
    name: 'Waterproof Nylon Windbreaker Fabric',
    persianName: 'پارچه شمعی ضدآب کاپشنی مموری گرم بالا',
    storeId: 's20',
    storeName: 'Khazar Weaving Mills',
    price: 145000,
    category: 'fabric',
    description: 'High density waterproof nylon fabric with memory finish, ideal for winter raincoats, heavy umbrellas, and puffers.',
    persianDescription: 'پارچه بادگیر شمعی مموری ضدآب با روکش پی‌یو ضخیم جهت ممانعت از ورود باد و رطوبت، مناسب کاپشن پر و بارانی.',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
    stock: 180,
    unit: 'متر',
    material: 'Memory Waterproof Nylon',
    color: 'Neon Cyan Accent'
  }
];

let orders: Order[] = [
  {
    id: 'ord-1001',
    customerName: 'فاطمه احمدی',
    customerPhone: '09123456789',
    customerAddress: 'تهران، خیابان نیاوران، کوچه مریم، پلاک ۱۰',
    items: [
      {
        productId: 'p1',
        productName: 'Shah Abbasi Premium Termeh',
        persianName: 'پارچه ترمه ابریشمی طرح شاه‌عباسی',
        storeName: 'Termeh Razavi',
        price: 450000,
        quantity: 2
      },
      {
        productId: 'p3',
        productName: 'Hand-Stamped Ghalamkar Pattern Fabric',
        persianName: 'پارچه متقال قلمکار پنبه‌ای دست‌ساز',
        storeName: 'Karbas Esfahan',
        price: 180000,
        quantity: 3
      }
    ],
    totalAmount: 1440000,
    status: 'shipping',
    createdAt: '2026-07-20T14:30:00.000Z'
  }
];

let reviews: Review[] = [
  {
    id: 'rev1',
    storeId: 's1',
    author: 'علیرضا شمس',
    rating: 5,
    comment: 'کیفیت ترمه ابریشم این غرفه واقعا بی‌نظیر بود، کاملاً باکیفیت و با شناسنامه اصالت به دستم رسید. برای جهیزیه دخترم خرید کردم.',
    createdAt: '2026-07-18T09:00:00.000Z'
  },
  {
    id: 'rev2',
    storeId: 's1',
    author: 'سمیه عباسی',
    rating: 4,
    comment: 'رنگ‌آمیزی رومیزی‌ها بسیار سنتی و درخشان است. بسته بندی شیک بود ولی ارسال دو روز دیرتر انجام شد.',
    createdAt: '2026-07-19T11:20:00.000Z'
  },
  {
    id: 'rev3',
    storeId: 's2',
    author: 'مسعود فیاض',
    rating: 5,
    comment: 'من برای سفره قلمکار ترنج اصفهان نظر ثبت میکنم. شستشو دادیم و رنگ گیاهی آن اصلاً تکان نخورد. خسته نباشید.',
    createdAt: '2026-07-20T16:45:00.000Z'
  },
  {
    id: 'rev4',
    storeId: 's11',
    author: 'نازنین رضایی',
    rating: 5,
    comment: 'سوزن دوزی دست بلوچی فوق العاده هنرمندانه است، ارزش هر تومانی که پرداخت کردم را دارد. دست زنان بلوچ درد نکنه.',
    createdAt: '2026-07-21T02:15:00.000Z'
  }
];

// Server-side API end points
app.get('/api/stores', (req, res) => {
  res.json(stores);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const { customerName, customerPhone, customerAddress, items, totalAmount } = req.body;
  if (!customerName || !customerPhone || !customerAddress || !items || !items.length) {
    return res.status(400).json({ error: 'Please provide all required customer and cart details.' });
  }

  // Check and update stock levels
  for (const item of items) {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Not enough stock available for product "${product.persianName}". Available stock is ${product.stock}.` });
      }
      product.stock -= item.quantity;
    }
  }

  const newOrder: Order = {
    id: `ord-${Date.now().toString().slice(-4)}`,
    customerName,
    customerPhone,
    customerAddress,
    items,
    totalAmount,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  orders.unshift(newOrder);
  res.status(201).json({ success: true, order: newOrder });
});

app.get('/api/reviews/:storeId', (req, res) => {
  const { storeId } = req.params;
  const storeReviews = reviews.filter(r => r.storeId === storeId);
  res.json(storeReviews);
});

app.post('/api/reviews/:storeId', (req, res) => {
  const { storeId } = req.params;
  const { author, rating, comment } = req.body;
  if (!author || !rating || !comment) {
    return res.status(400).json({ error: 'Author name, rating (1-5) and comment are required.' });
  }

  const newReview: Review = {
    id: `rev-${Date.now()}`,
    storeId,
    author,
    rating: Number(rating),
    comment,
    createdAt: new Date().toISOString()
  };

  reviews.push(newReview);

  // Update store review counts and averages
  const store = stores.find(s => s.id === storeId);
  if (store) {
    const storeReviews = reviews.filter(r => r.storeId === storeId);
    const average = storeReviews.reduce((sum, r) => sum + r.rating, 0) / storeReviews.length;
    store.rating = Number(average.toFixed(1));
    store.reviewCount = storeReviews.length;
  }

  res.status(201).json({ success: true, review: newReview, updatedStore: store });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
    console.log('Vite development middleware integrated.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
