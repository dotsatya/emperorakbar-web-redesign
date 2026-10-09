import { Suspense } from "react";
import BlogDetails from "./BlogDetails";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-sans bg-[#f4f1ea] min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
          Loading blog...
        </div>
      }
    >
      <BlogDetails params={params} />
    </Suspense>
  );
}
