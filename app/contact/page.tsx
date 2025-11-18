'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 space-y-6">
          <div className="inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
              💬 Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight" data-testid="contact-title">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl leading-relaxed" data-testid="contact-description">
            Have questions about TestApp Pro? We're here to help. Reach out to us using the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-purple-100">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600">Fill out the form and we'll respond within 24 hours</p>
          </div>

          {submitted && (
            <div
              className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in"
              data-testid="success-message"
            >
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold">Success!</p>
                <p className="text-sm text-green-50">Thank you! Your message has been submitted.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                data-testid="contact-name-input"
                className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl px-4 py-3 transition-all duration-200 outline-none"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                data-testid="contact-email-input"
                className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl px-4 py-3 transition-all duration-200 outline-none"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                data-testid="contact-message-input"
                className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl px-4 py-3 transition-all duration-200 outline-none resize-none"
                rows={6}
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              data-testid="contact-submit-button"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-purple-100">support@testapppro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-purple-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-purple-100">San Francisco, CA<br/>United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  ⏰
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-purple-100">Mon - Fri: 9:00 AM - 6:00 PM PST<br/>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">How quickly will I get a response?</h3>
                <p className="text-gray-600 text-sm">We typically respond within 24 hours during business days.</p>
              </div>
              <div className="pb-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer technical support?</h3>
                <p className="text-gray-600 text-sm">Yes! Our team provides comprehensive technical support for all users.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I schedule a demo?</h3>
                <p className="text-gray-600 text-sm">Absolutely! Mention it in your message and we'll arrange a time.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center space-y-4">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold text-gray-900">Ready to get started?</h3>
              <p className="text-gray-600">Join hundreds of teams already using TestApp Pro for their testing needs.</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
