import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Emergency Repairs',
    desc: 'Rapid response for leaks, burst pipes, and urgent issues—available 24/7.',
    price: 'From $149',
  },
  { title: 'Drain Cleaning', desc: 'Clear clogs and restore flow with pro-grade equipment.', price: 'From $129' },
  { title: 'Water Heater Install', desc: 'Tank and tankless systems installed and maintained.', price: 'From $999' },
  { title: 'Leak Detection', desc: 'Find hidden leaks to prevent costly water damage.', price: 'From $199' },
  { title: 'Fixture Installations', desc: 'Faucets, toilets, showers, and more—installed right.', price: 'From $129' },
  { title: 'Commercial Plumbing', desc: 'Reliable service for offices, retail, and multi-unit buildings.', price: 'Custom' },
]

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Plumbing Services</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Transparent pricing and skilled workmanship for every project.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              <div className="mt-4 text-blue-700 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to schedule?</h2>
          <p className="mt-3 text-slate-600">Get a free, no-obligation quote in minutes.</p>
          <a href="/contact" className="mt-6 inline-flex px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Request a Quote</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
