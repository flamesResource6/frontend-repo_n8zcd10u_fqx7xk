function Feature({ title, description }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-slate-900 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How we help</h2>
          <p className="mt-2 text-slate-600">Full-service plumbing for every need.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="Emergency Repairs" description="24/7 response for burst pipes, leaks, and urgent plumbing issues. We're there when you need us most." />
          <Feature title="Drain & Sewer Cleaning" description="Professional cleaning to clear clogs, prevent backups, and keep your system flowing smoothly." />
          <Feature title="Water Heater Services" description="Installation, repair, and maintenance for tank and tankless water heaters." />
          <Feature title="Fixture Installations" description="Faucets, toilets, sinks, showers, and more—installed with care and precision." />
          <Feature title="Leak Detection" description="Advanced diagnostics to find hidden leaks and protect your property from damage." />
          <Feature title="Commercial Plumbing" description="Reliable service tailored for businesses, property managers, and builders." />
        </div>
      </div>
    </section>
  )
}

export default Features
