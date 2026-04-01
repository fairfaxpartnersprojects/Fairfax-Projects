import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Link from "next/link";

const services = [
  {
    title: "Strategy Consulting",
    description:
      "We help organizations define their strategic direction, identify growth opportunities, and build competitive advantages that last.",
    features: [
      "Market analysis & competitive intelligence",
      "Growth strategy development",
      "Business model innovation",
      "Strategic planning & roadmapping",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "End-to-end digital solutions that modernize your technology stack, automate processes, and create exceptional digital experiences.",
    features: [
      "Technology strategy & architecture",
      "Cloud migration & modernization",
      "Customer experience design",
      "Data & analytics platforms",
    ],
  },
  {
    title: "Financial Advisory",
    description:
      "Expert financial guidance across the full spectrum of corporate finance, from fundraising to M&A execution.",
    features: [
      "Mergers & acquisitions",
      "Capital raising & structuring",
      "Valuation & financial modeling",
      "Due diligence & integration",
    ],
  },
  {
    title: "Operations Excellence",
    description:
      "Optimize your operations for efficiency, resilience, and scalability with our proven methodologies.",
    features: [
      "Process optimization & automation",
      "Supply chain transformation",
      "Cost reduction programs",
      "Quality management systems",
    ],
  },
  {
    title: "Talent & Organization",
    description:
      "Build high-performing teams and organizational structures that support your strategic ambitions.",
    features: [
      "Organizational design",
      "Leadership development",
      "Change management",
      "Culture transformation",
    ],
  },
  {
    title: "Risk & Compliance",
    description:
      "Navigate regulatory complexity and manage risk effectively with our specialized advisory services.",
    features: [
      "Regulatory compliance programs",
      "Enterprise risk management",
      "Cybersecurity strategy",
      "Business continuity planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-200 max-w-2xl">
            Comprehensive solutions designed to address your most critical
            business challenges and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card border border-gray-100 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our team will help identify the right solutions for your specific
            challenges. Schedule a free consultation today.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
