import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Link from "next/link";

const services = [
  {
    id: "core-ir",
    title: "Core IR",
    tag: "Foundation",
    price: "Complimentary",
    priceNote: "MyIR subscription included",
    description:
      "We build your entire investor relations infrastructure from the ground up. Core IR sets the foundation — your website, CRM, phone system, and digital integration — so you're ready to communicate professionally and compliantly from day one.",
    longDescription:
      "Once your infrastructure is built, your MyIR subscription kicks in to manage it all. Powered by FAIR, our agentic IR operating system, MyIR handles your phone system, email inbox, CRM, and communications — ensuring nothing falls through the cracks.",
    features: [
      { title: "Investor Website", detail: "Custom-built, compliant investor relations website" },
      { title: "CRM Setup", detail: "Shareholder database, contact management, and tagging" },
      { title: "Phone System", detail: "Dedicated IR phone number with professional handling" },
      { title: "Digital Integration", detail: "Connected systems for seamless data flow" },
      { title: "Compliance Framework", detail: "Built to TSX, CSE, NASDAQ, OTC, EU MAR, UK DTR standards" },
      { title: "MyIR Subscription", detail: "Ongoing management of your IR infrastructure via FAIR agent" },
    ],
    highlight: false,
  },
  {
    id: "myir",
    title: "MyIR",
    tag: "Powered by FAIR",
    price: "Included with Core IR",
    priceNote: "The world's first agentic IR OS",
    description:
      "MyIR is your IR operating system — included with Core IR and powered by FAIR (Fully Automated Investor Relations). It manages your phone system, email inbox, CRM, and communications with a dedicated FAIR agent.",
    longDescription:
      "FAIR streamlines both inbound and outbound communication with shareholders and subscribers while providing live reporting for real-time insights. It's the backbone that keeps your IR infrastructure running efficiently.",
    features: [
      { title: "Dedicated FAIR Agent", detail: "AI-powered agent managing your IR communications" },
      { title: "Phone Management", detail: "Inbound call handling and voicemail management" },
      { title: "Email Inbox", detail: "Investor email triage, routing, and response management" },
      { title: "CRM Management", detail: "Shareholder tracking, notes, and engagement history" },
      { title: "Live Reporting", detail: "Real-time dashboards on communication activity" },
      { title: "Compliance Monitoring", detail: "Automated checks across global regulatory frameworks" },
    ],
    highlight: true,
  },
  {
    id: "essential-ir",
    title: "Essential IR",
    tag: "Active Management",
    price: "Custom Pricing",
    priceNote: "Hands-on IR management",
    description:
      "Hands-on investor relations management by our experienced team. We draft and disseminate your investor updates, manage inbound communications, handle disclosure support, and keep your shareholders actively engaged.",
    longDescription:
      "Essential IR is for issuers who want a professional IR team managing their communications day-to-day. From press releases to shareholder inquiries, from compliance reviews to strategic messaging — we handle it.",
    features: [
      { title: "Update Drafting", detail: "Professional investor updates and press releases" },
      { title: "Dissemination", detail: "Distribution across news wires and investor channels" },
      { title: "Inbound Management", detail: "Shareholder inquiries handled by our team" },
      { title: "Disclosure Support", detail: "Regulatory compliance review for all communications" },
      { title: "Shareholder Engagement", detail: "Proactive outreach and relationship building" },
      { title: "Strategic Messaging", detail: "Positioning and narrative development for your story" },
    ],
    highlight: false,
  },
  {
    id: "momentum-ir",
    title: "Momentum IR",
    tag: "Growth & Visibility",
    price: "Custom Budget",
    priceNote: "Digital marketing for public companies",
    description:
      "Digital marketing campaign execution designed specifically for public companies. We amplify your story across Google, LinkedIn, and financial platforms to drive visibility, awareness, and investor interest.",
    longDescription:
      "Momentum IR goes beyond traditional IR. We run targeted campaigns that put your company in front of the right investors on the right platforms — with full performance tracking and optimization.",
    features: [
      { title: "Google Campaigns", detail: "Search and display advertising targeting investors" },
      { title: "LinkedIn Campaigns", detail: "Professional audience targeting for institutional reach" },
      { title: "Financial Platforms", detail: "Advertising on financial news and research sites" },
      { title: "Audience Building", detail: "Targeted investor audience development" },
      { title: "Performance Analytics", detail: "Full campaign tracking, attribution, and reporting" },
      { title: "Brand Amplification", detail: "Content promotion and awareness campaigns" },
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-primary-200 max-w-2xl">
            A connected IR ecosystem — from building your infrastructure to
            managing communications to driving investor interest.
          </p>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {[
              { label: "Core IR", sub: "Build infrastructure" },
              { label: "MyIR", sub: "Manage it (FAIR)" },
              { label: "Essential IR", sub: "Active IR management" },
              { label: "Momentum IR", sub: "Drive growth" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-semibold text-gray-900 block">
                    {step.label}
                  </span>
                  <span className="text-xs text-gray-500">{step.sub}</span>
                </div>
                {i < 3 && (
                  <svg
                    className="w-5 h-5 text-gray-400 hidden md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`rounded-2xl overflow-hidden ${
                  service.highlight
                    ? "bg-primary-900 text-white"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Info */}
                    <div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          service.highlight
                            ? "text-primary-300"
                            : "text-primary-600"
                        }`}
                      >
                        {service.tag}
                      </span>
                      <h2
                        className={`text-3xl font-bold mt-2 mb-2 ${
                          service.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h2>
                      <div className="mb-6">
                        <span
                          className={`text-lg font-semibold ${
                            service.highlight
                              ? "text-primary-200"
                              : "text-primary-600"
                          }`}
                        >
                          {service.price}
                        </span>
                        <span
                          className={`text-sm block ${
                            service.highlight
                              ? "text-primary-400"
                              : "text-gray-500"
                          }`}
                        >
                          {service.priceNote}
                        </span>
                      </div>
                      <p
                        className={`leading-relaxed mb-4 ${
                          service.highlight
                            ? "text-primary-100"
                            : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                      <p
                        className={`leading-relaxed text-sm ${
                          service.highlight
                            ? "text-primary-200"
                            : "text-gray-500"
                        }`}
                      >
                        {service.longDescription}
                      </p>
                      <Link
                        href="/contact"
                        className={`inline-block mt-8 px-6 py-3 rounded-lg font-semibold transition-colors ${
                          service.highlight
                            ? "bg-white text-primary-900 hover:bg-primary-50"
                            : "bg-primary-600 text-white hover:bg-primary-700"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>

                    {/* Right: Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature.title}
                          className={`rounded-xl p-4 ${
                            service.highlight
                              ? "bg-white/5 border border-white/10"
                              : "bg-gray-50 border border-gray-100"
                          }`}
                        >
                          <h4
                            className={`text-sm font-semibold mb-1 ${
                              service.highlight ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {feature.title}
                          </h4>
                          <p
                            className={`text-xs ${
                              service.highlight
                                ? "text-primary-300"
                                : "text-gray-500"
                            }`}
                          >
                            {feature.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Built to the Highest Standards
          </h2>
          <p className="text-gray-600 mb-8">
            All Fairfax services are built to the highest public market
            standards. Every communication is reviewed for accuracy, approval,
            and compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Section 52(2) Canada",
              "Rule 10b-5 U.S.",
              "EU MAR",
              "UK DTR 2",
            ].map((reg) => (
              <span
                key={reg}
                className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm shadow-sm"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start with Core IR — It&apos;s Complimentary
          </h2>
          <p className="text-primary-200 text-lg mb-8">
            We&apos;ll build your investor website, set up your CRM, and get you
            a dedicated number. Then MyIR keeps it all running.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
