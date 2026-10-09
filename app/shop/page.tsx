import { websiteData } from "@/data/websiteData";
import ShopProductCard from "@/components/shop/ShopProductCard";

export default function ShopPage() {
  const { products, title, sortOptions } = websiteData.shop;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 pb-20 px-6 max-w-7xl mx-auto w-full ">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
              {title}
            </h1>
            <p className="text-stone-500 font-serif italic text-lg">
              Freshly sealed Alleppey Green Cardamom
            </p>
          </div>
          <select className="border border-stone-300 rounded-full px-6 py-3 text-sm text-stone-600 bg-white outline-none focus:border-[#d4af37]">
            {sortOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
