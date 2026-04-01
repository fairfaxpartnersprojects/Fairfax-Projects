import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary-500/20 border border-primary-400/30 text-primary-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Powered by FAIR — The World&apos;s First Agentic IR Agent
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Investor Relations{" "}
            <span className="text-primary-300">
              Built, Managed & Amplified
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100/80 mb-8 leading-relaxed">
            Fairfax Partners delivers integrated IR infrastructure, active
            management, and digital marketing for public and pre-public
            companies listed on the TSX, CSE, NASDAQ, OTC, Euronext, and LSE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
            >
              Get Started with Core IR
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
          {[
            { value: "6", label: "Global Exchanges" },
            { value: "4", label: "Offices Worldwide" },
            { value: "100+", label: "Issuers Served" },
            { value: "24/7", label: "FAIR Agent Coverage" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-primary-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
