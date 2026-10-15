import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home',          href: '#home' },
    { label: 'About Us',      href: '#about' },
    { label: 'Rooms & Suites',href: '#rooms' },
    { label: 'Facilities',    href: '#facilities' },
    { label: 'Gallery',       href: '#gallery' },
    { label: 'Book Now',      href: '#booking' },
  ],
  'Services': [
    { label: 'Airport Transfer',    href: '#' },
    { label: 'Spa & Wellness',      href: '#facilities' },
    { label: 'Fine Dining',         href: '#facilities' },
    { label: 'Conference & Events', href: '#facilities' },
    { label: 'Business Centre',     href: '#facilities' },
    { label: 'Concierge',           href: '#contact' },
  ],
}

const social = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter,   href: '#', label: 'X (Twitter)' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-hotel-dark text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-gold-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>A</span>
              </div>
              <div>
                <span
                  className="block text-white font-bold text-lg tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Addis Grand
                </span>
                <span className="block text-gold-400 text-xs tracking-[0.25em] uppercase">Hotel</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Addis Ababa's premier 5-star luxury hotel, where Ethiopian heritage 
              meets world-class hospitality. Est. 2009.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-gold-500">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Africa Avenue (Bole Road),<br />
                  Bole District,<br />
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <a href="tel:+251111234567" className="text-gray-400 hover:text-gold-400 transition-colors">
                  +251 111 234 567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:reservations@addisgrandhotel.com" className="text-gray-400 hover:text-gold-400 transition-colors text-xs break-all">
                  reservations@addisgrandhotel.com
                </a>
              </div>
            </div>

            {/* Newsletter mini-form */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition"
                />
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex-shrink-0"
                  type="button"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Addis Grand Hotel. All rights reserved.
            <span className="ml-2 text-gray-600">— Fictional portfolio project, not a real hotel.</span>
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookie Policy</a>
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 bg-gold-600 hover:bg-gold-700 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
