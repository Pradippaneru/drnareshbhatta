import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, MapPin, Calendar, Camera } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { MediaItem } from '../types';

export const MediaGallery: React.FC = () => {
  const { mediaItems } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<MediaItem | null>(null);

  const categories = ['All', 'Community', 'Leadership', 'Photography', 'Events'];

  const filteredItems = selectedCategory === 'All'
    ? mediaItems
    : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="media" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Media & Field Gallery
          </h2>
          <p className="text-base text-[#2B2B2B]/80 font-light mt-2 max-w-xl">
            Visual archive capturing clinical care, youth leadership summits at Kathmandu University, and community health camps.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAFAF8] rounded-2xl border border-[#D7D7D7]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                  : 'text-[#171717]/70 hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-[#171717] border border-[#D7D7D7] shadow-sm cursor-pointer"
            onClick={() => setActiveLightboxItem(item)}
          >
            <div className="h-80 sm:h-96 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              ) : null}
            </div>

            {/* Hover & Always-On Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent p-6 flex flex-col justify-end text-[#F8F6F2]">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-[#C8A96A] text-[#171717] text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-[#F8F6F2]/70 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
                  {item.date}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#F8F6F2]/80 font-light flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C8A96A]" />
                {item.location}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#171717]/80 text-[#F8F6F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/90 backdrop-blur-md p-6 flex items-center justify-center"
            onClick={() => setActiveLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF8] border border-[#D7D7D7] rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden relative"
            >
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#171717] text-[#F8F6F2] flex items-center justify-center hover:bg-[#C8A96A] hover:text-[#171717] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-[#171717] flex items-center justify-center overflow-hidden">
                {activeLightboxItem.image ? (
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                ) : null}
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-2">
                  <span>{activeLightboxItem.category}</span>
                  <span>·</span>
                  <span>{activeLightboxItem.date}</span>
                  <span>·</span>
                  <span>{activeLightboxItem.location}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#171717] mb-2">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
                  {activeLightboxItem.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
