import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

export default function CardamomGradesPage() {
  const { grading } = websiteData.about;

  const getTabStyles = (color: string) => {
    switch (color) {
      case "Purple": return { bg: "bg-[#6b2c58]", text: "text-white", border: "border-[#6b2c58]", shadow: "shadow-purple-900/20 shadow-lg" };
      case "Pink": return { bg: "bg-white", text: "text-pink-500", border: "border-stone-200", hover: "hover:bg-pink-50" };
      case "Green": return { bg: "bg-white", text: "text-green-600", border: "border-stone-200", hover: "hover:bg-green-50" };
      case "Orange": return { bg: "bg-white", text: "text-orange-500", border: "border-stone-200", hover: "hover:bg-orange-50" };
      case "Red": return { bg: "bg-white", text: "text-red-500", border: "border-stone-200", hover: "hover:bg-red-50" };
      default: return { bg: "bg-white", text: "text-stone-600", border: "border-stone-200", hover: "hover:bg-stone-50" };
    }
  };

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-24 px-6 max-w-6xl mx-auto w-full mt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            Five Grades. One Standard of Quality.
          </h1>
          <p className="text-stone-500 font-serif italic text-lg">
            Colour-coded for your perfect choice.
          </p>
        </div>

        {/* Tabs from websiteData.json */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {grading.map((grade) => {
            const styles = getTabStyles(grade.color);
            return (
              <button
                key={grade.color}
                className={`${styles.bg} ${styles.border} ${styles.shadow || ""} ${styles.hover || ""} px-6 py-4 rounded-full flex flex-col items-center justify-center w-40 transition-colors border`}
              >
                <span className={`font-bold tracking-widest text-sm uppercase ${styles.text} mb-1`}>
                  {grade.color}
                </span>
                <span className={`text-xs opacity-80 ${grade.color === "Purple" ? "text-stone-200" : "text-stone-500"}`}>
                  {grade.diameter}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm max-w-3xl mx-auto text-center">
           <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">What makes the difference?</h3>
           <p className="text-stone-600 leading-relaxed">
             Cardamoms are graded based on their pod diameter, not the pod length as is often misunderstood, and their seed density. The fatter the pod, the more bang for your buck! Size wise, the pods are then sealed into colour-coded packaging for easy identification. The quality remains world-class across all packs.
           </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
