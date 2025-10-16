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
    <div className="space-y-4">
      <h1 className="text-4xl font-bold" data-testid="contact-title">
        Contact Us
      </h1>
      <p className="text-lg" data-testid="contact-description">
        Get in touch with us using the form below.
      </p>

      {submitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
          data-testid="success-message"
        >
          Thank you! Your message has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            data-testid="contact-name-input"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            data-testid="contact-email-input"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            data-testid="contact-message-input"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          data-testid="contact-submit-button"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
