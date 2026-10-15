import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Rooms',      href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [isOpen,      setIsOpen]      = useState(false)
  const [scrolled,    setScrolled]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-hotel-dark/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" onClick={() => handleNavClick('#home')}>
            <div className="w-10 h-10 bg-gold-600 rounded flex items-center justify-center shadow-lg group-hover:bg-gold-500 transition-colors">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>A</span>
            </div>
            <div className="leading-tight">
              <span
                className="block text-white font-bold text-lg tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Addis Grand
              </span>
              <span className="block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium">
                Hotel
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded ${
                  activeLink === link.href
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+251111234567"
              className="flex items-center gap-2 text-gray-300 hover:text-gold-400 transition-colors text-sm"
            >
              <Phone size={15} />
              <span>+251 111 234 567</span>
            </a>
            <a href="#booking" className="btn-primary !py-2 !px-5 !text-xs">
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-hotel-dark/98 backdrop-blur-md rounded-xl border border-white/10 p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="tel:+251111234567"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 text-sm"
              >
                <Phone size={14} />
                +251 111 234 567
              </a>
              <a href="#booking" className="btn-primary block text-center !py-3" onClick={() => setIsOpen(false)}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
