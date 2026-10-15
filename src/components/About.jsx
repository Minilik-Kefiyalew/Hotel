import React from 'react'
import { Award, Users, Coffee, MapPin } from 'lucide-react'

const highlights = [
  { icon: Award,  label: 'Award Winning', desc: 'Best Luxury Hotel in East Africa 2025' },
  { icon: Users,  label: 'Expert Staff',  desc: '500+ dedicated hospitality professionals' },
  { icon: Coffee, label: 'Ethiopian Soul', desc: 'Rooted in rich cultural heritage' },
  { icon: MapPin, label: 'Prime Location', desc: 'Bole District, Addis Ababa' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Story</p>
          <h2 className="section-title">A Legacy of Luxury<br />in Africa's Capital</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Established in 2009, Addis Grand Hotel has become the defining symbol of 
            refined hospitality in Ethiopia — a place where cultures meet, where history 
            breathes, and where every guest is treated as royalty.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80"
                  alt="Hotel lobby"
                  className="w-full h-56 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80"
                  alt="Fine dining"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80"
                  alt="Pool"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80"
                  alt="Suite"
                  className="w-full h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-hotel-dark text-white rounded-2xl px-8 py-4 shadow-2xl text-center whitespace-nowrap">
              <div className="text-3xl font-bold text-gold-400" style={{ fontFamily: 'Playfair Display, serif' }}>15+</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Years of Excellence</div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <p className="section-subtitle">Welcome to Addis Grand</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-hotel-dark mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Where Luxury Meets<br />Ethiopian Elegance
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Nestled in the prestigious Bole District, Addis Grand Hotel rises 22 floors 
              above the city, offering guests an unrivalled vantage point over one of 
              Africa's most dynamic capitals. Our 180 rooms and suites are masterpieces 
              of contemporary design infused with authentic Ethiopian artisanship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From our signature coffee ceremony — a nod to Ethiopia's gift to the world — 
              to the Michelin-inspired menu at The Entoto Restaurant, every touchpoint at 
              Addis Grand has been crafted to leave you with memories that endure.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-4 bg-hotel-light rounded-xl border border-gray-100 hover:border-gold-200 transition-colors group">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition-colors">
                    <Icon size={18} className="text-gold-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-hotel-dark text-sm">{label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#rooms"   className="btn-primary text-center">Explore Rooms</a>
              <a href="#contact" className="btn-outline text-center">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
