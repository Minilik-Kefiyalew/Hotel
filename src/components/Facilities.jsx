import React, { useState } from 'react'
import { facilities } from '../data/hotelData'
import { ArrowRight } from 'lucide-react'

export default function Facilities() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">World-Class Amenities</p>
          <h2 className="section-title">Hotel Facilities</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Every facility at Addis Grand has been thoughtfully conceived to serve 
            your every need — whether relaxing, working, dining, or celebrating.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onMouseEnter={() => setHovered(facility.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark via-hotel-dark/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-3xl mb-2">{facility.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {facility.name}
                </h3>
                <p
                  className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                    hovered === facility.id
                      ? 'opacity-100 max-h-24 translate-y-0'
                      : 'opacity-0 max-h-0 translate-y-2'
                  }`}
                >
                  {facility.description}
                </p>
                <div
                  className={`flex items-center gap-1 text-gold-400 text-xs font-semibold uppercase tracking-wider mt-3 transition-all duration-300 ${
                    hovered === facility.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  Learn More <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature banner */}
        <div className="mt-16 bg-hotel-dark rounded-3xl p-8 sm:p-12 text-center overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d97706 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10">
            <p className="text-gold-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              All-Inclusive Experience
            </p>
            <h3
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Everything You Need, Under One Roof
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
              All guests enjoy complimentary access to our fitness centre, business lounge, 
              and morning coffee ceremony — a unique Ethiopian welcome ritual performed 
              daily at 8:00 AM in the Grand Lobby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="btn-primary">Reserve Your Stay</a>
              <a href="#gallery" className="btn-outline !border-white/30 !text-white hover:!bg-white/10">View Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
