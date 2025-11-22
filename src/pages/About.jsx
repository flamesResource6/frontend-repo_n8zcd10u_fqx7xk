import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">About BlueWave Plumbing</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Family-owned and operated, proudly serving our community with integrity for over a decade.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-slate-700 leading-relaxed">
          <p>
            We believe in honest work, clear communication, and long-term solutions. Our licensed technicians are
            trained on the latest industry standards to ensure every job is completed safely and correctly.
          </p>
          <p>
            From small fixes to complex projects, we approach every task with care. Our goal is to be the plumbing
            partner you recommend to friends and family.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">1,500+</p>
              <p className="text-slate-600 mt-1">Projects Completed</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">98%</p>
              <p className="text-slate-600 mt-1">On-time Rate</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">4.9★</p>
              <p className="text-slate-600 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
