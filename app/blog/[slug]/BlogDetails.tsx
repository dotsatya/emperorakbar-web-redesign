import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, PlayCircle } from "lucide-react";
import { websiteData } from "@/data/websiteData";

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = websiteData.blogs.items.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  // Typecast to handle the new structured content object
  const content = blog.content as any;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen pb-24">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-4">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-[#1b4b36] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags && blog.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-[10px] font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
          {blog.title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            {content.introduction && (
              <div className="prose prose-stone text-lg text-stone-600 mb-8">
                {content.introduction.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
            {blog.youtubeUrl && (
              <a href={blog.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full transition-all shadow-md">
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Video
              </a>
            )}
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
              {blog.image && (
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Content */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Sections */}
        {content.sections && content.sections.map((section: any, idx: number) => (
          <section key={idx} id={section.id} className="mb-16">
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1b4b36] mb-8 border-b border-stone-200 pb-4">
                {section.heading}
              </h2>
            )}
            
            {section.paragraphs && (
              <div className="prose prose-stone prose-lg max-w-none mb-6">
                {section.paragraphs.map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)}
              </div>
            )}
            
            {section.bullets && (
              <ul className="space-y-4 mb-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100">
                {section.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] mr-4 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-lg leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.subsections && section.subsections.map((sub: any, subIdx: number) => (
              <div key={subIdx} className="mb-10 pl-6 border-l-4 border-[#d4af37]/30">
                {sub.heading && (
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-4">{sub.heading}</h3>
                )}
                {sub.paragraphs && (
                  <div className="prose prose-stone prose-lg max-w-none mb-4">
                    {sub.paragraphs.map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)}
                  </div>
                )}
                {sub.bullets && (
                  <ul className="space-y-2 mb-4 list-disc list-inside text-stone-700 text-lg">
                    {sub.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.takeaway && (
              <div className="bg-[#1b4b36] text-white p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 mt-10 shadow-lg">
                <div className="font-bold text-[#d4af37] uppercase tracking-widest text-sm shrink-0 pt-1">Key Takeaway</div>
                <div className="italic font-serif text-xl md:text-2xl leading-relaxed">{section.takeaway}</div>
              </div>
            )}
          </section>
        ))}

        {/* Video CTA */}
        {content.video && (
          <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white mb-20 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1b4b36]/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">{content.video.title}</h3>
              <p className="text-stone-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">{content.video.description}</p>
              <a href={content.video.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#d4af37] hover:bg-white text-stone-900 font-bold rounded-full transition-colors duration-300">
                Watch Video <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* FAQs */}
        {content.faqs && (
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1b4b36] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {content.faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
                  <h4 className="text-xl font-bold text-stone-900 mb-4">{faq.question}</h4>
                  <p className="text-stone-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing */}
        {content.closing && (
          <div className="prose prose-stone prose-2xl max-w-none mb-20 text-center font-serif font-bold text-[#1b4b36]">
            <p>{content.closing}</p>
          </div>
        )}

        {/* Final CTA */}
        {content.cta && (
          <div className="bg-gradient-to-br from-[#fcfaf5] to-white border border-[#d4af37]/30 rounded-[2.5rem] p-8 md:p-16 text-center mb-16 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">{content.cta.title}</h2>
            <p className="text-stone-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{content.cta.description}</p>
            {content.cta.links && content.cta.links.map((link: any, idx: number) => (
              <Link key={idx} href={link.url} className="inline-flex items-center justify-center px-10 py-4 bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Explore More relatedLinks */}
        {blog.relatedLinks && blog.relatedLinks.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-200">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-8">Explore More</h3>
            <div className="flex flex-col gap-4">
              {blog.relatedLinks.map((link: any, idx: number) => (
                <Link key={idx} href={link.url} className="group flex flex-col sm:flex-row sm:items-center p-6 md:p-8 bg-white rounded-2xl border border-stone-100 hover:border-[#d4af37] hover:shadow-md transition-all">
                  <span className="flex-1 text-lg font-serif font-semibold text-stone-800 group-hover:text-[#1b4b36] transition-colors mb-2 sm:mb-0">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#d4af37]">
                    Read <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
