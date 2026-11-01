import React, { useState } from 'react'
import { rooms } from '../data/hotelData'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  roomType: '',
  checkIn: '',
  checkOut: '',
  adults: '2',
  children: '0',
  specialRequests: '',
  newsletter: false,
}

export default function BookingForm() {
  const [form,       setForm]       = useState(initialForm)
  const [errors,     setErrors]     = useState({})
  const [submitted,  setSubmitted]  = useState(false)
  const [loading,    setLoading]    = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const validate = () => {
    const e = {}
    if (!form.firstName.trim())   e.firstName = 'First name is required.'
    if (!form.lastName.trim())    e.lastName  = 'Last name is required.'

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim())                  e.email = 'Email is required.'
    else if (!emailRx.test(form.email))      e.email = 'Please enter a valid email address.'

    const phoneRx = /^[+\d\s\-()]{7,20}$/
    if (!form.phone.trim())                  e.phone = 'Phone number is required.'
    else if (!phoneRx.test(form.phone))      e.phone = 'Please enter a valid phone number.'

    if (!form.roomType)   e.roomType  = 'Please select a room type.'
    if (!form.checkIn)    e.checkIn   = 'Check-in date is required.'
    if (!form.checkOut)   e.checkOut  = 'Check-out date is required.'

    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      e.checkOut = 'Check-out must be after check-in.'
    }

    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 1500)
  }

  const nights = (() => {
    if (!form.checkIn || !form.checkOut) return 0
    const diff = (new Date(form.checkOut) - new Date(form.checkIn)) / 86400000
    return diff > 0 ? diff : 0
  })()

  const selectedRoom = rooms.find((r) => r.name === form.roomType)
  const estimatedTotal = selectedRoom && nights > 0
    ? (selectedRoom.price * nights).toLocaleString()
    : null

  const Field = ({ id, label, error, children }) => (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-red-500 text-xs">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  )

  return (
    <section id="booking" className="py-24 bg-hotel-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Reserve Your Stay</p>
          <h2 className="section-title">Booking Inquiry</h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Fill in your details and our reservations team will confirm availability 
            within 2 business hours.
          </p>
        </div>

        {submitted ? (
          /* Success state */
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h3
              className="text-3xl font-bold text-hotel-dark mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Inquiry Received!
            </h3>
            <p className="text-gray-500 max-w-md mx-auto mb-2">
              Thank you for choosing Addis Grand Hotel. Our reservations team will 
              contact you within 2 business hours to confirm your booking.
            </p>
            <p className="text-gold-600 text-sm font-medium mb-8">
              A confirmation email will be sent to your provided address.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Make Another Inquiry
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3">

              {/* Sidebar summary */}
              <div className="bg-hotel-dark p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-2">Your Stay</p>
                  <h3
                    className="text-2xl font-bold text-white mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Booking Summary
                  </h3>

                  <div className="space-y-3 text-sm">
                    {[
                      { label: 'Room',     value: form.roomType  || '—' },
                      { label: 'Check In', value: form.checkIn   || '—' },
                      { label: 'Check Out',value: form.checkOut  || '—' },
                      { label: 'Nights',   value: nights || '—' },
                      { label: 'Guests',   value: `${form.adults} adults, ${form.children} children` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">{label}</span>
                        <span className="text-white font-medium text-right max-w-[55%] break-words">{String(value)}</span>
                      </div>
                    ))}
                  </div>

                  {estimatedTotal && (
                    <div className="mt-6 bg-gold-600/20 border border-gold-500/30 rounded-xl p-4 text-center">
                      <div className="text-gray-400 text-xs mb-1">Estimated Total</div>
                      <div
                        className="text-3xl font-bold text-gold-400"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        ETB {estimatedTotal}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        {nights} night{nights > 1 ? 's' : ''} × ETB {selectedRoom?.price.toLocaleString()}/night
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact assurance */}
                <div className="mt-8 text-center">
                  <div className="text-gold-400 text-sm font-medium">Need help?</div>
                  <a
                    href="tel:+251111234567"
                    className="text-white text-sm hover:text-gold-400 transition-colors"
                  >
                    +251 111 234 567
                  </a>
                  <div className="text-gray-500 text-xs mt-1">Available 24/7</div>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-2 p-8 lg:p-10"
                noValidate
              >
                <h3
                  className="text-xl font-bold text-hotel-dark mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Guest Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="firstName" label="First Name *" error={errors.firstName}>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Amelia"
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <Field id="lastName" label="Last Name *" error={errors.lastName}>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Johnson"
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <Field id="email" label="Email Address *" error={errors.email}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="amelia@example.com"
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <Field id="phone" label="Phone Number *" error={errors.phone}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 123456"
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <Field id="roomType" label="Room Type *" error={errors.roomType}>
                    <select
                      id="roomType"
                      name="roomType"
                      value={form.roomType}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition bg-white ${errors.roomType ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    >
                      <option value="">Select a room…</option>
                      {rooms.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name} — ETB {r.price.toLocaleString()}/night
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field id="adults" label="Adults">
                      <select
                        id="adults"
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white"
                      >
                        {[1,2,3,4,5,6].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </Field>
                    <Field id="children" label="Children">
                      <select
                        id="children"
                        name="children"
                        value={form.children}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white"
                      >
                        {[0,1,2,3,4].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field id="checkIn" label="Check-In Date *" error={errors.checkIn}>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      min={today}
                      value={form.checkIn}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.checkIn ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <Field id="checkOut" label="Check-Out Date *" error={errors.checkOut}>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      min={form.checkIn || today}
                      value={form.checkOut}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition ${errors.checkOut ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field id="specialRequests" label="Special Requests">
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={form.specialRequests}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Early check-in, dietary requirements, anniversary celebration…"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-hotel-dark focus:outline-none focus:ring-2 focus:ring-gold-500 transition resize-none"
                      />
                    </Field>
                  </div>
                </div>

                {/* Newsletter */}
                <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={form.newsletter}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-gold-600 peer-checked:border-gold-600 transition-colors flex items-center justify-center">
                      {form.newsletter && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    Keep me updated with exclusive offers and news from Addis Grand Hotel.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full mt-6 flex items-center justify-center gap-2 !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending Inquiry…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Booking Inquiry
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center mt-3">
                  This is a fictitious portfolio project. No real bookings will be processed.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
