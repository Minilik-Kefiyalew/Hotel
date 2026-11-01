import React, { useState } from 'react'
import { Users, Maximize2, BedDouble, Eye, Wifi, X, CheckCircle2 } from 'lucide-react'

export default function RoomCard({ room }) {
  const [showModal, setShowModal] = useState(false)

  const amenityIcons = {
    'Free Wi-Fi': <Wifi size={14} />,
  }

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-400 border border-gray-100">
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {room.badge && (
            <span className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow">
              {room.badge}
            </span>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-hotel-dark text-xs font-semibold px-3 py-1 rounded-full">
            {room.category}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gold-600 hover:bg-gold-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors uppercase tracking-wider"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-hotel-dark mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            {room.name}
          </h3>

          {/* Room specs */}
          <div className="flex flex-wrap gap-3 mt-3 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Maximize2 size={13} className="text-gold-600" />
              {room.size}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Users size={13} className="text-gold-600" />
              Up to {room.occupancy} guests
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <BedDouble size={13} className="text-gold-600" />
              {room.beds}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Eye size={13} className="text-gold-600" />
              {room.view}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
            {room.description}
          </p>

          {/* Amenities pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {room.amenities.slice(0, 4).map((a) => (
              <span key={a} className="bg-gold-50 text-gold-700 text-xs px-2.5 py-1 rounded-full border border-gold-100">
                {a}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-hotel-dark" style={{ fontFamily: 'Playfair Display, serif' }}>
                ETB {room.price.toLocaleString()}
              </span>
              <span className="text-gray-400 text-sm"> / night</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="border border-gold-500 text-gold-600 hover:bg-gold-50 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Details
              </button>
              <a
                href="#booking"
                className="bg-gold-600 hover:bg-gold-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              {room.badge && (
                <span className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {room.badge}
                </span>
              )}
            </div>

            {/* Modal content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-hotel-dark" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {room.name}
                  </h2>
                  <p className="text-gold-600 text-sm font-medium mt-0.5">{room.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-hotel-dark" style={{ fontFamily: 'Playfair Display, serif' }}>
                    ETB {room.price.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-xs">per night</div>
                </div>
              </div>

              {/* Specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { icon: <Maximize2 size={16} />, label: 'Size',      value: room.size },
                  { icon: <Users size={16} />,     label: 'Capacity',  value: `${room.occupancy} guests` },
                  { icon: <BedDouble size={16} />, label: 'Bed Type',  value: room.beds },
                  { icon: <Eye size={16} />,       label: 'View',      value: room.view },
                ].map((spec) => (
                  <div key={spec.label} className="bg-hotel-light rounded-xl p-3 text-center">
                    <div className="flex justify-center text-gold-600 mb-1">{spec.icon}</div>
                    <div className="text-xs text-gray-400">{spec.label}</div>
                    <div className="text-xs font-semibold text-hotel-dark mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{room.description}</p>

              {/* All amenities */}
              <h4 className="font-semibold text-hotel-dark text-sm mb-3 uppercase tracking-wider">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-gold-600 flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-xl text-sm font-medium transition-colors"
                >
                  Close
                </button>
                <a
                  href="#booking"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-xl text-sm font-semibold text-center transition-colors"
                >
                  Book This Room
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
