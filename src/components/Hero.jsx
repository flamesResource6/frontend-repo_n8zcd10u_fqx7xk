import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Trusted Plumbing Services You Can Rely On
          </h1>
          <p className="mt-4 text-slate-600 md:text-lg">
            Fast, friendly, and professional plumbing solutions for homes and businesses across the city.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#services" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Our Services</a>
            <a href="/contact" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
