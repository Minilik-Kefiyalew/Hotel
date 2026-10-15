import React, { useState } from 'react'
import { galleryImages } from '../data/hotelData'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const categories = ['All', 'Exterior', 'Rooms', 'Pool', 'Dining', 'Spa', 'Events', 'Business']

export default function Gallery() {
  const [filter,      setFilter]     = useState('All')
  const [lightbox,    setLightbox]   = useState(null) // index in filtered array

  const filtered = filter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter)

  const openLightbox  = (idx) => setLightbox(idx)
  const closeLightbox = ()    => setLightbox(null)
  const prevImage     = ()    => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)
  const nextImage     = ()    => setLightbox((i) => (i + 1) % filtered.length)

  const handleKey = (e) => {
    if (e.key === 'Escape')     closeLightbox()
    if (e.key === 'ArrowLeft')  prevImage()
    if (e.key === 'ArrowRight') nextImage()
  }

  return (
    <section id="gallery" className="py-24 bg-hotel-light" onKeyDown={handleKey} tabIndex={-1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Visual Journey</p>
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-lg mx-auto mt-4">
            Take a visual tour through the beautiful spaces and unforgettable experiences 
            that await you at Addis Grand Hotel.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gold-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-300 hover:text-gold-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-md"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-hotel-dark/0 group-hover:bg-hotel-dark/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{filtered[lightbox].alt}</p>
              <p className="text-gray-400 text-xs mt-1">
                {lightbox + 1} / {filtered.length} — {filtered[lightbox].category}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
