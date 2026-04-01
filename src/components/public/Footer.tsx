import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="text-xl font-bold text-white">
                Fairfax Partners
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Connecting capital &amp; ideas. Integrated investor relations,
              venture capital, and corporate finance for public and pre-public
              companies worldwide.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["TSX", "CSE", "NASDAQ", "OTC", "Euronext", "LSE"].map((ex) => (
                <span
                  key={ex}
                  className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Core IR",
                "Essential IR",
                "Momentum IR",
                "MyIR",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Suite #1504, 1221 Bidwell Street</li>
              <li>Vancouver, BC V6G 0B1, Canada</li>
              <li className="pt-2">connect@fairfax.partners</li>
              <li>+1 604 366 6277</li>
              <li className="pt-2 text-xs text-gray-500">
                Lisbon &middot; Manchester &middot; Toronto &middot; Vancouver
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Fairfax Partners Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Compliance Note */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
            All communications are reviewed for accuracy, approval, and
            compliance with Section 52(2) Canada, Rule 10b-5 U.S., EU MAR, UK
            DTR 2, and their global equivalents. Fairfax Partners Inc. is not
            affiliated with Fairfax Financial Holdings Limited (TSX: FFH).
          </p>
        </div>
      </div>
    </footer>
  );
}
