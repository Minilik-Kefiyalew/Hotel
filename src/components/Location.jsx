import React from 'react'
import { MapPin, Phone, Mail, Clock, Car, Plane, Coffee } from 'lucide-react'

const nearbyAttractions = [
  { icon: Plane,   label: 'Bole International Airport', distance: '3 km' },
  { icon: Coffee,  label: 'National Museum of Ethiopia', distance: '4.5 km' },
  { icon: Car,     label: 'Meskel Square',               distance: '2.2 km' },
  { icon: MapPin,  label: 'Entoto Mountain Park',        distance: '12 km' },
]

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Find Us</p>
          <h2 className="section-title">Location & Contact</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Situated in the prestigious Bole District, Addis Grand Hotel is minutes 
            from the airport and close to Addis Ababa's key landmarks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Map embed (OpenStreetMap – no API key required) */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[420px]">
            <iframe
              title="Addis Grand Hotel Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.7800%2C9.0200%2C38.8200%2C9.0400&layer=mapnik&marker=9.030%2C38.800"
              className="w-full h-full"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-hotel-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-gold-700" />
              </div>
              <div>
                <h4 className="font-semibold text-hotel-dark mb-1">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Africa Avenue (Bole Road), Bole District<br />
                  Addis Ababa, Federal Democratic<br />
                  Republic of Ethiopia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-hotel-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-gold-700" />
              </div>
              <div>
                <h4 className="font-semibold text-hotel-dark mb-1">Phone</h4>
                <p className="text-gray-600 text-sm">
                  Reservations: <a href="tel:+251111234567" className="text-gold-700 hover:underline">+251 111 234 567</a>
                </p>
                <p className="text-gray-600 text-sm">
                  Concierge: <a href="tel:+251111234568" className="text-gold-700 hover:underline">+251 111 234 568</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-hotel-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-gold-700" />
              </div>
              <div>
                <h4 className="font-semibold text-hotel-dark mb-1">Email</h4>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:reservations@addisgrandhotel.com" className="text-gold-700 hover:underline">
                    reservations@addisgrandhotel.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:info@addisgrandhotel.com" className="text-gold-700 hover:underline">
                    info@addisgrandhotel.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-hotel-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-gold-700" />
              </div>
              <div>
                <h4 className="font-semibold text-hotel-dark mb-1">Reception Hours</h4>
                <p className="text-gray-600 text-sm">Front Desk: 24/7</p>
                <p className="text-gray-600 text-sm">Reservations: Mon – Fri, 8:00 AM – 10:00 PM EAT</p>
              </div>
            </div>

            {/* Nearby attractions */}
            <div className="p-5 bg-hotel-dark rounded-2xl">
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Nearby Attractions</h4>
              <div className="space-y-2">
                {nearbyAttractions.map(({ icon: Icon, label, distance }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Icon size={13} className="text-gold-500" />
                      {label}
                    </div>
                    <span className="text-gold-400 font-medium text-xs">{distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
