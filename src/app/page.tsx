import Navbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import Footer from "@/components/public/Footer";
import Link from "next/link";

const services = [
  {
    title: "Core IR",
    tag: "Foundation",
    description:
      "We build your entire investor relations infrastructure from the ground up — website, CRM, phone system, digital integration — so you're set up for compliant, professional communication from day one.",
    features: [
      "Investor website development",
      "CRM setup & configuration",
      "Dedicated phone number & system",
      "Digital integration & compliance framework",
      "MyIR subscription to manage it all",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    title: "Essential IR",
    tag: "Active Management",
    description:
      "Hands-on investor relations management. We draft and disseminate your investor updates, manage inbound communications, and handle disclosure support so you can focus on running your company.",
    features: [
      "Investor update drafting & dissemination",
      "Inbound communications management",
      "Disclosure & compliance support",
      "Shareholder engagement",
      "Real-time reporting & insights",
    ],
    cta: "Learn More",
    highlight: true,
  },
  {
    title: "Momentum IR",
    tag: "Growth & Visibility",
    description:
      "Digital marketing campaign execution designed specifically for public companies. We amplify your story across Google, LinkedIn, and financial platforms to drive visibility and investor interest.",
    features: [
      "Google & LinkedIn ad campaigns",
      "Financial platform advertising",
      "Targeted investor audience building",
      "Campaign performance analytics",
      "Brand amplification & awareness",
    ],
    cta: "Learn More",
    highlight: false,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Core IR builds your infrastructure",
    description:
      "We set up your investor website, CRM, phone system, and digital integration — everything you need to communicate professionally with shareholders.",
  },
  {
    step: "02",
    title: "MyIR keeps it running",
    description:
      "Your MyIR subscription manages the infrastructure — phone system, email inbox, CRM, and communications — powered by FAIR, the world's first agentic IR operating system.",
  },
  {
    step: "03",
    title: "Essential IR handles the work",
    description:
      "Our team actively manages your investor relations — drafting updates, handling inbound inquiries, managing disclosure, and keeping shareholders engaged.",
  },
  {
    step: "04",
    title: "Momentum IR drives growth",
    description:
      "Targeted digital marketing campaigns across Google, LinkedIn, and financial platforms amplify your story and drive investor interest.",
  },
];

const exchanges = [
  "TSX",
  "CSE",
  "NASDAQ",
  "OTC",
  "Euronext",
  "LSE",
];

const sectors = [
  "Mining & Resources",
  "Biotech & Life Sciences",
  "Technology",
  "Clean Energy",
  "Fintech",
  "Cannabis",
];

const testimonials = [
  {
    quote:
      "Fairfax Partners built our entire IR infrastructure and has managed it seamlessly. The FAIR agent is a game-changer for how we communicate with shareholders.",
    author: "CEO",
    role: "TSX-Listed Mining Company",
  },
  {
    quote:
      "From our investor website to our first press release, they handled everything. We went from pre-IPO to fully set up in weeks, not months.",
    author: "CFO",
    role: "CSE-Listed Biotech",
  },
  {
    quote:
      "The Momentum IR campaigns drove real, measurable investor interest. Our trading volume increased significantly within the first month.",
    author: "Director of IR",
    role: "NASDAQ-Listed Tech Company",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A connected IR ecosystem — from infrastructure to active
              management to growth campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated investor relations solutions for public and pre-public
              companies.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-xl p-8 flex flex-col ${
                  service.highlight
                    ? "bg-primary-900 text-white ring-2 ring-primary-500 shadow-xl"
                    : "bg-white shadow-md border border-gray-100"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    service.highlight ? "text-primary-300" : "text-primary-600"
                  }`}
                >
                  {service.tag}
                </span>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    service.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    service.highlight ? "text-primary-100" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          service.highlight
                            ? "text-primary-300"
                            : "text-accent-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          service.highlight ? "text-primary-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    service.highlight
                      ? "bg-white text-primary-900 hover:bg-primary-50"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MyIR + FAIR Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Powered by FAIR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                MyIR — Your IR Operating System
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MyIR is included with Core IR and manages your entire investor
                relations infrastructure. Powered by <strong>FAIR</strong>{" "}
                (Fully Automated Investor Relations) — the world&apos;s first
                agentic IR operating system — it handles your phone system,
                email inbox, CRM, and communications so nothing falls through
                the cracks.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated FAIR agent managing your communications",
                  "Phone system & email inbox management",
                  "CRM & shareholder database",
                  "Real-time reporting & live insights",
                  "Compliant with TSX, CSE, NASDAQ, OTC, EU MAR, UK DTR",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-accent-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-300">
                    FAIR
                  </span>
                </div>
                <h3 className="text-xl font-bold">
                  Fully Automated Investor Relations
                </h3>
                <p className="text-primary-300 text-sm mt-1">
                  The world&apos;s first agentic IR agent & OS
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Inbound",
                    detail: "Shareholder calls, emails, and inquiries",
                  },
                  {
                    label: "Outbound",
                    detail: "Updates, press releases, and newsletters",
                  },
                  {
                    label: "Reporting",
                    detail: "Live dashboards and real-time insights",
                  },
                  {
                    label: "Compliance",
                    detail: "Global regulatory framework adherence",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <p className="text-xs text-primary-300 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchanges & Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Exchanges We Support
              </h3>
              <div className="flex flex-wrap gap-3">
                {exchanges.map((ex) => (
                  <span
                    key={ex}
                    className="bg-white border border-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm shadow-sm"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sectors We Serve
              </h3>
              <div className="flex flex-wrap gap-3">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Issuers Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-primary-500 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your IR Infrastructure?
          </h2>
          <p className="text-primary-200 text-lg mb-8">
            Get started with Core IR — we&apos;ll build your investor website,
            set up your CRM, and get you a dedicated number. Complimentary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
