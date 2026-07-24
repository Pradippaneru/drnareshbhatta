import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, ArrowUpRight, X, Sparkles, Quote } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Article } from '../types';

export const BlogSection: React.FC = () => {
  const { blogPosts } = useContent();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Healthcare', 'Leadership', 'Youth', 'Education'];

  const filteredArticles = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((a) => a.category === activeCategory);

  return (
    <section id="blog" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D3B4E]"></span>
            <span>Section 10 · Thought Leadership</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Essays & Writings
          </h2>
          <p className="text-base text-[#2B2B2B]/80 font-light mt-2 max-w-xl">
            Reflections on public health policy, ethical student governance, and youth civic engagement.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAFAF8] rounded-2xl border border-[#D7D7D7]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                  : 'text-[#171717]/70 hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedArticle(article)}
          >
            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#2D3B4E] font-semibold mb-3">
                <span className="px-3 py-1 rounded-full bg-[#2D3B4E]/10">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-[#2B2B2B]/70">
                  <Clock className="w-3.5 h-3.5 text-[#C8A96A]" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2 group-hover:text-[#2D3B4E] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-[#2B2B2B]/80 font-light leading-relaxed mb-4">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D7D7D7]/60 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#171717]">
              <span>Read Essay</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF8] border border-[#D7D7D7] rounded-2xl max-w-3xl w-full p-8 sm:p-12 shadow-2xl relative my-8"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#171717] text-[#F8F6F2] flex items-center justify-center hover:bg-[#C8A96A] hover:text-[#171717] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-bold mb-3">
                {selectedArticle.category} · {selectedArticle.date} · {selectedArticle.readTime}
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717] mb-3 leading-tight">
                {selectedArticle.title}
              </h3>

              <p className="font-serif italic text-lg text-[#2D3B4E] mb-8">
                {selectedArticle.subtitle}
              </p>

              {/* Key Quote */}
              <div className="p-6 rounded-2xl bg-[#F8F6F2] border-l-4 border-[#C8A96A] mb-8">
                <Quote className="w-6 h-6 text-[#C8A96A] mb-2" />
                <p className="font-serif italic text-xl text-[#171717]">
                  “{selectedArticle.keyQuotes[0]}”
                </p>
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-6 text-base text-[#2B2B2B] leading-relaxed font-light mb-8">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#D7D7D7] flex items-center justify-between">
                <span className="text-xs text-[#2B2B2B]/70 uppercase tracking-widest">
                  Authored by Dr. Abrar
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-[#171717] text-[#F8F6F2] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#2D3B4E] transition-colors"
                >
                  Close Essay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
