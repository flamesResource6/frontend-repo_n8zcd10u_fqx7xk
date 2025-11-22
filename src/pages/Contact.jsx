import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true, message: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contact Us</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Tell us about your plumbing issue and we’ll respond ASAP.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">How can we help?</label>
              <textarea name="message" rows="5" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-70"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
            )}
          </form>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Email:</strong> support@bluewaveplumbing.com</li>
              <li><strong>Address:</strong> 123 Main Street, Suite 200, Your City</li>
              <li><strong>Hours:</strong> Mon–Fri 8AM–6PM, Sat 9AM–3PM, Emergencies 24/7</li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-slate-50 text-slate-600 text-sm">
              We respect your privacy. Your information is used only to respond to your inquiry.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
