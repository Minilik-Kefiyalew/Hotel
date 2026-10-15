import React, { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  const [checkIn,   setCheckIn]   = useState('')
  const [checkOut,  setCheckOut]  = useState('')
  const [guests,    setGuests]    = useState('2')

  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=85)',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Star rating badge */}
        <div className="inline-flex items-center gap-1.5 bg-gold-600/20 border border-gold-500/40 rounded-full px-5 py-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
          ))}
          <span className="text-gold-300 text-xs font-medium ml-1 tracking-widest uppercase">5-Star Luxury</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.05]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Addis Grand
          <span className="block text-gold-400 italic">Hotel</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-2 font-light tracking-wide">
          Where Ethiopian Heritage Meets World-Class Luxury
        </p>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
          In the vibrant heart of Addis Ababa, experience unparalleled elegance, 
          curated hospitality, and breathtaking views of the Entoto Mountains.
        </p>

        {/* Quick search bar */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-left">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                Check In
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-hotel-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              />
            </div>
            <div className="text-left">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                Check Out
              </label>
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-hotel-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              />
            </div>
            <div className="text-left">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-hotel-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="#rooms"
              className="btn-primary w-full block text-center !py-3.5"
            >
              Search Available Rooms
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { value: '180+', label: 'Luxury Rooms' },
            { value: '5★',   label: 'Star Rating' },
            { value: '15+',  label: 'Years of Excellence' },
            { value: '98%',  label: 'Guest Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gold-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400 animate-bounce hover:text-gold-300 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
