import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Trust badges / CTA */}
        <section className="py-14 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">24/7</p>
              <p className="text-slate-600 mt-1">Emergency Service</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">4.9★</p>
              <p className="text-slate-600 mt-1">Customer Rating</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <p className="text-3xl font-extrabold text-blue-600">10+ yrs</p>
              <p className="text-slate-600 mt-1">Locally Owned</p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Need a plumber today?</h2>
            <p className="mt-3 text-slate-600">We’re ready to help with fast scheduling and honest, upfront pricing.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/contact" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Request Service</a>
              <a href="tel:5551234567" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Call (555) 123-4567</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
