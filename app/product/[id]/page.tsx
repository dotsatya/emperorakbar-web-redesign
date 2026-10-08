import { Suspense } from "react";
import ProductDetails from "./ProductDetails";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-sans bg-bg-primary min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
          Loading product...
        </div>
      }
    >
      <ProductDetails params={params} />
    </Suspense>
  );
}
