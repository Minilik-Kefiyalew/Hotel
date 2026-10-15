import React, { useState } from 'react'
import { rooms } from '../data/hotelData'
import RoomCard from './RoomCard'

const categories = ['All', 'Classic', 'Deluxe', 'Superior', 'Suite', 'Presidential']

export default function Rooms() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? rooms
    : rooms.filter((r) => r.category === activeCategory)

  return (
    <section id="rooms" className="py-24 bg-hotel-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Accommodations</p>
          <h2 className="section-title">Our Rooms & Suites</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            From elegantly appointed classic rooms to our legendary Presidential Suite, 
            every space has been designed to provide the perfect retreat.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-300 hover:text-gold-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No rooms found in this category.
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">Looking for a custom package or special event accommodation?</p>
          <a href="#contact" className="btn-outline">Contact Our Reservations Team</a>
        </div>
      </div>
    </section>
  )
}
