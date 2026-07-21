var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var stores = [
  {
    id: "s1",
    name: "Termeh Razavi",
    persianName: "\u062A\u0631\u0645\u0647 \u0631\u0636\u0648\u06CC \u06CC\u0632\u062F",
    city: "Yazd",
    persianCity: "\u06CC\u0632\u062F",
    rating: 4.9,
    reviewCount: 34,
    specialization: "Traditional Hand-woven Termeh & Silk",
    persianSpecialization: "\u062A\u0631\u0645\u0647 \u062F\u0633\u062A\u200C\u0628\u0627\u0641\u062A \u0648 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0627\u0635\u06CC\u0644",
    bannerColor: "from-amber-700 to-red-900",
    description: "Generations of master weavers presenting the finest silk Termeh, gold-threaded brocades, and luxury heritage textiles of Yazd.",
    persianDescription: "\u0646\u0633\u0644\u200C\u0647\u0627 \u0647\u0646\u0631 \u0628\u0627\u0641\u0646\u062F\u06AF\u06CC \u062F\u0631 \u062A\u0648\u0644\u06CC\u062F \u0646\u0641\u06CC\u0633\u200C\u062A\u0631\u06CC\u0646 \u062A\u0631\u0645\u0647\u200C\u0647\u0627\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC\u060C \u0632\u0631\u0628\u0641\u062A \u0648 \u0645\u0646\u0633\u0648\u062C\u0627\u062A \u0627\u0635\u06CC\u0644 \u0648 \u0633\u0646\u062A\u06CC \u06CC\u0632\u062F \u0628\u0627 \u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647 \u0647\u0646\u0631\u06CC.",
    phone: "035-36224150",
    address: "Traditional Bazaar, Passage Razavi, Yazd",
    persianAddress: "\u06CC\u0632\u062F\u060C \u0628\u0627\u0632\u0627\u0631 \u0633\u0646\u062A\u06CC\u060C \u0633\u0631\u0627\u06CC \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC\u060C \u067E\u0644\u0627\u06A9 \u06F2\u06F4",
    featuredProductIds: ["p1", "p2"]
  },
  {
    id: "s2",
    name: "Karbas Esfahan",
    persianName: "\u06A9\u0631\u0628\u0627\u0633 \u0627\u0635\u0641\u0647\u0627\u0646",
    city: "Isfahan",
    persianCity: "\u0627\u0635\u0641\u0647\u0627\u0646",
    rating: 4.8,
    reviewCount: 28,
    specialization: "Natural Linen & Block-Printed Ghalamkar",
    persianSpecialization: "\u06A9\u062A\u0627\u0646 \u0637\u0628\u06CC\u0639\u06CC \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0642\u0644\u0645\u06A9\u0627\u0631 \u0627\u0635\u0641\u0647\u0627\u0646",
    bannerColor: "from-teal-700 to-blue-900",
    description: "Preserving the art of woodblock-printed cotton fabrics (Ghalamkar) using pure organic dyes and high-quality canvas and linen.",
    persianDescription: "\u062D\u0641\u0638 \u0648 \u062A\u0631\u0648\u06CC\u062C \u0647\u0646\u0631 \u0628\u06CC\u200C\u0646\u0638\u06CC\u0631 \u0642\u0644\u0645\u06A9\u0627\u0631 \u0627\u0635\u0641\u0647\u0627\u0646 \u0628\u0627 \u0645\u0647\u0631\u0647\u0627\u06CC \u0686\u0648\u0628\u06CC \u06AF\u0644\u0627\u0628\u06CC \u0648 \u0631\u0646\u06AF\u200C\u0647\u0627\u06CC \u06A9\u0627\u0645\u0644\u0627\u064B \u06AF\u06CC\u0627\u0647\u06CC \u0628\u0631 \u0628\u0633\u062A\u0631 \u0645\u062A\u0642\u0627\u0644 \u0648 \u06A9\u062A\u0627\u0646 \u0628\u0627\u06A9\u06CC\u0641\u06CC\u062A.",
    phone: "031-32210850",
    address: "Naqsh-e Jahan Square, Bazaar, Isfahan",
    persianAddress: "\u0627\u0635\u0641\u0647\u0627\u0646\u060C \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0628\u0627\u0632\u0627\u0631 \u063A\u0631\u0628\u06CC\u060C \u067E\u0644\u0627\u06A9 \u06F1\u06F1\u06F0",
    featuredProductIds: ["p3", "p4"]
  },
  {
    id: "s3",
    name: "Diba Gilan",
    persianName: "\u062F\u06CC\u0628\u0627\u06CC \u06AF\u06CC\u0644\u0627\u0646",
    city: "Rasht",
    persianCity: "\u0631\u0634\u062A",
    rating: 4.7,
    reviewCount: 19,
    specialization: "Pure Natural Silks & Northern Textiles",
    persianSpecialization: "\u0627\u0628\u0631\u06CC\u0634\u0645 \u0637\u0628\u06CC\u0639\u06CC \u06AF\u06CC\u0644\u0627\u0646 \u0648 \u0686\u0627\u062F\u0631\u0634\u0628\u200C\u0628\u0627\u0641\u06CC \u0633\u0646\u062A\u06CC",
    bannerColor: "from-emerald-700 to-teal-900",
    description: "Premium organic silk and northern hand-loomed textiles (Chador Shab) crafted by local artisans with authentic traditions.",
    persianDescription: "\u0639\u0631\u0636\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u062F\u0631\u062C\u0647 \u06CC\u06A9 \u0646\u0648\u063A\u0627\u0646 \u0648 \u0645\u0646\u0633\u0648\u062C\u0627\u062A \u062F\u0633\u062A\u200C\u0628\u0627\u0641\u062A \u0686\u0627\u062F\u0631\u0634\u0628 \u06AF\u06CC\u0644\u0627\u0646 \u062D\u0627\u0635\u0644 \u062F\u0633\u062A\u0631\u0646\u062C \u0632\u0646\u0627\u0646 \u0647\u0646\u0631\u0645\u0646\u062F \u062E\u0637\u0647 \u0634\u0645\u0627\u0644.",
    phone: "013-33221940",
    address: "Bazaar Square, Golsar Rd, Rasht",
    persianAddress: "\u0631\u0634\u062A\u060C \u0628\u0644\u0648\u0627\u0631 \u06AF\u0644\u0633\u0627\u0631\u060C \u0646\u0628\u0634 \u062E\u06CC\u0627\u0628\u0627\u0646 \u06F1\u06F1\u06F2\u060C \u06AF\u0627\u0644\u0631\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645 \u0634\u0645\u0627\u0644",
    featuredProductIds: ["p5", "p6"]
  },
  {
    id: "s4",
    name: "Saten Tehran",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0633\u0627\u062A\u0646 \u062A\u0647\u0631\u0627\u0646",
    city: "Tehran",
    persianCity: "\u062A\u0647\u0631\u0627\u0646",
    rating: 4.6,
    reviewCount: 42,
    specialization: "Luxury Satin, Velvet, and Bridal Fabrics",
    persianSpecialization: "\u0633\u0627\u062A\u0646\u060C \u0645\u062E\u0645\u0644 \u0644\u0648\u06A9\u0633 \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0645\u062C\u0644\u0633\u06CC \u0648 \u0639\u0631\u0648\u0633",
    bannerColor: "from-purple-800 to-indigo-950",
    description: "Tehrans premier importer of luxurious French and Italian satins, soft velvets, and ornate bridal laces for high fashion.",
    persianDescription: "\u0645\u0631\u06A9\u0632 \u062A\u062E\u0635\u0635\u06CC \u0644\u0648\u06A9\u0633\u200C\u062A\u0631\u06CC\u0646 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0645\u062C\u0644\u0633\u06CC\u060C \u0633\u0627\u062A\u0646\u200C\u0647\u0627\u06CC \u0636\u062E\u06CC\u0645 \u0641\u0631\u0627\u0646\u0633\u0648\u06CC\u060C \u0645\u062E\u0645\u0644\u200C\u0647\u0627\u06CC \u0644\u0637\u06CC\u0641 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0648 \u062A\u0648\u0631\u06CC\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0634\u062F\u0647 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC.",
    phone: "021-55612345",
    address: "Grand Bazaar, Fabrics Alley, Tehran",
    persianAddress: "\u062A\u0647\u0631\u0627\u0646\u060C \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF\u060C \u0628\u0627\u0632\u0627\u0631 \u0631\u0636\u0627\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644\u060C \u067E\u0644\u0627\u06A9 \u06F4\u06F2",
    featuredProductIds: ["p7", "p8"]
  },
  {
    id: "s5",
    name: "Katan Zagros",
    persianName: "\u06A9\u062A\u0627\u0646 \u0632\u0627\u06AF\u0631\u0633",
    city: "Shiraz",
    persianCity: "\u0634\u06CC\u0631\u0627\u0632",
    rating: 4.5,
    reviewCount: 22,
    specialization: "Denim Fabrics & Heavy Cottons",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647 \u062C\u06CC\u0646\u060C \u06A9\u062A\u0627\u0646 \u0636\u062E\u06CC\u0645 \u0648 \u0645\u062E\u0645\u0644 \u06A9\u0628\u0631\u06CC\u062A\u06CC",
    bannerColor: "from-indigo-700 to-sky-950",
    description: "Durable, high-grade cotton canvas, thick denim sheets, and sturdy twill materials perfect for tailoring premium trousers and jackets.",
    persianDescription: "\u062A\u0623\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u0647 \u062A\u062E\u0635\u0635\u06CC \u0627\u0646\u0648\u0627\u0639 \u067E\u0627\u0631\u0686\u0647 \u06A9\u062A\u0627\u0646 \u06A9\u062C\u0631\u0627\u0647\u060C \u06A9\u062A\u0627\u0646 \u062C\u06CC\u0646 \u0633\u0646\u06AF\u200C\u0634\u0648\u0631\u060C \u06A9\u062A\u0627\u0646 \u0636\u062E\u06CC\u0645 \u0628\u0631\u0632\u0646\u062A\u06CC \u0648 \u0645\u062E\u0645\u0644 \u06A9\u0628\u0631\u06CC\u062A\u06CC \u0628\u0627 \u062F\u0648\u0627\u0645 \u0627\u0633\u062A\u062B\u0646\u0627\u06CC\u06CC.",
    phone: "071-32245080",
    address: "Zand Blvd, Shiraz",
    persianAddress: "\u0634\u06CC\u0631\u0627\u0632\u060C \u0628\u0644\u0648\u0627\u0631 \u0632\u0646\u062F\u060C \u067E\u0627\u0633\u0627\u0698 \u0634\u0639\u0644\u0647\u060C \u0637\u0628\u0642\u0647 \u0647\u0645\u06A9\u0641\u060C \u067E\u0644\u0627\u06A9 \u06F5",
    featuredProductIds: ["p9", "p10"]
  },
  {
    id: "s6",
    name: "Pashmineh Tabriz",
    persianName: "\u067E\u0634\u0645\u06CC\u0646\u0647 \u062A\u0628\u0631\u06CC\u0632",
    city: "Tabriz",
    persianCity: "\u062A\u0628\u0631\u06CC\u0632",
    rating: 4.9,
    reviewCount: 51,
    specialization: "Premium Winter Wool & Cashmere",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u0645\u06CC\u060C \u067E\u0627\u0644\u062A\u0648\u06CC\u06CC \u0648 \u06A9\u0634\u0645\u06CC\u0631 \u0639\u0627\u0644\u06CC",
    bannerColor: "from-amber-900 to-stone-900",
    description: "The warmest cashmere, woolen footer, and traditional thick winter outerwear textiles, milled in Azerbaijans historic factories.",
    persianDescription: "\u0627\u0631\u0627\u0626\u0647 \u0628\u0627\u06A9\u06CC\u0641\u06CC\u062A\u200C\u062A\u0631\u06CC\u0646 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u0645\u06CC \u0641\u0648\u062A\u0631 \u06A9\u0648\u0628\u06CC\u062F\u0647\u060C \u06A9\u0634\u0645\u06CC\u0631 \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u0644\u0637\u06CC\u0641 \u0648 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC\u200C\u0647\u0627\u06CC \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627\u060C \u0645\u0646\u0627\u0633\u0628 \u0641\u0635\u0648\u0644 \u0633\u0631\u062F \u0633\u0627\u0644.",
    phone: "041-35567890",
    address: "Historic Tabriz Grand Bazaar, Tabriz",
    persianAddress: "\u062A\u0628\u0631\u06CC\u0632\u060C \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF \u0633\u0631\u067E\u0648\u0634\u06CC\u062F\u0647\u060C \u062A\u06CC\u0645\u0686\u0647 \u0645\u0638\u0641\u0631\u06CC\u0647\u060C \u067E\u0644\u0627\u06A9 \u06F1\u06F8",
    featuredProductIds: ["p11", "p12"]
  },
  {
    id: "s7",
    name: "Baharak Gallery",
    persianName: "\u06AF\u0627\u0644\u0631\u06CC \u067E\u0648\u0634\u0627\u06A9 \u0628\u0647\u0627\u0631\u06A9",
    city: "Tehran",
    persianCity: "\u062A\u0647\u0631\u0627\u0646",
    rating: 4.4,
    reviewCount: 15,
    specialization: "Modern Apparel & Lightweight Cottons",
    persianSpecialization: "\u067E\u0648\u0634\u0627\u06A9 \u0645\u062F\u0631\u0646 \u0632\u0646\u0627\u0646\u0647 \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0633\u0628\u06A9 \u0628\u0647\u0627\u0631\u0647",
    bannerColor: "from-rose-700 to-pink-900",
    description: "Casual modern ready-to-wear garments alongside lovely light cotton and rayon dressmaking materials.",
    persianDescription: "\u06AF\u0627\u0644\u0631\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647 \u067E\u0648\u0634\u0627\u06A9 \u0622\u0645\u0627\u062F\u0647 \u0648 \u0646\u06CC\u0645\u0647\u200C\u0622\u0645\u0627\u062F\u0647 \u0632\u0646\u0627\u0646\u0647 \u0628\u0627 \u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0645\u062F\u0631\u0646 \u0648 \u0627\u0633\u0644\u06CC\u0645 \u0628\u0631 \u0628\u0633\u062A\u0631 \u0627\u0644\u06CC\u0627\u0641 \u062E\u0646\u06A9 \u0648 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u0628\u0647\u0627\u0631\u0647.",
    phone: "021-22008855",
    address: "Tajrish Square, Tehran",
    persianAddress: "\u062A\u0647\u0631\u0627\u0646\u060C \u062A\u062C\u0631\u06CC\u0634\u060C \u067E\u0627\u0633\u0627\u0698 \u0642\u0627\u0626\u0645\u060C \u0637\u0628\u0642\u0647 \u062F\u0648\u0645\u060C \u067E\u0644\u0627\u06A9 \u06F3\u06F0\u06F8",
    featuredProductIds: ["p13", "p14"]
  },
  {
    id: "s8",
    name: "Silk Atelier",
    persianName: "\u0622\u062A\u0644\u06CC\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0645\u0634\u0647\u062F",
    city: "Mashhad",
    persianCity: "\u0645\u0634\u0647\u062F",
    rating: 4.8,
    reviewCount: 26,
    specialization: "Designer Scarves & Silk Bolts",
    persianSpecialization: "\u0631\u0648\u0633\u0631\u06CC \u0648 \u0634\u0627\u0644 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0648 \u0642\u0648\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u062C\u0644\u0633\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645",
    bannerColor: "from-fuchsia-800 to-stone-950",
    description: "Bespoke hand-painted silk scarves, shawls, and premium raw silk yardage directly sourced from eastern silk road weavers.",
    persianDescription: "\u0637\u0631\u0627\u062D\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u0631\u0648\u0633\u0631\u06CC\u200C\u0647\u0627\u06CC \u0646\u0642\u0627\u0634\u06CC \u0634\u062F\u0647 \u062F\u0633\u062A\u200C\u062F\u0648\u0632\u060C \u0634\u0627\u0644\u200C\u0647\u0627\u06CC \u0645\u062C\u0644\u0633\u06CC \u0648 \u0642\u0648\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0646\u0641\u06CC\u0633 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645\u200C\u0628\u0627\u0641\u0627\u0646 \u0645\u0634\u0647\u062F.",
    phone: "051-38401122",
    address: "Sajad Blvd, Mashhad",
    persianAddress: "\u0645\u0634\u0647\u062F\u060C \u0628\u0644\u0648\u0627\u0631 \u0633\u062C\u0627\u062F\u060C \u0645\u0631\u06A9\u0632 \u062E\u0631\u06CC\u062F \u0627\u0645\u06CC\u0646\u060C \u067E\u0644\u0627\u06A9 \u06F4\u06F4",
    featuredProductIds: ["p15", "p16"]
  },
  {
    id: "s9",
    name: "Harir Shiraz",
    persianName: "\u062D\u0631\u06CC\u0631 \u0648 \u0627\u0631\u06AF\u0627\u0646\u0632\u0627 \u0634\u06CC\u0631\u0627\u0632",
    city: "Shiraz",
    persianCity: "\u0634\u06CC\u0631\u0627\u0632",
    rating: 4.7,
    reviewCount: 12,
    specialization: "Chiffon, Organza, and Sheer Fabric",
    persianSpecialization: "\u062D\u0631\u06CC\u0631\u060C \u06A9\u0631\u067E \u062D\u0631\u06CC\u0631\u060C \u0627\u0631\u06AF\u0627\u0646\u0632\u0627 \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0638\u0631\u06CC\u0641",
    bannerColor: "from-cyan-700 to-blue-900",
    description: "Delicate sheer textiles, printed organzas, lightweight georgettes, and breezy fabrics suitable for wedding and party gowns.",
    persianDescription: "\u062F\u0646\u06CC\u0627\u06CC \u062D\u0631\u06CC\u0631\u0647\u0627\u06CC \u0644\u0637\u06CC\u0641 \u0634\u06CC\u0634\u0647\u200C\u0627\u06CC\u060C \u0627\u0631\u06AF\u0627\u0646\u0632\u0627\u06CC \u062D\u0627\u0634\u06CC\u0647\u200C\u062F\u0627\u0631\u060C \u0698\u0631\u0698\u062A \u062A\u0631\u06A9 \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u062A\u0648\u0631\u06CC \u0638\u0631\u06CC\u0641 \u0628\u0631\u0627\u06CC \u0627\u0646\u0648\u0627\u0639 \u0644\u0628\u0627\u0633 \u0634\u0628 \u0628\u0644\u0646\u062F.",
    phone: "071-36278899",
    address: "Afif-Abad St, Shiraz",
    persianAddress: "\u0634\u06CC\u0631\u0627\u0632\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0639\u0641\u06CC\u0641\u200C\u0622\u0628\u0627\u062F\u060C \u0645\u062C\u062A\u0645\u0639 \u062A\u062C\u0627\u0631\u06CC \u0633\u062A\u0627\u0631\u0647\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644\u060C \u067E\u0644\u0627\u06A9 \u06F8",
    featuredProductIds: ["p17", "p18"]
  },
  {
    id: "s10",
    name: "Natural Fiber Co.",
    persianName: "\u06A9\u062A\u0627\u0646 \u0648 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC \u0628\u0627\u0631\u0627\u0646",
    city: "Karaj",
    persianCity: "\u06A9\u0631\u062C",
    rating: 4.6,
    reviewCount: 30,
    specialization: "Eco-friendly Linen & Organic Cotton",
    persianSpecialization: "\u067E\u06CC\u0631\u0627\u0647\u0646\u200C\u0647\u0627 \u0648 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u06F1\u06F0\u06F0\u066A \u06A9\u062A\u0627\u0646 \u0648 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC",
    bannerColor: "from-emerald-800 to-green-950",
    description: "Dedicated to earth-friendly unbleached textiles, pure linen bolts, and ready-to-wear natural organic garments.",
    persianDescription: "\u0639\u0631\u0636\u0647 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0644\u0646\u06CC\u0646 \u062E\u0627\u0645\u060C \u0627\u0644\u06CC\u0627\u0641 \u0635\u062F\u062F\u0631\u0635\u062F \u067E\u0646\u0628\u0647 \u0627\u0631\u06AF\u0627\u0646\u06CC\u06A9 \u0648 \u0644\u0628\u0627\u0633\u200C\u0647\u0627\u06CC \u0631\u0627\u062D\u062A\u06CC \u062F\u0648\u0633\u062A\u062F\u0627\u0631 \u0645\u062D\u06CC\u0637\u200C\u0632\u06CC\u0633\u062A \u0628\u062F\u0648\u0646 \u062D\u0633\u0627\u0633\u06CC\u062A \u067E\u0648\u0633\u062A\u06CC.",
    phone: "026-32504060",
    address: "Jahangir Rd, Karaj",
    persianAddress: "\u06A9\u0631\u062C\u060C \u062C\u0647\u0627\u0646\u0634\u0647\u0631\u060C \u0645\u06CC\u062F\u0627\u0646 \u0647\u0644\u0627\u0644 \u0627\u062D\u0645\u0631\u060C \u067E\u0627\u0633\u0627\u0698 \u0647\u0644\u0627\u0644\u060C \u0637\u0628\u0642\u0647 \u0647\u0645\u06A9\u0641",
    featuredProductIds: ["p19", "p20"]
  },
  {
    id: "s11",
    name: "Baloch Needlework",
    persianName: "\u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0648 \u0632\u0631\u06CC\u200C\u062F\u0648\u0632\u06CC \u0628\u0644\u0648\u0686",
    city: "Zahedan",
    persianCity: "\u0632\u0627\u0647\u062F\u0627\u0646",
    rating: 5,
    reviewCount: 45,
    specialization: "Handmade Needlework & Ethnic Garments",
    persianSpecialization: "\u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0627\u0635\u06CC\u0644\u060C \u067E\u0644\u06CC\u0648\u0627\u0631 \u0648 \u0646\u0648\u0627\u0631\u0647\u0627\u06CC \u062D\u0627\u0634\u06CC\u0647\u200C\u0627\u06CC \u062F\u0633\u062A\u200C\u062F\u0648\u0632",
    bannerColor: "from-orange-800 to-yellow-950",
    description: "Museum-quality hand-stitched Baloch embroidery, premium traditional trims, and beautiful ethnic materials directly supporting Balochi women.",
    persianDescription: "\u0647\u0646\u0631 \u0628\u06CC\u200C\u0645\u062B\u0627\u0644 \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0633\u0646\u062A\u06CC\u060C \u067E\u0644\u06CC\u0648\u0627\u0631\u0628\u0627\u0641\u06CC \u0648 \u062A\u06A9\u0647\u200C\u062F\u0648\u0632\u06CC\u200C\u0647\u0627\u06CC \u0627\u0635\u06CC\u0644 \u0628\u0644\u0648\u0686\u06CC \u0645\u0633\u062A\u0642\u06CC\u0645 \u0627\u0632 \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0631\u0648\u0633\u062A\u0627\u06CC\u06CC \u0632\u0627\u0647\u062F\u0627\u0646 \u0648 \u0627\u06CC\u0631\u0627\u0646\u0634\u0647\u0631.",
    phone: "054-33221040",
    address: "Moallem St, Zahedan",
    persianAddress: "\u0632\u0627\u0647\u062F\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0639\u0644\u0645\u060C \u0631\u0648\u0628\u0631\u0648\u06CC \u062F\u0627\u0646\u0634\u06AF\u0627\u0647\u060C \u0628\u0627\u0632\u0627\u0631\u0686\u0647 \u0635\u0646\u0627\u06CC\u0639 \u062F\u0633\u062A\u06CC\u060C \u063A\u0631\u0641\u0647 \u06F6",
    featuredProductIds: ["p21", "p22"]
  },
  {
    id: "s12",
    name: "Pars Fabric World",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0633\u0631\u0627\u06CC \u067E\u0627\u0631\u0633 \u062A\u0628\u0631\u06CC\u0632",
    city: "Tabriz",
    persianCity: "\u062A\u0628\u0631\u06CC\u0632",
    rating: 4.3,
    reviewCount: 14,
    specialization: "General Sewing Materials & Crepe",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0631\u0648\u0632\u0645\u0631\u0647\u060C \u0645\u0627\u0646\u062A\u0648\u06CC\u06CC\u060C \u06A9\u0631\u067E \u0648 \u0622\u0633\u062A\u0631\u06CC",
    bannerColor: "from-blue-800 to-indigo-900",
    description: "High quality daily textiles, multi-color crepe fabrics, teteron, and lining materials at highly wholesale competitive rates.",
    persianDescription: "\u0628\u0632\u0631\u06AF\u062A\u0631\u06CC\u0646 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0631\u0648\u0632\u0645\u0631\u0647 \u0648 \u062E\u06CC\u0627\u0637\u06CC\u060C \u062A\u062A\u0631\u0648\u0646 \u0645\u0631\u063A\u0648\u0628\u060C \u0627\u0646\u0648\u0627\u0639 \u06A9\u0631\u067E \u0645\u0627\u0632\u0631\u0627\u062A\u06CC \u0648 \u06A9\u0634\u06CC\u060C \u0648 \u0622\u0633\u062A\u0631\u06CC \u0641\u0627\u0633\u062A\u0648\u0646\u06CC \u0632\u06CC\u0631 \u0642\u06CC\u0645\u062A \u0628\u0627\u0632\u0627\u0631.",
    phone: "041-35234567",
    address: "Shariati Rd, Tabriz",
    persianAddress: "\u062A\u0628\u0631\u06CC\u0632\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0634\u0631\u06CC\u0639\u062A\u06CC \u062C\u0646\u0648\u0628\u06CC\u060C \u0686\u0647\u0627\u0631\u0631\u0627\u0647 \u0648\u0627\u0644\u0645\u0627\u0646\u060C \u062C\u0646\u0628 \u0645\u0633\u062C\u062F \u067E\u0627\u0631\u0633",
    featuredProductIds: ["p23", "p24"]
  },
  {
    id: "s13",
    name: "Alborz Denim",
    persianName: "\u062C\u06CC\u0646 \u0648 \u06A9\u062A\u0627\u0646 \u0627\u0644\u0628\u0631\u0632",
    city: "Qazvin",
    persianCity: "\u0642\u0632\u0648\u06CC\u0646",
    rating: 4.5,
    reviewCount: 18,
    specialization: "Raw Denim & Sturdy Canvas Rolls",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u062A\u0627\u0646 \u0644\u06CC \u06A9\u0634\u06CC\u060C \u0628\u0631\u0632\u0646\u062A \u0644\u0628\u0627\u0633 \u0648 \u0645\u0644\u0632\u0648\u0645\u0627\u062A \u06A9\u0627\u0631",
    bannerColor: "from-slate-700 to-sky-950",
    description: "Thick heavy-duty twill, robust canvas for backpacks, and stretchable industrial denim rolls for apparel designers.",
    persianDescription: "\u0627\u0631\u0627\u0626\u0647 \u0637\u0627\u0642\u0647\u200C\u0647\u0627\u06CC \u062C\u06CC\u0646 \u06F1\u06F2 \u0648 \u06F1\u06F4 \u0627\u0648\u0646\u0633\u060C \u06A9\u062A\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u0631\u062A\u0634\u06CC\u060C \u0628\u0631\u0632\u0646\u062A \u0646\u0631\u0645 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u06A9\u06CC\u0641 \u0648 \u0645\u0644\u0632\u0648\u0645\u0627\u062A \u06A9\u0627\u0631 \u0636\u062E\u06CC\u0645 \u0635\u0646\u0639\u062A\u06CC.",
    phone: "028-33359010",
    address: "Valiasr Ave, Qazvin",
    persianAddress: "\u0642\u0632\u0648\u06CC\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u0644\u06CC\u0639\u0635\u0631\u060C \u0646\u0631\u0633\u06CC\u062F\u0647 \u0628\u0647 \u0686\u0647\u0627\u0631\u0631\u0627\u0647 \u0648\u0644\u06CC\u0639\u0635\u0631\u060C \u0645\u062C\u062A\u0645\u0639 \u067E\u0627\u0631\u0686\u0647 \u0627\u0637\u0644\u0633",
    featuredProductIds: ["p25", "p26"]
  },
  {
    id: "s14",
    name: "Velvet Kashan",
    persianName: "\u0645\u062E\u0645\u0644 \u0648 \u0632\u0631\u06CC\u200C\u0628\u0641\u062A \u06A9\u0627\u0634\u0627\u0646",
    city: "Kashan",
    persianCity: "\u06A9\u0627\u0634\u0627\u0646",
    rating: 4.9,
    reviewCount: 29,
    specialization: "Premium Velvet & Handloom Brocade",
    persianSpecialization: "\u0645\u062E\u0645\u0644 \u0627\u0639\u0644\u0627\u06CC \u06A9\u0627\u0634\u0627\u0646 \u0648 \u0632\u0631\u06CC\u200C\u0628\u0627\u0641\u06CC \u0628\u0627\u0634\u06A9\u0648\u0647 \u0633\u0646\u062A\u06CC",
    bannerColor: "from-amber-800 to-rose-950",
    description: "Exquisite velvet woven with traditional floral patterns and majestic golden brocades with historical integrity.",
    persianDescription: "\u0627\u0631\u0627\u0626\u0647 \u0645\u062E\u0645\u0644 \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647 \u0646\u0631\u0645 \u0628\u0631\u062C\u0633\u062A\u0647\u060C \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0627\u0637\u0644\u0633 \u0632\u0631\u06CC\u200C\u0628\u0641\u062A \u0648 \u0632\u0631\u0628\u0641\u062A \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0628\u0627 \u0627\u0635\u0627\u0644\u062A \u0642\u0627\u062C\u0627\u0631\u06CC \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0645\u0645\u062A\u0627\u0632 \u06A9\u0627\u0634\u0627\u0646.",
    phone: "031-55441220",
    address: "Mohtasham Kashani St, Kashan",
    persianAddress: "\u06A9\u0627\u0634\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u062D\u062A\u0634\u0645\u060C \u0633\u0631\u0627\u06CC \u0627\u0645\u06CC\u0646\u200C\u0627\u0644\u062F\u0648\u0644\u0647\u060C \u063A\u0631\u0641\u0647 \u0645\u062E\u0645\u0644\u200C\u0628\u0627\u0641\u06CC",
    featuredProductIds: ["p27", "p28"]
  },
  {
    id: "s15",
    name: "Negin Haberdashery",
    persianName: "\u062E\u0631\u0627\u0632\u06CC \u0648 \u06CC\u0631\u0627\u0642\u200C\u0633\u0631\u0627\u06CC \u0646\u06AF\u06CC\u0646",
    city: "Tehran",
    persianCity: "\u062A\u0647\u0631\u0627\u0646",
    rating: 4.6,
    reviewCount: 37,
    specialization: "Premium Buttons, Threads & Notions",
    persianSpecialization: "\u062F\u06A9\u0645\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u0646\u062A\u0632\u06CC\u060C \u0642\u0631\u0642\u0631\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0648 \u0627\u0628\u0632\u0627\u0631 \u062E\u06CC\u0627\u0637\u06CC \u0644\u0648\u06A9\u0633",
    bannerColor: "from-amber-600 to-stone-900",
    description: "Every tailoring requirement under one roof: designer shell buttons, luxury embroidery threads, scissors, and lace trim rolls.",
    persianDescription: "\u06A9\u0627\u0645\u0644\u200C\u062A\u0631\u06CC\u0646 \u0645\u062C\u0645\u0648\u0639\u0647 \u0645\u0644\u0632\u0648\u0645\u0627\u062A \u062E\u06CC\u0627\u0637\u06CC\u060C \u062F\u06A9\u0645\u0647\u200C\u0647\u0627\u06CC \u0637\u0628\u06CC\u0639\u06CC \u0635\u062F\u0641\u06CC \u0648 \u0686\u0648\u0628\u06CC\u060C \u0632\u06CC\u067E\u200C\u0647\u0627\u06CC \u0641\u0644\u0632\u06CC \u0628\u0627\u06A9\u06CC\u0641\u06CC\u062A \u0648 \u0646\u062E\u200C\u0647\u0627\u06CC \u0645\u0631\u063A\u0648\u0628 \u062F\u0645\u0633\u0647 \u0641\u0631\u0627\u0646\u0633\u0647.",
    phone: "021-33908877",
    address: "Bazaar-e-Ahangaran, Haberdashery Line, Tehran",
    persianAddress: "\u062A\u0647\u0631\u0627\u0646\u060C \u0628\u0627\u0632\u0627\u0631 \u0622\u0647\u0646\u06AF\u0631\u0627\u0646\u060C \u06A9\u0648\u0686\u0647 \u0645\u0631\u0648\u06CC\u060C \u062E\u0631\u0627\u0632\u06CC \u0628\u0632\u0631\u06AF \u0646\u06AF\u06CC\u0646",
    featuredProductIds: ["p29", "p30"]
  },
  {
    id: "s16",
    name: "Saba Iranian Wear",
    persianName: "\u0631\u062E\u062A \u0648 \u062C\u0627\u0645\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0635\u0628\u0627",
    city: "Isfahan",
    persianCity: "\u0627\u0635\u0641\u0647\u0627\u0646",
    rating: 4.7,
    reviewCount: 21,
    specialization: "Authentic Costumes & Traditional Skirts",
    persianSpecialization: "\u0644\u0628\u0627\u0633\u200C\u0647\u0627\u06CC \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC\u060C \u062C\u0644\u06CC\u0642\u0647\u200C\u0647\u0627\u06CC \u0632\u0631\u062F\u0648\u0632\u06CC \u0648 \u062F\u0627\u0645\u0646\u200C\u0647\u0627\u06CC \u067E\u0631\u0686\u06CC\u0646",
    bannerColor: "from-rose-800 to-amber-950",
    description: "Reimagining classic Persian attire for modern closets: pleated skirts, majestic long-coats, and traditional vests.",
    persianDescription: "\u062A\u0644\u0641\u06CC\u0642\u06CC \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0627\u0632 \u0631\u062E\u062A \u0633\u0646\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0648 \u0628\u0631\u0634\u200C\u0647\u0627\u06CC \u0627\u0645\u0631\u0648\u0632\u06CC\u061B \u062F\u0627\u0645\u0646\u200C\u0647\u0627\u06CC \u067E\u0631\u0686\u06CC\u0646 \u0631\u0646\u06AF\u0627\u0631\u0646\u06AF \u0648 \u062C\u0644\u06CC\u0642\u0647\u200C\u0647\u0627\u06CC \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0645\u0631\u062F\u0627\u0646\u0647 \u0648 \u0632\u0646\u0627\u0646\u0647.",
    phone: "031-36689090",
    address: "Chahar Bagh Ave, Isfahan",
    persianAddress: "\u0627\u0635\u0641\u0647\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0686\u0647\u0627\u0631\u0628\u0627\u063A \u0639\u0628\u0627\u0633\u06CC\u060C \u0645\u062C\u062A\u0645\u0639 \u067E\u0627\u0631\u06A9\u060C \u0637\u0628\u0642\u0647 \u0647\u0645\u06A9\u0641\u060C \u067E\u0644\u0627\u06A9 \u06F1\u06F4",
    featuredProductIds: ["p31", "p32"]
  },
  {
    id: "s17",
    name: "Apadana Suiting",
    persianName: "\u06A9\u062A \u0648 \u0634\u0644\u0648\u0627\u0631 \u0648 \u067E\u0627\u0631\u0686\u0647 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
    city: "Tehran",
    persianCity: "\u062A\u0647\u0631\u0627\u0646",
    rating: 4.8,
    reviewCount: 40,
    specialization: "Premium Woolen Suiting & Italian Tweed",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC \u067E\u0634\u0645\u06CC\u060C \u06AF\u0627\u0628\u0627\u0631\u062F\u06CC\u0646 \u0648 \u062A\u0648\u0626\u06CC\u062F \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
    bannerColor: "from-slate-800 to-indigo-950",
    description: "Exquisite menswear suiting fabrics, 100% fine merino wool bolts, tweed, and herringbone lining textiles.",
    persianDescription: "\u062A\u0623\u0645\u06CC\u0646 \u0628\u0631\u062A\u0631\u06CC\u0646 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC\u200C\u0647\u0627\u06CC \u067E\u0634\u0645\u06CC \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u0637\u0647\u0631\u06CC\u060C \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u06A9\u062A \u062A\u06A9 \u062A\u0648\u0626\u06CC\u062F \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627\u06CC\u06CC \u0648 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC\u200C\u0647\u0627\u06CC \u0639\u0627\u0644\u06CC \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC.",
    phone: "021-88899010",
    address: "Valiasr Blvd, Above Fatima Square, Tehran",
    persianAddress: "\u062A\u0647\u0631\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u0644\u06CC\u0639\u0635\u0631\u060C \u0628\u0627\u0644\u0627\u062A\u0631 \u0627\u0632 \u0645\u06CC\u062F\u0627\u0646 \u0641\u0627\u0637\u0645\u06CC\u060C \u062C\u0646\u0628 \u06A9\u0648\u0686\u0647 \u0635\u062F\u0631",
    featuredProductIds: ["p33", "p34"]
  },
  {
    id: "s18",
    name: "Bond Street Apparel",
    persianName: "\u067E\u0648\u0634\u0627\u06A9 \u0628\u0648\u0646\u062F \u0627\u0633\u062A\u0631\u06CC\u062A \u062A\u0628\u0631\u06CC\u0632",
    city: "Tabriz",
    persianCity: "\u062A\u0628\u0631\u06CC\u0632",
    rating: 4.7,
    reviewCount: 33,
    specialization: "Tailored Men Coats & Modern Suits",
    persianSpecialization: "\u067E\u0627\u0644\u062A\u0648\u0647\u0627\u06CC \u067E\u0634\u0645\u06CC \u0622\u0645\u0627\u062F\u0647\u060C \u06A9\u062A\u200C\u0647\u0627\u06CC \u062A\u06A9 \u0627\u0633\u067E\u0648\u0631\u062A \u0648 \u0634\u0644\u0648\u0627\u0631 \u0627\u062F\u0627\u0631\u06CC",
    bannerColor: "from-blue-900 to-stone-950",
    description: "Expertly structured ready-to-wear coats, wool blend jackets, and modern workwear manufactured in Tabriz workshops.",
    persianDescription: "\u067E\u0627\u0644\u062A\u0648\u0647\u0627\u06CC \u067E\u0634\u0645\u06CC \u0645\u0631\u062F\u0627\u0646\u0647 \u06A9\u0644\u0627\u0633\u06CC\u06A9\u060C \u06A9\u062A\u200C\u0647\u0627\u06CC \u062A\u06A9 \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u0634\u06CC\u06A9 \u0648 \u067E\u0648\u0634\u0627\u06A9 \u0631\u0633\u0645\u06CC \u062F\u0648\u062E\u062A\u0647\u200C\u0634\u062F\u0647 \u0628\u0627 \u0628\u0631\u062A\u0631\u06CC\u0646 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC\u200C\u0647\u0627 \u062F\u0631 \u06A9\u0627\u0631\u062E\u0627\u0646\u062C\u0627\u062A \u062A\u0628\u0631\u06CC\u0632.",
    phone: "041-33334455",
    address: "Elgoli Blvd, Tabriz",
    persianAddress: "\u062A\u0628\u0631\u06CC\u0632\u060C \u0628\u0644\u0648\u0627\u0631 \u0627\u0626\u0644\u200C\u06AF\u0644\u06CC\u060C \u0633\u0627\u062E\u062A\u0645\u0627\u0646 \u0628\u0648\u0646\u062F \u0627\u0633\u062A\u0631\u06CC\u062A\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644",
    featuredProductIds: ["p35", "p36"]
  },
  {
    id: "s19",
    name: "Hirkan Spinning Co.",
    persianName: "\u0646\u062E\u200C\u0631\u06CC\u0633\u06CC \u0648 \u06A9\u0627\u0645\u0648\u0627\u0628\u0627\u0641\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646",
    city: "Gorgan",
    persianCity: "\u06AF\u0631\u06AF\u0627\u0646",
    rating: 4.6,
    reviewCount: 16,
    specialization: "Organic Spun Yarn & Knitting Supplies",
    persianSpecialization: "\u06A9\u0644\u0627\u0641\u200C\u0647\u0627\u06CC \u06A9\u0627\u0645\u0648\u0627\u06CC \u0637\u0628\u06CC\u0639\u06CC \u067E\u0634\u0645\u06CC \u0648 \u0646\u062E\u200C\u0647\u0627\u06CC \u0642\u0644\u0627\u0628\u200C\u0628\u0627\u0641\u06CC",
    bannerColor: "from-emerald-900 to-amber-950",
    description: "Cozy hand-spun sheep wool yarns, fine cotton crochets, and authentic dyes harvested from Hyrcanian forest botanicals.",
    persianDescription: "\u0639\u0631\u0636\u0647 \u0646\u062E\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0648 \u0637\u0628\u06CC\u0639\u06CC \u067E\u0634\u0645 \u0628\u0631\u0647\u060C \u06A9\u0644\u0627\u0641\u200C\u0647\u0627\u06CC \u06A9\u0627\u0645\u0648\u0627\u06CC \u062F\u0633\u062A\u200C\u0628\u0627\u0641 \u0632\u0646\u062F\u0647 \u0648 \u0627\u0644\u06CC\u0627\u0641 \u0646\u062E \u067E\u0646\u0628\u0647 \u062E\u0627\u0644\u0635 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0634\u062F\u0647 \u06AF\u06CC\u0627\u0647\u06CC \u06AF\u0631\u06AF\u0627\u0646.",
    phone: "017-32214550",
    address: "Nahar Khoran Rd, Gorgan",
    persianAddress: "\u06AF\u0631\u06AF\u0627\u0646\u060C \u0628\u0644\u0648\u0627\u0631 \u0646\u0627\u0647\u0627\u0631\u062E\u0648\u0631\u0627\u0646\u060C \u0646\u0628\u0634 \u0639\u062F\u0627\u0644\u062A \u06F6\u06F8\u060C \u06A9\u0627\u0631\u06AF\u0627\u0647 \u0646\u062E\u200C\u0631\u06CC\u0633\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646",
    featuredProductIds: ["p37", "p38"]
  },
  {
    id: "s20",
    name: "Khazar Weaving Mills",
    persianName: "\u0646\u0633\u0627\u062C\u06CC \u0648 \u0628\u0627\u0641\u0646\u062F\u06AF\u06CC \u062E\u0632\u0631 \u0633\u0627\u0631\u06CC",
    city: "Sari",
    persianCity: "\u0633\u0627\u0631\u06CC",
    rating: 4.4,
    reviewCount: 20,
    specialization: "Performance Fabrics & Waterproof Nylon",
    persianSpecialization: "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0648\u0631\u0632\u0634\u06CC \u06A9\u0634\u06CC\u060C \u0631\u06CC\u0648\u0646 \u0648 \u0634\u0645\u0639\u06CC \u06A9\u0627\u067E\u0634\u0646\u06CC \u0636\u062F\u0622\u0628",
    bannerColor: "from-sky-800 to-indigo-950",
    description: "Cutting-edge flexible sports materials, lightweight waterproof lining fabrics, and heavy-duty activewear materials.",
    persianDescription: "\u0646\u0633\u0627\u062C\u06CC \u062A\u062E\u0635\u0635\u06CC \u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0648\u0631\u0632\u0634\u06CC \u0631\u06CC\u0648\u0646 \u0627\u0639\u0644\u0627\u060C \u067E\u0627\u0631\u0686\u0647 \u0636\u062F\u0622\u0628 \u0628\u0627\u0631\u0627\u0646\u06CC \u0648 \u0634\u0645\u0639\u06CC \u0628\u0627\u062F\u06AF\u06CC\u0631 \u0645\u0646\u0627\u0633\u0628 \u06A9\u0627\u067E\u0634\u0646 \u0648 \u06A9\u06CC\u0633\u0647 \u062E\u0648\u0627\u0628.",
    phone: "011-33245610",
    address: "Basij Square, Sari",
    persianAddress: "\u0633\u0627\u0631\u06CC\u060C \u0645\u06CC\u062F\u0627\u0646 \u0628\u0633\u06CC\u062C\u060C \u0627\u0628\u062A\u062F\u0627\u06CC \u062C\u0627\u062F\u0647 \u0642\u0627\u0626\u0645\u0634\u0647\u0631\u060C \u0645\u062C\u062A\u0645\u0639 \u0646\u0633\u0627\u062C\u06CC \u062E\u0632\u0631",
    featuredProductIds: ["p39", "p40"]
  }
];
var products = [
  // s1 Termeh Razavi
  {
    id: "p1",
    name: "Shah Abbasi Premium Termeh",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u062A\u0631\u0645\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0637\u0631\u062D \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC",
    storeId: "s1",
    storeName: "Termeh Razavi",
    price: 45e4,
    category: "traditional",
    description: "Stunning 5-color handloomed silk Termeh featuring gold and silver threading. Perfect for luxurious traditional layouts and festive tables.",
    persianDescription: "\u062A\u0631\u0645\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0628\u0633\u06CC\u0627\u0631 \u0646\u0641\u06CC\u0633 \u06F5 \u0631\u0646\u06AF \u062F\u0633\u062A\u200C\u0628\u0627\u0641\u062A \u0628\u0627 \u067E\u0648\u062F\u0647\u0627\u06CC \u0632\u0631\u0628\u0641\u062A \u0648 \u0633\u06CC\u0645\u200C\u0628\u0641\u062A \u0637\u0631\u062D \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC \u06CC\u0632\u062F\u060C \u0645\u0646\u0627\u0633\u0628 \u0631\u0648\u0645\u06CC\u0632\u06CC\u200C\u0647\u0627\u06CC \u0644\u0648\u06A9\u0633 \u0648 \u062C\u0647\u06CC\u0632\u06CC\u0647.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    unit: "\u0645\u062A\u0631",
    material: "Silk Blend",
    color: "Red Gold"
  },
  {
    id: "p2",
    name: "Traditional Termeh Tablecloth Bundle",
    persianName: "\u0631\u0648\u0645\u06CC\u0632\u06CC \u0628\u0642\u0686\u0647 \u062A\u0631\u0645\u0647 \u06CC\u0632\u062F \u0627\u0628\u0631\u06CC\u0634\u0645 \u06F1\u06F0\u06F0\xD7\u06F1\u06F0\u06F0",
    storeId: "s1",
    storeName: "Termeh Razavi",
    price: 12e5,
    category: "traditional",
    description: "An elegant square Termeh cover with hand-stitched silk fringes and premium lining.",
    persianDescription: "\u0631\u0648\u0645\u06CC\u0632\u06CC \u0628\u0642\u0686\u0647 \u0645\u0631\u0628\u0639 \u062A\u0631\u0645\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u062D\u0627\u0634\u06CC\u0647\u200C\u062F\u0648\u0632\u06CC \u0634\u062F\u0647 \u0628\u0627 \u0645\u063A\u0632\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645 \u0648 \u0622\u0633\u062A\u0631\u06A9\u0634\u06CC \u0628\u0633\u06CC\u0627\u0631 \u062A\u0645\u06CC\u0632 \u0645\u062E\u0645\u0644 \u0633\u0646\u062A\u06CC \u0633\u0631\u062E.",
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    unit: "\u0642\u0648\u0627\u0631\u0647",
    material: "Pure Silk Yarn",
    color: "Crimson Burgundy"
  },
  // s2 Karbas Esfahan
  {
    id: "p3",
    name: "Hand-Stamped Ghalamkar Pattern Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062A\u0642\u0627\u0644 \u0642\u0644\u0645\u06A9\u0627\u0631 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632",
    storeId: "s2",
    storeName: "Karbas Esfahan",
    price: 18e4,
    category: "fabric",
    description: "Premium organic cotton textile hand-stamped with traditional Esfahan arabesque blocks using walnut husk and pomegranate shell dyes.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062A\u0642\u0627\u0644 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u062E\u0627\u0644\u0635 \u06A9\u0627\u0631\u200C\u0634\u062F\u0647 \u0628\u0627 \u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0648 \u0627\u0633\u0628\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631 \u0627\u0635\u0641\u0647\u0627\u0646\u060C \u0631\u0646\u06AF\u0631\u0632\u06CC\u200C\u0634\u062F\u0647 \u06A9\u0627\u0645\u0644\u0627\u064B \u0637\u0628\u06CC\u0639\u06CC \u06AF\u06CC\u0627\u0647\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    unit: "\u0645\u062A\u0631",
    material: "100% Organic Cotton",
    color: "Indigo Cream"
  },
  {
    id: "p4",
    name: "Premium Esfahan Floral Ghalamkar Spread",
    persianName: "\u0633\u0641\u0631\u0647 \u0642\u0644\u0645\u06A9\u0627\u0631 \u0633\u0646\u062A\u06CC \u0637\u0631\u062D \u062A\u0631\u0646\u062C \u06F1\u06F2\u06F0 \u0633\u0627\u0646\u062A\u06CC\u200C\u0645\u062A\u0631\u06CC",
    storeId: "s2",
    storeName: "Karbas Esfahan",
    price: 25e4,
    category: "traditional",
    description: "Finished round tablecloth printed by woodblock with gorgeous center medallion.",
    persianDescription: "\u0633\u0641\u0631\u0647 \u0642\u0644\u0645\u06A9\u0627\u0631 \u06AF\u0631\u062F \u0637\u0631\u062D \u062A\u0631\u0646\u062C \u0627\u0639\u0644\u0627\u06CC \u0627\u0635\u0641\u0647\u0627\u0646 \u0628\u0627 \u0644\u0628\u0647 \u062F\u0627\u0644\u0628\u0631\u06CC \u062F\u0633\u062A\u200C\u062F\u0648\u0632\u060C \u06A9\u0627\u0645\u0644\u0627\u064B \u0642\u0627\u0628\u0644 \u0634\u0633\u062A\u0634\u0648 \u0628\u062F\u0648\u0646 \u062A\u063A\u06CC\u06CC\u0631 \u0631\u0646\u06AF.",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    unit: "\u0639\u062F\u062F",
    material: "Canvas Cotton",
    color: "Teal Blue Beige"
  },
  // s3 Diba Gilan
  {
    id: "p5",
    name: "Raw Natural Silk Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0637\u0628\u06CC\u0639\u06CC \u062E\u0627\u0645 \u062F\u0631\u062C\u0647 \u06CC\u06A9 \u06AF\u06CC\u0644\u0627\u0646",
    storeId: "s3",
    storeName: "Diba Gilan",
    price: 85e4,
    category: "fabric",
    description: "Pure, organic mulberry silk directly harvested from the silk farm coccoons in Lahijan. Lustrous texture and elegant weight.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u062D\u0627\u0635\u0644 \u0627\u0632 \u0646\u0648\u063A\u0627\u0646 \u0627\u0631\u06AF\u0627\u0646\u06CC\u06A9 \u0644\u0627\u0647\u06CC\u062C\u0627\u0646\u060C \u0628\u0627 \u0628\u0627\u0641\u062A \u0646\u0627\u0645\u0646\u0638\u0645 \u062C\u0630\u0627\u0628 \u0627\u0628\u0631\u06CC\u0634\u0645 \u062E\u0627\u0645 \u0648 \u062F\u0631\u062E\u0634\u0634 \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647 \u0632\u06CC\u0628\u0627 \u062F\u0631 \u0646\u0648\u0631.",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    unit: "\u0645\u062A\u0631",
    material: "100% Mulberry Silk",
    color: "Ivory White"
  },
  {
    id: "p6",
    name: "Artisan Northern Chador Shab Silk",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0686\u0627\u062F\u0631\u0634\u0628 \u062F\u0633\u062A\u200C\u0628\u0627\u0641\u062A \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0642\u0627\u0633\u0645\u200C\u0622\u0628\u0627\u062F",
    storeId: "s3",
    storeName: "Diba Gilan",
    price: 95e4,
    category: "traditional",
    description: "Authentic silk and cotton colorful hand-loomed cloth featuring geometric Northern symbols of mountains and birds.",
    persianDescription: "\u0686\u0627\u062F\u0631\u0634\u0628 \u0627\u0635\u06CC\u0644 \u0642\u0627\u0633\u0645\u200C\u0622\u0628\u0627\u062F \u0628\u0627\u0641\u062A\u0647\u200C\u0634\u062F\u0647 \u0628\u0627 \u062F\u0633\u062A\u06AF\u0627\u0647 \u0686\u0627\u062F\u0631\u0634\u0628\u200C\u0628\u0627\u0641\u06CC \u0686\u0648\u0628\u06CC\u0646\u060C \u0633\u0631\u0634\u0627\u0631 \u0627\u0632 \u0646\u0642\u0648\u0634 \u0632\u06CC\u06AF\u0632\u0627\u06AF \u0648 \u0634\u0627\u0646\u0647\u060C \u0628\u0627 \u062A\u0627\u0631 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0637\u0644\u0627\u06CC\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    unit: "\u0642\u0648\u0627\u0631\u0647",
    material: "Silk and Cotton Mix",
    color: "Multi-color Orange-Red"
  },
  // s4 Saten Tehran
  {
    id: "p7",
    name: "Ultra Glossy French Satin Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0633\u0627\u062A\u0646 \u0641\u0631\u0627\u0646\u0633\u0647 \u0628\u0631\u0627\u0642 \u062F\u0631\u062C\u0647 \u06CC\u06A9 \u0645\u062C\u0644\u0633\u06CC",
    storeId: "s4",
    storeName: "Saten Tehran",
    price: 22e4,
    category: "fabric",
    description: "Heavy weight satin imported from France, featuring a high gloss finish on one side and structured texture perfect for gowns.",
    persianDescription: "\u0633\u0627\u062A\u0646 \u0641\u0631\u0627\u0646\u0633\u0647 \u0636\u062E\u06CC\u0645 \u0628\u0627 \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627\u060C \u0631\u06CC\u0632\u0634 \u0628\u0633\u06CC\u0627\u0631 \u0639\u0627\u0644\u06CC \u0648 \u062F\u0631\u062E\u0634\u0634 \u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC \u0644\u0627\u06A9\u0686\u0631\u06CC\u060C \u0645\u0646\u0627\u0633\u0628 \u062F\u0648\u062E\u062A \u0644\u0628\u0627\u0633 \u0639\u0631\u0648\u0633 \u0648 \u0645\u0627\u06A9\u0633\u06CC \u0634\u0628.",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    unit: "\u0645\u062A\u0631",
    material: "French Polyester Silk",
    color: "Royal Emerald Green"
  },
  {
    id: "p8",
    name: "Soft Royal Velvet Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062E\u0645\u0644 \u0641\u0631\u0627\u0646\u0633\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0644\u0637\u06CC\u0641",
    storeId: "s4",
    storeName: "Saten Tehran",
    price: 38e4,
    category: "fabric",
    description: "Exceptional deep-black French velvet fabric with elastic comfort and premium luxury touch.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062E\u0645\u0644 \u06A9\u0648\u0628\u06CC\u062F\u0647 \u0648\u0627\u0631\u062F\u0627\u062A\u06CC \u0641\u0631\u0627\u0646\u0633\u0648\u06CC \u0628\u0627 \u06A9\u0634\u0633\u0627\u0646\u06CC \u06A9\u0645\u200C\u0646\u0638\u06CC\u0631 \u0648 \u0628\u0627\u0641\u062A \u0628\u0633\u06CC\u0627\u0631 \u0645\u062A\u0631\u0627\u06A9\u0645 \u0645\u0634\u06A9\u06CC \u0639\u0645\u06CC\u0642 \u0628\u062F\u0648\u0646 \u067E\u0631\u0632\u062F\u0647\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    unit: "\u0645\u062A\u0631",
    material: "Rayon-Silk Blend Velvet",
    color: "Jet Black"
  },
  // s5 Katan Zagros
  {
    id: "p9",
    name: "14oz Premium Denim Indigo",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u062A\u0627\u0646 \u062C\u06CC\u0646 \u0636\u062E\u06CC\u0645 \u06F1\u06F4 \u0627\u0648\u0646\u0633 \u0698\u0627\u067E\u0646\u06CC",
    storeId: "s5",
    storeName: "Katan Zagros",
    price: 19e4,
    category: "fabric",
    description: "Authentic 14oz raw denim fabric perfect for creating custom jeans, heavy jackets, and long-lasting workwear.",
    persianDescription: "\u06A9\u062A\u0627\u0646 \u062C\u06CC\u0646 \u0628\u0633\u06CC\u0627\u0631 \u0645\u062D\u06A9\u0645 \u0648 \u0636\u062E\u06CC\u0645 \u06F1\u06F4 \u0627\u0648\u0646\u0633 \u062E\u0627\u0645\u060C \u0628\u062F\u0648\u0646 \u0631\u0646\u06AF\u200C\u0631\u0641\u062A\u0646 \u0632\u0648\u062F\u0647\u0646\u06AF\u0627\u0645\u060C \u0639\u0627\u0644\u06CC \u0628\u0631\u0627\u06CC \u062F\u0648\u062E\u062A \u06A9\u0627\u067E\u0634\u0646\u060C \u062C\u06CC\u0646 \u0645\u0631\u062F\u0627\u0646\u0647 \u0648 \u0634\u0644\u0648\u0627\u0631 \u06A9\u0627\u0631\u06AF\u0627\u0647\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    stock: 120,
    unit: "\u0645\u062A\u0631",
    material: "100% Cotton Denim",
    color: "Dark Indigo Blue"
  },
  {
    id: "p10",
    name: "Stretch Twill Cotton Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u062A\u0627\u0646 \u06A9\u062C\u0631\u0627\u0647 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u06A9\u0634\u06CC",
    storeId: "s5",
    storeName: "Katan Zagros",
    price: 13e4,
    category: "fabric",
    description: "Elastic cotton twill with high breathability, suitable for office trousers, skirts, and uniform tailoring.",
    persianDescription: "\u06A9\u062A\u0627\u0646 \u06A9\u062C\u0631\u0627\u0647 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u0644\u0637\u06CC\u0641 \u0628\u0627 \u06F3\u066A \u0627\u0644\u06CC\u0627\u0641 \u0627\u0633\u067E\u0646\u062F\u06A9\u0633 \u062C\u0647\u062A \u06A9\u0634\u0633\u0627\u0646\u06CC \u0645\u0637\u0644\u0648\u0628\u060C \u0645\u0646\u0627\u0633\u0628 \u0627\u0646\u0648\u0627\u0639 \u06A9\u062A \u062E\u0644\u0628\u0627\u0646\u06CC\u060C \u0634\u0644\u0648\u0627\u0631 \u06A9\u062A\u0627\u0646 \u0648 \u0641\u0631\u0645 \u0627\u062F\u0627\u0631\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    stock: 80,
    unit: "\u0645\u062A\u0631",
    material: "Cotton Lycra Blend",
    color: "Desert Sand Khaki"
  },
  // s6 Pashmineh Tabriz
  {
    id: "p11",
    name: "Thick Woolen Footer Coat Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u067E\u0634\u0645\u06CC \u0641\u0648\u062A\u0631 \u067E\u0627\u0644\u062A\u0648\u06CC\u06CC \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627 \u062A\u0628\u0631\u06CC\u0632",
    storeId: "s6",
    storeName: "Pashmineh Tabriz",
    price: 48e4,
    category: "fabric",
    description: "Superb heavy-weight wool footer fabric crafted in Azarshahr Tabriz. Unparalleled insulation and elegant fall for custom coats.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u067E\u0627\u0644\u062A\u0648\u06CC\u06CC \u0641\u0648\u062A\u0631 \u06A9\u0648\u0628\u06CC\u062F\u0647 \u0628\u0633\u06CC\u0627\u0631 \u06AF\u0631\u0645 \u0648 \u0646\u0631\u0645\u060C \u0628\u0627 \u062F\u0631\u0635\u062F \u0628\u0627\u0644\u0627\u06CC \u067E\u0634\u0645 \u06AF\u0648\u0633\u0641\u0646\u062F\u06CC \u062A\u0628\u0631\u06CC\u0632\u060C \u0645\u0646\u0627\u0633\u0628 \u0634\u06CC\u06A9\u200C\u062A\u0631\u06CC\u0646 \u067E\u0627\u0644\u062A\u0648\u0647\u0627\u06CC \u0632\u0645\u0633\u062A\u0627\u0646\u0647 \u0632\u0646\u0627\u0646\u0647 \u0648 \u0645\u0631\u062F\u0627\u0646\u0647.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    unit: "\u0645\u062A\u0631",
    material: "80% Fine Wool, 20% Polyester",
    color: "Camel Brown"
  },
  {
    id: "p12",
    name: "Plaid Cashmere Winter Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u067E\u0634\u0645\u06CC \u06A9\u0634\u0645\u06CC\u0631 \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u0644\u0637\u06CC\u0641",
    storeId: "s6",
    storeName: "Pashmineh Tabriz",
    price: 32e4,
    category: "fabric",
    description: "Delicate and warm cashmere touch plaid material ideal for luxury ponchos, scarves, and warm flannel-like shirts.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u0634\u0645\u06CC\u0631 \u06AF\u0631\u0645 \u0648 \u0644\u0637\u06CC\u0641 \u0628\u0627 \u0637\u0631\u062D \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u062A\u0631\u0646\u062F\u060C \u0627\u06CC\u062F\u0647 \u0622\u0644 \u0628\u0631\u0627\u06CC \u062F\u0648\u062E\u062A \u0634\u06A9\u062A\u060C \u067E\u0627\u0646\u0686\u0648\u060C \u0634\u0646\u0644 \u0648 \u0634\u0627\u0644\u200C\u06AF\u0631\u062F\u0646\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u06CC\u0632\u06CC \u062F\u0646\u062C.",
    imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    stock: 65,
    unit: "\u0645\u062A\u0631",
    material: "Cashmere-Poly Blend",
    color: "Grey-Burgundy Plaid"
  },
  // s7 Baharak Gallery
  {
    id: "p13",
    name: "Saba Cotton Summer Manteau",
    persianName: "\u0645\u0627\u0646\u062A\u0648 \u06A9\u062A\u0627\u0646 \u062E\u0646\u06A9 \u0628\u0647\u0627\u0631\u0647 \u0645\u062F\u0644 \u0635\u0628\u0627 \u062F\u06A9\u0645\u0647\u200C\u0627\u06CC",
    storeId: "s7",
    storeName: "Baharak Gallery",
    price: 78e4,
    category: "apparel",
    description: "Ready-to-wear lightweight pure cotton manteau, featuring hand-carved coconut buttons and a relaxed artistic fit.",
    persianDescription: "\u0645\u0627\u0646\u062A\u0648\u06CC \u0622\u0645\u0627\u062F\u0647 \u0648 \u0628\u0633\u06CC\u0627\u0631 \u0633\u0628\u06A9 \u062F\u0648\u062E\u062A\u0647\u200C\u0634\u062F\u0647 \u0628\u0627 \u06A9\u062A\u0627\u0646 \u062E\u0646\u06A9 \u0636\u062F\u062D\u0633\u0627\u0633\u06CC\u062A \u0628\u0647\u0627\u0631\u0647\u060C \u0637\u0631\u062D \u062F\u06A9\u0645\u0647\u200C\u0647\u0627\u06CC \u0646\u0627\u0631\u06AF\u06CC\u0644\u06CC \u067E\u0647\u0644\u0648 \u0648 \u0628\u0631\u0634 \u0622\u0632\u0627\u062F \u0648 \u0647\u0646\u0631\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    unit: "\u0639\u062F\u062F",
    material: "Organic Cotton",
    color: "Ochre Yellow"
  },
  {
    id: "p14",
    name: "Natural Fiber Spring Crinkled Scarf",
    persianName: "\u0634\u0627\u0644 \u0646\u062E\u06CC \u0628\u0647\u0627\u0631\u0647 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC \u0686\u0631\u0648\u06A9",
    storeId: "s7",
    storeName: "Baharak Gallery",
    price: 16e4,
    category: "apparel",
    description: "Breathable, relaxed crinkle scarf made with natural dyes. Lightweight and stylish.",
    persianDescription: "\u0634\u0627\u0644 \u0646\u062E\u06CC \u0686\u0631\u0648\u06A9 \u062E\u0646\u06A9 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627 \u0627\u0644\u06CC\u0627\u0641 \u0646\u062E\u06CC \u0627\u0631\u06AF\u0627\u0646\u06CC\u06A9 \u0648 \u0644\u0628\u0647 \u0631\u06CC\u0634\u200C\u062F\u0627\u0631 \u062F\u0633\u062A\u200C\u0633\u0627\u0632\u060C \u0628\u0633\u06CC\u0627\u0631 \u0633\u0628\u06A9 \u0648 \u0634\u06CC\u06A9 \u062F\u0631 \u0631\u0646\u06AF\u200C\u0647\u0627\u06CC \u062C\u0630\u0627\u0628 \u067E\u0627\u0633\u062A\u0644\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    unit: "\u0639\u062F\u062F",
    material: "Cotton",
    color: "Mint Green"
  },
  // s8 Silk Atelier
  {
    id: "p15",
    name: "Hand-Stitched Painted Silk Scarf",
    persianName: "\u0631\u0648\u0633\u0631\u06CC \u0627\u0628\u0631\u06CC\u0634\u0645 \u062E\u0627\u0644\u0635 \u062F\u0633\u062A\u200C\u062F\u0648\u0632 \u0646\u0642\u0627\u0634\u06CC \u062F\u0633\u062A",
    storeId: "s8",
    storeName: "Silk Atelier",
    price: 42e4,
    category: "apparel",
    description: "Unique custom hand-painted silk scarf featuring Persian calligraphic curves and beautiful flower motifs. Hand-rolled edges.",
    persianDescription: "\u0631\u0648\u0633\u0631\u06CC \u06F1\u06F0\u06F0\u066A \u0627\u0628\u0631\u06CC\u0634\u0645 \u0637\u0628\u06CC\u0639\u06CC \u0642\u0648\u0627\u0631\u0647 \u06F1\u06F2\u06F0\u060C \u0646\u0642\u0627\u0634\u06CC\u200C\u0634\u062F\u0647 \u062A\u06A9 \u0628\u0627 \u062F\u0633\u062A \u0628\u0627 \u0646\u0642\u0648\u0634 \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631 \u0648 \u062A\u0630\u0647\u06CC\u0628\u060C \u0628\u0627 \u0644\u0628\u0647\u200C\u062F\u0648\u0632\u06CC \u062F\u0633\u062A\u200C\u062F\u0648\u0632 \u0644\u0648\u0644\u200C\u0634\u062F\u0647 \u0627\u0639\u0644\u0627.",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    unit: "\u0639\u062F\u062F",
    material: "Pure Silk",
    color: "Turquoise Ivory"
  },
  {
    id: "p16",
    name: "Wild Raw Silk Shawl",
    persianName: "\u0634\u0627\u0644 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0648\u062D\u0634\u06CC \u0645\u062C\u0644\u0633\u06CC \u0636\u062E\u06CC\u0645",
    storeId: "s8",
    storeName: "Silk Atelier",
    price: 48e4,
    category: "apparel",
    description: "Luxurious heavy silk road shawl with a unique raw texturized weave.",
    persianDescription: "\u0634\u0627\u0644 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0648\u062D\u0634\u06CC \u0628\u0627 \u0628\u0627\u0641\u062A \u06A9\u062C\u200C\u0631\u0627\u0647 \u0636\u062E\u06CC\u0645 \u0648 \u0628\u0627 \u0648\u0642\u0627\u0631\u060C \u0645\u0646\u0627\u0633\u0628 \u0645\u0647\u0645\u0627\u0646\u06CC\u200C\u0647\u0627 \u0628\u0627 \u062C\u0644\u0648\u0647 \u0637\u0644\u0627\u06CC\u06CC \u0645\u0627\u062A \u062F\u0631 \u0646\u0648\u0631 \u0631\u0648\u0632.",
    imageUrl: "https://images.unsplash.com/photo-1544030109-47bb65c47e4a?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    unit: "\u0639\u062F\u062F",
    material: "Tussar Wild Silk",
    color: "Antique Bronze"
  },
  // s9 Harir Shiraz
  {
    id: "p17",
    name: "Crystal Chiffon Silk Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u062D\u0631\u06CC\u0631 \u06A9\u0631\u06CC\u0633\u062A\u0627\u0644 \u0645\u062C\u0644\u0633\u06CC \u0634\u06CC\u0634\u0647\u200C\u0627\u06CC",
    storeId: "s9",
    storeName: "Harir Shiraz",
    price: 14e4,
    category: "fabric",
    description: "Ultra-thin, elegant crystal chiffon with a high sheen. Best suited for sleeve linings, overlays, and flowing bridal accessories.",
    persianDescription: "\u062D\u0631\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0644\u0637\u06CC\u0641 \u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC \u0628\u0627 \u0631\u06CC\u0632\u0634 \u0631\u0648\u06CC\u0627\u06CC\u06CC \u0648 \u0628\u0631\u0627\u0642\u060C \u0627\u06CC\u062F\u0647 \u0622\u0644 \u0628\u0631\u0627\u06CC \u0631\u0648\u06CC\u0647 \u0645\u0627\u0646\u062A\u0648\u060C \u0634\u0627\u0644 \u062D\u0631\u06CC\u0631 \u0639\u0631\u0648\u0633 \u0648 \u067E\u0631\u062F\u0647\u200C\u0647\u0627\u06CC \u062D\u0627\u0634\u06CC\u0647 \u0644\u0648\u06A9\u0633.",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    unit: "\u0645\u062A\u0631",
    material: "Chiffon Polyester",
    color: "Lavender Tint"
  },
  {
    id: "p18",
    name: "Embossed Patterned Organza",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0627\u0631\u06AF\u0627\u0646\u0632\u0627 \u0637\u0631\u062D\u200C\u062F\u0627\u0631 \u0628\u0631\u062C\u0633\u062A\u0647 \u0622\u0647\u0627\u0631\u062F\u0627\u0631",
    storeId: "s9",
    storeName: "Harir Shiraz",
    price: 165e3,
    category: "fabric",
    description: "Stiff, textured organza with elegant floral embroidery patterns for structural skirts and gowns.",
    persianDescription: "\u0627\u0631\u06AF\u0627\u0646\u0632\u0627\u06CC \u0646\u06CC\u0645\u0647 \u0634\u0641\u0627\u0641 \u0622\u0647\u0627\u0631\u062F\u0627\u0631 \u0628\u0627 \u06AF\u0644\u062F\u0648\u0632\u06CC\u200C\u0647\u0627\u06CC \u0638\u0631\u06CC\u0641 \u06AF\u0644 \u0645\u0631\u06CC\u0645 \u0628\u0631\u062C\u0633\u062A\u0647\u060C \u0639\u0627\u0644\u06CC \u0628\u0631\u0627\u06CC \u067E\u0641 \u062F\u0627\u0645\u0646 \u0648 \u0622\u0633\u062A\u06CC\u0646\u200C\u0647\u0627\u06CC \u0641\u0627\u0646\u062A\u0632\u06CC \u0645\u062C\u0644\u0633\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    stock: 90,
    unit: "\u0645\u062A\u0631",
    material: "Organza Nylon-Silk",
    color: "Blush Pink"
  },
  // s10 Natural Fiber Co.
  {
    id: "p19",
    name: "Premium Slub Linen Natural Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0644\u0646\u06CC\u0646 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC \u0627\u0633\u0644\u067E \u062F\u0631\u062C\u0647 \u06CC\u06A9",
    storeId: "s10",
    storeName: "Natural Fiber Co.",
    price: 195e3,
    category: "fabric",
    description: "Lightweight and highly breathable linen with premium slub textures. Perfect for cool trousers and summer blouses.",
    persianDescription: "\u0644\u0646\u06CC\u0646 \u0635\u062F\u062F\u0631\u0635\u062F \u067E\u0646\u0628\u0647 \u0628\u062F\u0648\u0646 \u0645\u0648\u0627\u062F \u067E\u0644\u0627\u0633\u062A\u06CC\u06A9\u06CC \u0628\u0627 \u0628\u0627\u0641\u062A \u0631\u0627\u0647\u200C\u0631\u0627\u0647 \u0627\u0641\u0642\u06CC \u0627\u0633\u0644\u067E \u0628\u0633\u06CC\u0627\u0631 \u0634\u06CC\u06A9\u060C \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u0627\u0628\u0633\u062A\u0627\u0646\u0647 \u06A9\u0698\u0648\u0627\u0644.",
    imageUrl: "https://images.unsplash.com/photo-1545007805-a44ee834a8be?auto=format&fit=crop&w=600&q=80",
    stock: 110,
    unit: "\u0645\u062A\u0631",
    material: "100% Slub Linen",
    color: "Off-White Oatmeal"
  },
  {
    id: "p20",
    name: "Men Eco-Friendly Organic Shirt",
    persianName: "\u067E\u06CC\u0631\u0627\u0647\u0646 \u0645\u0631\u062F\u0627\u0646\u0647 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u0628\u0627\u0631\u0627\u0646",
    storeId: "s10",
    storeName: "Natural Fiber Co.",
    price: 49e4,
    category: "apparel",
    description: "Pure pre-shrunk organic cotton shirt with comfortable loose tailoring and wooden collar buttons.",
    persianDescription: "\u067E\u06CC\u0631\u0627\u0647\u0646 \u062F\u06A9\u0645\u0647\u200C\u062F\u0627\u0631 \u0645\u0631\u062F\u0627\u0646\u0647 \u0627\u0644\u06CC\u0627\u0641 \u0637\u0628\u06CC\u0639\u06CC\u060C \u0634\u0633\u062A\u200C\u0648\u0634\u0648 \u0631\u0641\u062A\u0647 \u0628\u062F\u0648\u0646 \u0622\u0628\u0631\u0641\u062A\u060C \u0628\u0627 \u06CC\u0642\u0647 \u062F\u06CC\u067E\u0644\u0645\u0627\u062A \u0648 \u062F\u06A9\u0645\u0647\u200C\u0647\u0627\u06CC \u0686\u0648\u0628 \u06AF\u0631\u062F\u0648.",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    unit: "\u0639\u062F\u062F",
    material: "Organic Cotton Flannel",
    color: "Ocean Indigo"
  },
  // s11 Baloch Needlework
  {
    id: "p21",
    name: "Stunning Polivar Hand-Embroidered Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0648 \u067E\u0644\u06CC\u0648\u0627\u0631 \u062F\u0633\u062A\u200C\u0628\u0627\u0641\u062A \u0628\u0644\u0648\u0686\u06CC \u0632\u0627\u0647\u062F\u0627\u0646",
    storeId: "s11",
    storeName: "Baloch Needlework",
    price: 18e5,
    category: "traditional",
    description: "Extremely detailed ethnic panel completely hand-embroidered by local artisan women in Balochistan. Heavy colorful silk geometric threadings.",
    persianDescription: "\u06CC\u06A9 \u0642\u0637\u0639\u0647 \u0642\u0648\u0627\u0631\u0647 \u067E\u0646\u0644 \u0633\u0648\u0632\u0646\u062F\u0648\u0632\u06CC \u0627\u0635\u06CC\u0644 \u062F\u0633\u062A\u200C\u062F\u0648\u0632 \u0633\u06CC\u0633\u062A\u0627\u0646 \u0628\u0627 \u0646\u0642\u0648\u0634 \u0647\u0646\u062F\u0633\u06CC \u0628\u06CC\u200C\u0646\u0638\u06CC\u0631 \u067E\u0644\u06CC\u0648\u0627\u0631\u0628\u0627\u0641\u06CC \u06AF\u0631\u0627\u0646\u200C\u0628\u0647\u0627 \u0648 \u0622\u06CC\u0646\u0647\u200C\u062F\u0648\u0632\u06CC \u0638\u0631\u06CC\u0641.",
    imageUrl: "https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=600&q=80",
    stock: 4,
    unit: "\u0642\u0648\u0627\u0631\u0647",
    material: "Silk Thread on Heavy Cotton Canvas",
    color: "Vibrant Crimson Multi"
  },
  {
    id: "p22",
    name: "Traditional Baloch Border Trim",
    persianName: "\u0646\u0648\u0627\u0631 \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0633\u0646\u062A\u06CC \u0639\u0631\u06CC\u0636 \u0645\u062A\u0631\u06CC",
    storeId: "s11",
    storeName: "Baloch Needlework",
    price: 75e3,
    category: "notions",
    description: "4cm wide traditional Balochi embroidered trim ribbon for embellishing sleeve ends and robe collars.",
    persianDescription: "\u0646\u0648\u0627\u0631 \u0633\u0648\u0632\u0646\u062F\u0648\u0632\u06CC \u0639\u0631\u06CC\u0636 \u06F4 \u0633\u0627\u0646\u062A\u06CC \u0645\u062A\u0631\u06CC \u062C\u0647\u062A \u062A\u0632\u0626\u06CC\u0646 \u062F\u0645\u200C\u0622\u0633\u062A\u06CC\u0646\u060C \u06CC\u0642\u0647 \u0645\u0627\u0646\u062A\u0648 \u0648 \u062D\u0627\u0634\u06CC\u0647 \u0634\u0627\u0644\u200C\u0647\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0645\u062F \u0627\u06CC\u0631\u0627\u0646\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1544030109-47bb65c47e4a?auto=format&fit=crop&w=600&q=80",
    stock: 200,
    unit: "\u0645\u062A\u0631",
    material: "Cotton Silk Thread",
    color: "Red Gold Black"
  },
  // s12 Pars Fabric World
  {
    id: "p23",
    name: "Tergal All-Season Dress Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u062A\u0631\u06AF\u0627\u0644 \u0631\u0646\u06AF\u06CC \u062F\u0631\u062C\u0647 \u06CC\u06A9 \u0645\u0627\u0646\u062A\u0648\u06CC\u06CC",
    storeId: "s12",
    storeName: "Pars Fabric World",
    price: 95e3,
    category: "fabric",
    description: "Premium Tergal fabric with highly stable dye and zero pilling. Ideal for uniforms, coats, and durable apparel.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u062A\u0631\u06AF\u0627\u0644 \u0641\u062F\u06A9 \u0636\u062E\u06CC\u0645\u060C \u0628\u0627 \u062A\u062B\u0628\u06CC\u062A \u0631\u0646\u06AF \u0639\u0627\u0644\u06CC \u062F\u0631 \u0634\u0633\u062A\u0634\u0648\u06CC \u0645\u062F\u0627\u0648\u0645\u060C \u0628\u062F\u0648\u0646 \u0686\u0631\u0648\u06A9\u200C\u067E\u0630\u06CC\u0631\u06CC\u060C \u0645\u0646\u0627\u0633\u0628 \u062F\u0648\u062E\u062A \u0631\u0648\u067E\u0648\u0634 \u0645\u062F\u0627\u0631\u0633 \u0648 \u0644\u0628\u0627\u0633 \u06A9\u0627\u0631.",
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80",
    stock: 300,
    unit: "\u0645\u062A\u0631",
    material: "Polyester Viscose Tergal",
    color: "Navy Blue"
  },
  {
    id: "p24",
    name: "Premium Crepe Maserati Stretch",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u0631\u067E \u06A9\u0634 \u0645\u0627\u0632\u0631\u0627\u062A\u06CC \u0645\u0634\u06A9\u06CC \u062F\u0631\u062C\u0647 \u06CC\u06A9",
    storeId: "s12",
    storeName: "Pars Fabric World",
    price: 18e4,
    category: "fabric",
    description: "Smooth luxury crepe fabric with comfortable stretch. Great for skirts and formal slacks.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u0631\u067E \u0645\u0627\u0632\u0631\u0627\u062A\u06CC \u062A\u0631\u06A9 \u0628\u0627 \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627\u060C \u0631\u06CC\u0632\u0634 \u0628\u0633\u06CC\u0627\u0631 \u0634\u06CC\u06A9 \u0648 \u0633\u0646\u06AF\u06CC\u0646 \u0648 \u06A9\u0634\u0633\u0627\u0646\u06CC \u062F\u0648\u0637\u0631\u0641\u0647\u060C \u0645\u0646\u0627\u0633\u0628 \u062F\u0648\u062E\u062A \u06A9\u062A \u0634\u0644\u0648\u0627\u0631 \u0632\u0646\u0627\u0646\u0647 \u0645\u062C\u0644\u0633\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    stock: 140,
    unit: "\u0645\u062A\u0631",
    material: "Polyester Spandex Crepe",
    color: "Charcoal Black"
  },
  // s13 Alborz Denim
  {
    id: "p25",
    name: "Raw Stretch Lycra Denim",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u06A9\u062A\u0627\u0646 \u062C\u06CC\u0646 \u06A9\u0634\u06CC \u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u062A\u06CC\u0631\u0647",
    storeId: "s13",
    storeName: "Alborz Denim",
    price: 175e3,
    category: "fabric",
    description: "Lycra denim fabric with excellent recovery and Indigo dye. Perfect for tailor fit fashion jeans.",
    persianDescription: "\u06A9\u062A\u0627\u0646 \u062C\u06CC\u0646 \u0644\u06CC \u06A9\u0634\u06CC \u0646\u0631\u0645\u060C \u0645\u0646\u0627\u0633\u0628 \u0634\u0644\u0648\u0627\u0631\u0647\u0627\u06CC \u062C\u0630\u0628 \u0627\u0646\u062F\u0627\u0645\u06CC \u0632\u0646\u0627\u0646\u0647 \u0648 \u0645\u0631\u062F\u0627\u0646\u0647 \u0628\u0627 \u0628\u0627\u0632\u06AF\u0634\u062A \u06A9\u0634 \u0639\u0627\u0644\u06CC \u067E\u0633 \u0627\u0632 \u0686\u0646\u062F\u06CC\u0646 \u0628\u0627\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647.",
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    unit: "\u0645\u062A\u0631",
    material: "97% Cotton 3% Lycra Denim",
    color: "Midnight Indigo"
  },
  {
    id: "p26",
    name: "Heavy-Duty 100% Cotton Canvas",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0628\u0631\u0632\u0646\u062A \u06A9\u062A\u0627\u0646 \u0636\u062E\u06CC\u0645 \u06A9\u06CC\u0641 \u0648 \u0628\u0627\u0631\u0627\u0646\u06CC",
    storeId: "s13",
    storeName: "Alborz Denim",
    price: 21e4,
    category: "fabric",
    description: "Water-resistant heavy cotton canvas for sewing durable backpacks, bags, and outdoor jackets.",
    persianDescription: "\u0628\u0631\u0632\u0646\u062A \u06A9\u062A\u0627\u0646 \u0635\u062F\u062F\u0631\u0635\u062F \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u0628\u0627 \u0631\u0648\u06A9\u0634 \u0645\u0648\u0645 \u0646\u06CC\u0645\u0647 \u0636\u062F\u0622\u0628\u060C \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0645\u0642\u0627\u0648\u0645 \u0628\u0631\u0627\u06CC \u06A9\u06CC\u0641\u060C \u06A9\u0648\u0644\u0647 \u067E\u0634\u062A\u06CC \u0648 \u067E\u0627\u0644\u062A\u0648\u0647\u0627\u06CC \u0647\u0648\u062F\u06CC \u0627\u0633\u067E\u0631\u062A.",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    stock: 75,
    unit: "\u0645\u062A\u0631",
    material: "Waxed Cotton Canvas",
    color: "Army Olive Green"
  },
  // s14 Velvet Kashan
  {
    id: "p27",
    name: "Royal Suede Velvet Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062E\u0645\u0644 \u0633\u0648\u0626\u06CC\u062A \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627 \u062F\u0631\u062C\u0647 \u06CC\u06A9",
    storeId: "s14",
    storeName: "Velvet Kashan",
    price: 24e4,
    category: "fabric",
    description: "Thick suede-finished velvet with a soft touch. Perfect for luxurious fall coats and upholstery details.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0633\u0648\u0626\u06CC\u062A \u0645\u062E\u0645\u0644 \u063A\u0648\u0627\u0635\u06CC \u06F4\u06F8\u06F0 \u06AF\u0631\u0645\u06CC\u060C \u0631\u06CC\u0632\u0634 \u0633\u0646\u06AF\u06CC\u0646 \u0639\u0627\u0644\u06CC\u060C \u0628\u0633\u06CC\u0627\u0631 \u0644\u0637\u06CC\u0641 \u0648 \u06AF\u0631\u0645\u060C \u0628\u062F\u0648\u0646 \u0633\u0627\u06CC\u06CC\u062F\u06AF\u06CC \u0645\u0646\u0627\u0633\u0628 \u067E\u0627\u0644\u062A\u0648 \u0648 \u06A9\u062A \u0632\u0645\u0633\u062A\u0627\u0646\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80",
    stock: 80,
    unit: "\u0645\u062A\u0631",
    material: "Micro Suede Velvet",
    color: "Mustard Golden Brown"
  },
  {
    id: "p28",
    name: "Gold Traditional Velvet Brocade",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062E\u0645\u0644 \u0632\u0631\u06A9\u0648\u0628 \u0633\u0646\u062A\u06CC \u06A9\u0627\u0634\u0627\u0646",
    storeId: "s14",
    storeName: "Velvet Kashan",
    price: 65e4,
    category: "traditional",
    description: "Exquisite heavy royal velvet featuring intricate woven gold thread floral patterns of Persia.",
    persianDescription: "\u0645\u062E\u0645\u0644 \u0645\u062C\u0644\u0644 \u0632\u0631\u06A9\u0648\u0628 \u06A9\u0627\u0634\u0627\u0646 \u0628\u0627 \u06AF\u0644\u0647\u0627\u06CC \u0628\u0631\u062C\u0633\u062A\u0647 \u0632\u0631\u06CC\u200C\u0628\u0627\u0641\u06CC \u0633\u0646\u062A\u06CC\u060C \u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0632\u0631\u06CC\u0646 \u0645\u0646\u0627\u0633\u0628 \u0627\u0644\u0628\u0633\u0647 \u0634\u0627\u0647\u0627\u0646\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0648 \u062F\u06A9\u0648\u0631\u0627\u0633\u06CC\u0648\u0646.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    unit: "\u0645\u062A\u0631",
    material: "Velvet Silk with Lurex",
    color: "Teal Gold"
  },
  // s15 Negin Haberdashery
  {
    id: "p29",
    name: "Natural Handmade Shell Buttons Pack",
    persianName: "\u062F\u06A9\u0645\u0647 \u0635\u062F\u0641 \u0637\u0628\u06CC\u0639\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632 (\u0628\u0633\u062A\u0647 \u06F1\u06F0 \u0639\u062F\u062F\u06CC)",
    storeId: "s15",
    storeName: "Negin Haberdashery",
    price: 12e4,
    category: "notions",
    description: "Pack of 10 handcrafted genuine sea shell buttons with beautiful iridescent rainbow reflections.",
    persianDescription: "\u0628\u0633\u062A\u0647 \u06F1\u06F0 \u0639\u062F\u062F\u06CC \u062F\u06A9\u0645\u0647 \u062A\u0631\u0627\u0634\u06CC\u062F\u0647 \u0634\u062F\u0647 \u0627\u0632 \u0635\u062F\u0641 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0637\u0628\u06CC\u0639\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633\u060C \u0628\u0627 \u0628\u0627\u0632\u062A\u0627\u0628 \u0631\u0646\u06AF\u06CC\u0646\u200C\u06A9\u0645\u0627\u0646\u06CC \u062E\u06CC\u0631\u0647\u200C\u06A9\u0646\u0646\u062F\u0647.",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    unit: "\u0628\u0633\u062A\u0647",
    material: "Natural Sea Shell",
    color: "Iridescent Pearl"
  },
  {
    id: "p30",
    name: "Turkish Premium Silk Thread Spool",
    persianName: "\u0642\u0631\u0642\u0631\u0647 \u0646\u062E \u0627\u0628\u0631\u06CC\u0634\u0645 \u062A\u0631\u06A9 \u06CC\u0648\u0632\u0628\u0627\u06CC \u06F1\u06F0\u06F0\u06F0 \u0645\u062A\u0631\u06CC",
    storeId: "s15",
    storeName: "Negin Haberdashery",
    price: 35e3,
    category: "notions",
    description: "Extremely high strength silk thread spool for premium tailoring and embroidery details.",
    persianDescription: "\u0642\u0631\u0642\u0631\u0647 \u0646\u062E \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0645\u0645\u062A\u0627\u0632 \u0648\u0627\u0631\u062F\u0627\u062A\u06CC \u062A\u0631\u06A9\u06CC\u0647 \u0628\u0627 \u062A\u0627\u0628 \u0639\u0627\u0644\u06CC \u0648 \u062F\u0631\u062E\u0634\u0627\u0646\u060C \u0628\u0633\u06CC\u0627\u0631 \u0645\u0642\u0627\u0648\u0645 \u062F\u0631 \u0645\u0642\u0627\u0628\u0644 \u06A9\u0634\u0634 \u0645\u062E\u0635\u0648\u0635 \u062F\u0648\u062E\u062A\u200C\u0647\u0627\u06CC \u062A\u0632\u0626\u06CC\u0646\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    stock: 300,
    unit: "\u0639\u062F\u062F",
    material: "Turkish Spun Silk",
    color: "Golden Honey"
  },
  // s16 Saba Iranian Wear
  {
    id: "p31",
    name: "Men Hand-Embroidered Traditional Vest",
    persianName: "\u062C\u0644\u06CC\u0642\u0647 \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0633\u0646\u062A\u06CC \u0645\u0631\u062F\u0627\u0646\u0647 \u0637\u0631\u062D \u0635\u0628\u0627",
    storeId: "s16",
    storeName: "Saba Iranian Wear",
    price: 58e4,
    category: "apparel",
    description: "Exquisite tailored mens vest with handloom Baloch trims and traditional front buttons. Perfect for styling over white linen shirts.",
    persianDescription: "\u062C\u0644\u06CC\u0642\u0647 \u062C\u0644\u0648 \u0628\u0627\u0632 \u0645\u0631\u062F\u0627\u0646\u0647 \u0622\u0633\u062A\u0631\u062F\u0627\u0631 \u0628\u0627 \u0642\u0648\u0627\u0631\u0647 \u06A9\u0644\u0627\u0633\u06CC\u06A9 \u0627\u06CC\u0631\u0627\u0646\u06CC\u060C \u06A9\u0627\u0631 \u0634\u062F\u0647 \u0628\u0627 \u0646\u0648\u0627\u0631\u0647\u0627\u06CC \u06AF\u0631\u0627\u0646\u200C\u0628\u0647\u0627\u06CC \u0633\u0648\u0632\u0646\u200C\u062F\u0648\u0632\u06CC \u0633\u0646\u062A\u06CC \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC \u0633\u0631\u062E.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    stock: 14,
    unit: "\u0639\u062F\u062F",
    material: "Canvas with Silk Trims",
    color: "Teal Crimson"
  },
  {
    id: "p32",
    name: "Traditional Pleated Atlas Skirt",
    persianName: "\u062F\u0627\u0645\u0646 \u067E\u0631\u0686\u06CC\u0646 \u0628\u0644\u0646\u062F \u0633\u0646\u062A\u06CC \u0627\u0637\u0644\u0633 \u0631\u0646\u06AF\u06CC\u0646",
    storeId: "s16",
    storeName: "Saba Iranian Wear",
    price: 62e4,
    category: "apparel",
    description: "Flowy pleated skirt inspired by northern Gilaki models, crafted in shiny satin and bordered with colourful ribbon stripes.",
    persianDescription: "\u062F\u0627\u0645\u0646 \u067E\u0631\u0686\u06CC\u0646 \u0646\u0648\u0633\u062A\u0627\u0644\u0698\u06CC\u06A9 \u06AF\u06CC\u0644\u06A9\u06CC \u0628\u0644\u0646\u062F \u0628\u0627 \u062A\u0648\u0631\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF \u0648 \u0631\u0648\u0628\u0627\u0646\u200C\u0647\u0627\u06CC \u0631\u0646\u06AF\u0627\u0631\u0646\u06AF \u062F\u0648\u0632\u06CC \u0634\u062F\u0647 \u0633\u0646\u062A\u06CC \u0628\u0631 \u0628\u0633\u062A\u0631 \u0633\u0627\u062A\u0646 \u0627\u0637\u0644\u0633 \u062F\u0631\u062E\u0634\u0627\u0646.",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    unit: "\u0639\u062F\u062F",
    material: "Satin and Ribbon Trim",
    color: "Multicolor Rainbow"
  },
  // s17 Apadana Suiting
  {
    id: "p33",
    name: "Fine Merino Wool Suit Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0641\u0627\u0633\u062A\u0648\u0646\u06CC \u067E\u0634\u0645 \u062A\u062A\u0631\u0648\u0646 \u0645\u0637\u0647\u0631\u06CC \u0633\u0631\u0645\u0647\u200C\u0627\u06CC",
    storeId: "s17",
    storeName: "Apadana Suiting",
    price: 39e4,
    category: "fabric",
    description: "High-grade merino wool blend suiting fabric. Smooth texture, crease-resistant, and premium formal appearance.",
    persianDescription: "\u0641\u0627\u0633\u062A\u0648\u0646\u06CC \u0645\u0637\u0647\u0631\u06CC (\u062A\u062D\u062A \u0644\u06CC\u0633\u0627\u0646\u0633 \u0633\u0644\u06A9\u0627 \u0627\u0646\u06AF\u0644\u0633\u062A\u0627\u0646) \u0628\u0627 \u06F4\u06F5\u066A \u067E\u0634\u0645 \u0637\u0628\u06CC\u0639\u06CC \u0645\u0631\u06CC\u0646\u0648 \u0648 \u06F5\u06F5\u066A \u062A\u062A\u0631\u0648\u0646\u060C \u0628\u0627 \u067E\u0631\u0633\u062A\u06CC\u0698 \u0639\u0627\u0644\u06CC \u0648 \u0627\u06CC\u0633\u062A \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u062A \u0634\u0644\u0648\u0627\u0631.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    stock: 80,
    unit: "\u0645\u062A\u0631",
    material: "45% Wool, 55% Tetron",
    color: "Deep Navy Blue"
  },
  {
    id: "p34",
    name: "English Herringbone Tweed Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u067E\u0634\u0645\u06CC \u062C\u0646\u0627\u063A\u06CC \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u06A9\u062A \u062A\u06A9",
    storeId: "s17",
    storeName: "Apadana Suiting",
    price: 45e4,
    category: "fabric",
    description: "Classic rustic English Herringbone weave tweed, thick and texturized for gentleman blazers.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u062A\u0648\u0626\u06CC\u062F \u067E\u0634\u0645\u06CC \u0636\u062E\u06CC\u0645 \u0628\u0627 \u0628\u0627\u0641\u062A \u0633\u0646\u062A\u06CC \u062C\u0646\u0627\u063A\u06CC\u060C \u0628\u0633\u06CC\u0627\u0631 \u0628\u0627\u062F\u0648\u0627\u0645\u060C \u0645\u0646\u0627\u0633\u0628 \u06A9\u062A \u062A\u06A9\u200C\u0647\u0627\u06CC \u0627\u0633\u067E\u0631\u062A \u0645\u0631\u062F\u0627\u0646\u0647 \u067E\u0627\u06CC\u06CC\u0632\u06CC \u0627\u0633\u062A\u0627\u06CC\u0644 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    unit: "\u0645\u062A\u0631",
    material: "Virgin Wool Tweed",
    color: "Forest Green Oak"
  },
  // s18 Bond Street Apparel
  {
    id: "p35",
    name: "Classic Mens Woolen Overcoat",
    persianName: "\u067E\u0627\u0644\u062A\u0648 \u0641\u0648\u062A\u0631 \u0645\u0631\u062F\u0627\u0646\u0647 \u06A9\u0644\u0627\u0633\u06CC\u06A9 \u06CC\u0642\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u062A\u0628\u0631\u06CC\u0632",
    storeId: "s18",
    storeName: "Bond Street Apparel",
    price: 185e4,
    category: "apparel",
    description: "Finished premium heavy woolen coat. Expertly tailored with double stitching and satin lining.",
    persianDescription: "\u067E\u0627\u0644\u062A\u0648 \u062F\u0648\u062E\u062A\u0647\u200C\u0634\u062F\u0647 \u0622\u0645\u0627\u062F\u0647 \u0627\u0632 \u067E\u0634\u0645 \u0641\u0648\u062A\u0631 \u06A9\u0648\u0628\u06CC\u062F\u0647 \u062A\u0628\u0631\u06CC\u0632\u060C \u0622\u0633\u062A\u0631\u062F\u0627\u0631 \u0633\u0627\u062A\u0646 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0628\u0633\u06CC\u0627\u0631 \u0628\u0627\u067E\u0631\u0633\u062A\u06CC\u0698\u060C \u06CC\u0642\u0647 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u067E\u0647\u0646 \u06A9\u0644\u0627\u0633\u06CC\u06A9.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    unit: "\u0639\u062F\u062F",
    material: "Wool Footer with Satin Lining",
    color: "Classic Charcoal Grey"
  },
  {
    id: "p36",
    name: "Plaid Tailored Autumn Blazer",
    persianName: "\u06A9\u062A \u062A\u06A9 \u0627\u0633\u067E\u0631\u062A \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u0646\u06CC\u0645\u0647\u200C\u0631\u0633\u0645\u06CC \u06A9\u0698\u0648\u0627\u0644",
    storeId: "s18",
    storeName: "Bond Street Apparel",
    price: 145e4,
    category: "apparel",
    description: "Expertly crafted single-breasted plaid coat with slim fit contours.",
    persianDescription: "\u06A9\u062A \u062A\u06A9 \u0646\u06CC\u0645\u0647\u200C\u0631\u0633\u0645\u06CC \u0627\u0633\u0644\u06CC\u0645\u200C\u0641\u06CC\u062A \u0628\u0627 \u0686\u0647\u0627\u0631\u062E\u0627\u0646\u0647 \u0637\u0648\u0633\u06CC \u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u0638\u0631\u06CC\u0641\u060C \u062F\u0627\u0631\u0627\u06CC \u062C\u06CC\u0628 \u062C\u0644\u06CC\u0642\u0647\u200C\u0627\u06CC \u0648 \u062F\u0648 \u0686\u0627\u06A9 \u067E\u0634\u062A\u060C \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0634\u200C\u062F\u0648\u062E\u062A.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    stock: 11,
    unit: "\u0639\u062F\u062F",
    material: "Tweed Plaid Woolen",
    color: "Earth Brown Grey"
  },
  // s19 Hirkan Spinning Co.
  {
    id: "p37",
    name: "Hand-Spun Natural Wool Yarn Skein",
    persianName: "\u06A9\u0644\u0627\u0641 \u06A9\u0627\u0645\u0648\u0627 \u067E\u0634\u0645\u06CC \u0637\u0628\u06CC\u0639\u06CC \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0647\u06CC\u0631\u06A9\u0627\u0646",
    storeId: "s19",
    storeName: "Hirkan Spinning Co.",
    price: 65e3,
    category: "notions",
    description: "Organic hand-spun yarn skein from local sheep fleece, natural plant dyed. Perfect for knitting cozy winter socks and winter shawls.",
    persianDescription: "\u06A9\u0644\u0627\u0641 \u06A9\u0627\u0645\u0648\u0627\u06CC \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u067E\u0634\u0645 \u062E\u0627\u0644\u0635 \u0628\u0647\u0627\u0631\u0647 \u0628\u0631\u0647\u060C \u0631\u0646\u06AF\u200C\u0622\u0645\u06CC\u0632\u06CC \u0634\u062F\u0647 \u0633\u0646\u062A\u06CC \u0628\u0627 \u06AF\u0631\u062F\u0648 \u0648 \u0627\u0646\u0627\u0631\u060C \u0628\u06CC \u0646\u0638\u06CC\u0631 \u0628\u0631\u0627\u06CC \u0628\u0627\u0641\u062A \u062F\u0633\u062A\u06A9\u0634 \u0648 \u0634\u0627\u0644\u200C\u06AF\u0631\u062F\u0646 \u062F\u0646\u062C.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    stock: 120,
    unit: "\u0639\u062F\u062F",
    material: "100% Sheep Wool",
    color: "Natural Walnut Gold"
  },
  {
    id: "p38",
    name: "Organic Unbleached Cotton Crochet Thread",
    persianName: "\u0646\u062E \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u062E\u0627\u0645 \u0642\u0644\u0627\u0628\u200C\u0628\u0627\u0641\u06CC \u0648 \u06AF\u06CC\u0648\u0647\u200C\u0628\u0627\u0641\u06CC",
    storeId: "s19",
    storeName: "Hirkan Spinning Co.",
    price: 48e3,
    category: "notions",
    description: "Extremely durable pure organic cotton thread for handmade crochet crafts, dreamcatchers, and traditional shoes (Giveh).",
    persianDescription: "\u062F\u0648\u06A9 \u0646\u062E \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u062E\u0627\u0645 \u0636\u062E\u06CC\u0645\u060C \u062A\u0635\u0641\u06CC\u0647 \u0646\u0634\u062F\u0647 \u0628\u0633\u06CC\u0627\u0631 \u0645\u0642\u0627\u0648\u0645 \u0628\u0631\u0627\u06CC \u0645\u06A9\u0631\u0648\u0645\u0647\u200C\u0628\u0627\u0641\u06CC\u060C \u0642\u0644\u0627\u0628\u200C\u0628\u0627\u0641\u06CC \u0633\u0646\u062A\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u06A9\u0641\u0634 \u06AF\u06CC\u0648\u0647 \u0645\u062D\u0644\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    stock: 90,
    unit: "\u0639\u062F\u062F",
    material: "Raw Cotton Thread",
    color: "Ecru Cream"
  },
  // s20 Khazar Weaving Mills
  {
    id: "p39",
    name: "Sportswear Premium Stretch Rayon",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0631\u06CC\u0648\u0646 \u06A9\u0634\u06CC \u0648\u0631\u0632\u0634\u06CC \u0636\u062E\u06CC\u0645 \u0648\u0631\u0632\u0634\u06CC",
    storeId: "s20",
    storeName: "Khazar Weaving Mills",
    price: 12e4,
    category: "fabric",
    description: "Thick elastic rayon material perfect for workout leggings, custom activewear, and stretch dresses.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0648\u0631\u0632\u0634\u06CC \u0631\u06CC\u0648\u0646 \u06A9\u0631\u06CC\u0633\u062A\u0627\u0644 \u0636\u062E\u06CC\u0645 \u0628\u0627 \u06A9\u0634\u0633\u0627\u0646\u06CC \u06F4 \u062C\u0647\u062A\u0647 \u0639\u0627\u0644\u06CC \u0628\u062F\u0648\u0646 \u0686\u0631\u0648\u06A9\u060C \u0645\u0646\u0627\u0633\u0628 \u0634\u0644\u0648\u0627\u0631 \u0644\u06AF\u060C \u062A\u06CC\u200C\u0634\u0631\u062A \u0648\u0631\u0632\u0634\u06CC \u0648 \u067E\u0648\u0634\u0627\u06A9 \u062A\u0645\u0631\u06CC\u0646.",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    stock: 200,
    unit: "\u0645\u062A\u0631",
    material: "Rayon Spandex",
    color: "Royal Steel Blue"
  },
  {
    id: "p40",
    name: "Waterproof Nylon Windbreaker Fabric",
    persianName: "\u067E\u0627\u0631\u0686\u0647 \u0634\u0645\u0639\u06CC \u0636\u062F\u0622\u0628 \u06A9\u0627\u067E\u0634\u0646\u06CC \u0645\u0645\u0648\u0631\u06CC \u06AF\u0631\u0645 \u0628\u0627\u0644\u0627",
    storeId: "s20",
    storeName: "Khazar Weaving Mills",
    price: 145e3,
    category: "fabric",
    description: "High density waterproof nylon fabric with memory finish, ideal for winter raincoats, heavy umbrellas, and puffers.",
    persianDescription: "\u067E\u0627\u0631\u0686\u0647 \u0628\u0627\u062F\u06AF\u06CC\u0631 \u0634\u0645\u0639\u06CC \u0645\u0645\u0648\u0631\u06CC \u0636\u062F\u0622\u0628 \u0628\u0627 \u0631\u0648\u06A9\u0634 \u067E\u06CC\u200C\u06CC\u0648 \u0636\u062E\u06CC\u0645 \u062C\u0647\u062A \u0645\u0645\u0627\u0646\u0639\u062A \u0627\u0632 \u0648\u0631\u0648\u062F \u0628\u0627\u062F \u0648 \u0631\u0637\u0648\u0628\u062A\u060C \u0645\u0646\u0627\u0633\u0628 \u06A9\u0627\u067E\u0634\u0646 \u067E\u0631 \u0648 \u0628\u0627\u0631\u0627\u0646\u06CC.",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    stock: 180,
    unit: "\u0645\u062A\u0631",
    material: "Memory Waterproof Nylon",
    color: "Neon Cyan Accent"
  }
];
var orders = [
  {
    id: "ord-1001",
    customerName: "\u0641\u0627\u0637\u0645\u0647 \u0627\u062D\u0645\u062F\u06CC",
    customerPhone: "09123456789",
    customerAddress: "\u062A\u0647\u0631\u0627\u0646\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0646\u06CC\u0627\u0648\u0631\u0627\u0646\u060C \u06A9\u0648\u0686\u0647 \u0645\u0631\u06CC\u0645\u060C \u067E\u0644\u0627\u06A9 \u06F1\u06F0",
    items: [
      {
        productId: "p1",
        productName: "Shah Abbasi Premium Termeh",
        persianName: "\u067E\u0627\u0631\u0686\u0647 \u062A\u0631\u0645\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645\u06CC \u0637\u0631\u062D \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC",
        storeName: "Termeh Razavi",
        price: 45e4,
        quantity: 2
      },
      {
        productId: "p3",
        productName: "Hand-Stamped Ghalamkar Pattern Fabric",
        persianName: "\u067E\u0627\u0631\u0686\u0647 \u0645\u062A\u0642\u0627\u0644 \u0642\u0644\u0645\u06A9\u0627\u0631 \u067E\u0646\u0628\u0647\u200C\u0627\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632",
        storeName: "Karbas Esfahan",
        price: 18e4,
        quantity: 3
      }
    ],
    totalAmount: 144e4,
    status: "shipping",
    createdAt: "2026-07-20T14:30:00.000Z"
  }
];
var reviews = [
  {
    id: "rev1",
    storeId: "s1",
    author: "\u0639\u0644\u06CC\u0631\u0636\u0627 \u0634\u0645\u0633",
    rating: 5,
    comment: "\u06A9\u06CC\u0641\u06CC\u062A \u062A\u0631\u0645\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0627\u06CC\u0646 \u063A\u0631\u0641\u0647 \u0648\u0627\u0642\u0639\u0627 \u0628\u06CC\u200C\u0646\u0638\u06CC\u0631 \u0628\u0648\u062F\u060C \u06A9\u0627\u0645\u0644\u0627\u064B \u0628\u0627\u06A9\u06CC\u0641\u06CC\u062A \u0648 \u0628\u0627 \u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647 \u0627\u0635\u0627\u0644\u062A \u0628\u0647 \u062F\u0633\u062A\u0645 \u0631\u0633\u06CC\u062F. \u0628\u0631\u0627\u06CC \u062C\u0647\u06CC\u0632\u06CC\u0647 \u062F\u062E\u062A\u0631\u0645 \u062E\u0631\u06CC\u062F \u06A9\u0631\u062F\u0645.",
    createdAt: "2026-07-18T09:00:00.000Z"
  },
  {
    id: "rev2",
    storeId: "s1",
    author: "\u0633\u0645\u06CC\u0647 \u0639\u0628\u0627\u0633\u06CC",
    rating: 4,
    comment: "\u0631\u0646\u06AF\u200C\u0622\u0645\u06CC\u0632\u06CC \u0631\u0648\u0645\u06CC\u0632\u06CC\u200C\u0647\u0627 \u0628\u0633\u06CC\u0627\u0631 \u0633\u0646\u062A\u06CC \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0627\u0633\u062A. \u0628\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u0634\u06CC\u06A9 \u0628\u0648\u062F \u0648\u0644\u06CC \u0627\u0631\u0633\u0627\u0644 \u062F\u0648 \u0631\u0648\u0632 \u062F\u06CC\u0631\u062A\u0631 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F.",
    createdAt: "2026-07-19T11:20:00.000Z"
  },
  {
    id: "rev3",
    storeId: "s2",
    author: "\u0645\u0633\u0639\u0648\u062F \u0641\u06CC\u0627\u0636",
    rating: 5,
    comment: "\u0645\u0646 \u0628\u0631\u0627\u06CC \u0633\u0641\u0631\u0647 \u0642\u0644\u0645\u06A9\u0627\u0631 \u062A\u0631\u0646\u062C \u0627\u0635\u0641\u0647\u0627\u0646 \u0646\u0638\u0631 \u062B\u0628\u062A \u0645\u06CC\u06A9\u0646\u0645. \u0634\u0633\u062A\u0634\u0648 \u062F\u0627\u062F\u06CC\u0645 \u0648 \u0631\u0646\u06AF \u06AF\u06CC\u0627\u0647\u06CC \u0622\u0646 \u0627\u0635\u0644\u0627\u064B \u062A\u06A9\u0627\u0646 \u0646\u062E\u0648\u0631\u062F. \u062E\u0633\u062A\u0647 \u0646\u0628\u0627\u0634\u06CC\u062F.",
    createdAt: "2026-07-20T16:45:00.000Z"
  },
  {
    id: "rev4",
    storeId: "s11",
    author: "\u0646\u0627\u0632\u0646\u06CC\u0646 \u0631\u0636\u0627\u06CC\u06CC",
    rating: 5,
    comment: "\u0633\u0648\u0632\u0646 \u062F\u0648\u0632\u06CC \u062F\u0633\u062A \u0628\u0644\u0648\u0686\u06CC \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0627\u0633\u062A\u060C \u0627\u0631\u0632\u0634 \u0647\u0631 \u062A\u0648\u0645\u0627\u0646\u06CC \u06A9\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0631\u062F\u0645 \u0631\u0627 \u062F\u0627\u0631\u062F. \u062F\u0633\u062A \u0632\u0646\u0627\u0646 \u0628\u0644\u0648\u0686 \u062F\u0631\u062F \u0646\u06A9\u0646\u0647.",
    createdAt: "2026-07-21T02:15:00.000Z"
  }
];
app.get("/api/stores", (req, res) => {
  res.json(stores);
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/orders", (req, res) => {
  res.json(orders);
});
app.post("/api/orders", (req, res) => {
  const { customerName, customerPhone, customerAddress, items, totalAmount } = req.body;
  if (!customerName || !customerPhone || !customerAddress || !items || !items.length) {
    return res.status(400).json({ error: "Please provide all required customer and cart details." });
  }
  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Not enough stock available for product "${product.persianName}". Available stock is ${product.stock}.` });
      }
      product.stock -= item.quantity;
    }
  }
  const newOrder = {
    id: `ord-${Date.now().toString().slice(-4)}`,
    customerName,
    customerPhone,
    customerAddress,
    items,
    totalAmount,
    status: "pending",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  orders.unshift(newOrder);
  res.status(201).json({ success: true, order: newOrder });
});
app.get("/api/reviews/:storeId", (req, res) => {
  const { storeId } = req.params;
  const storeReviews = reviews.filter((r) => r.storeId === storeId);
  res.json(storeReviews);
});
app.post("/api/reviews/:storeId", (req, res) => {
  const { storeId } = req.params;
  const { author, rating, comment } = req.body;
  if (!author || !rating || !comment) {
    return res.status(400).json({ error: "Author name, rating (1-5) and comment are required." });
  }
  const newReview = {
    id: `rev-${Date.now()}`,
    storeId,
    author,
    rating: Number(rating),
    comment,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  reviews.push(newReview);
  const store = stores.find((s) => s.id === storeId);
  if (store) {
    const storeReviews = reviews.filter((r) => r.storeId === storeId);
    const average = storeReviews.reduce((sum, r) => sum + r.rating, 0) / storeReviews.length;
    store.rating = Number(average.toFixed(1));
    store.reviewCount = storeReviews.length;
  }
  res.status(201).json({ success: true, review: newReview, updatedStore: store });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
