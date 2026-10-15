import React, { useState, useEffect } from 'react'
import { testimonials } from '../data/hotelData'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  return (
    <section className="py-24 bg-hotel-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subtitle !text-gold-500">Guest Reviews</p>
        <h2 className="section-title !text-white mb-8">What Our Guests Say</h2>
        <div className="gold-divider"></div>

        {/* Testimonial card */}
        <div className="mt-12 bg-hotel-deep rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative">
          <Quote size={40} className="text-gold-600/30 absolute top-6 left-8" />

          <div className="flex justify-center mb-4">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
            ))}
          </div>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed italic max-w-3xl mx-auto mb-8">
            "{t.text}"
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-gold-500"
            />
            <div className="text-left">
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.country}</div>
              <div className="text-gold-600 text-xs mt-0.5">{t.date}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'bg-gold-500 w-6 h-2' : 'bg-white/20 w-2 h-2 hover:bg-white/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
