function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold">BP</div>
            <span className="font-semibold text-slate-900">BlueWave Plumbing</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">Licensed and insured plumbing professionals serving residential and commercial clients.</p>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>(555) 123-4567</li>
            <li>support@bluewaveplumbing.com</li>
            <li>123 Main Street, Suite 200, Your City</li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Mon–Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 3:00 PM</li>
            <li>Emergency: 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} BlueWave Plumbing. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Licensed • Insured • Bonded</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
