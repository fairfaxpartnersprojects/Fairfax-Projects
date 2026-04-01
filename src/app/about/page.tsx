import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const offices = [
  { city: "Vancouver", country: "Canada", type: "HQ" },
  { city: "Toronto", country: "Canada", type: "Office" },
  { city: "Lisbon", country: "Portugal", type: "Office" },
  { city: "Manchester", country: "UK", type: "Office" },
];

const values = [
  {
    title: "Compliance First",
    description:
      "Every communication is reviewed for accuracy and compliance with Section 52(2) Canada, Rule 10b-5 U.S., EU MAR, UK DTR 2, and their global equivalents.",
  },
  {
    title: "Technology-Driven",
    description:
      "Our FAIR agent — the world's first agentic IR operating system — sets a new standard for how public companies manage investor relations.",
  },
  {
    title: "Issuer-Centric",
    description:
      "We build solutions around the issuer's needs, not the other way around. From infrastructure to campaigns, everything is tailored to your story.",
  },
  {
    title: "Global Reach",
    description:
      "With teams in Lisbon, Manchester, Toronto, and Vancouver, we serve issuers across North America, Europe, and the UK on six major exchanges.",
  },
];

const milestones = [
  {
    year: "Founded",
    title: "Connecting Capital & Ideas",
    description:
      "Fairfax Partners Inc. was founded to bridge the gap between public companies and the investor community.",
  },
  {
    year: "FRAME",
    title: "Infrastructure Platform Launched",
    description:
      "Launched our complimentary communications infrastructure platform for investor website development, CRM, and digital integration.",
  },
  {
    year: "FAIR",
    title: "The World's First Agentic IR Agent",
    description:
      "Developed FAIR (Fully Automated Investor Relations) — an AI-powered operating system that manages inbound/outbound communications and live reporting.",
  },
  {
    year: "Today",
    title: "Core IR, Essential IR & Momentum IR",
    description:
      "Evolved into a full-service IR ecosystem: build infrastructure with Core IR, manage it with MyIR, activate with Essential IR, and grow with Momentum IR.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connecting Capital &amp; Ideas
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl">
            Fairfax Partners Inc. is a multi-disciplinary firm offering investor
            relations, venture capital, and corporate finance services for public
            and pre-public companies worldwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We believe every public company deserves professional,
                  compliant, and effective investor relations — regardless of
                  size or stage. Too many small and mid-cap issuers are
                  underserved, left to navigate complex regulatory environments
                  and investor communication on their own.
                </p>
                <p>
                  Fairfax Partners changes that. We unify the entire investor
                  relations ecosystem — from websites to communications, from
                  CRM to compliance, from press releases to digital campaigns —
                  into one intelligent, connected framework.
                </p>
                <p>
                  Our FAIR agent, the world&apos;s first agentic IR operating
                  system, is at the heart of everything we do — automating what
                  can be automated, so our team can focus on what matters:
                  telling your story and growing your shareholder base.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-12">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "6", label: "Exchanges" },
                  { value: "4", label: "Global Offices" },
                  { value: "100+", label: "Issuers Served" },
                  { value: "3", label: "Continents" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-primary-600">
                      {stat.value}
                    </div>
                    <div className="text-primary-800 text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 bg-primary-200 flex-1 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-semibold text-primary-600">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {m.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Global Presence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="card text-center">
                <h3 className="font-semibold text-gray-900">{office.city}</h3>
                <p className="text-sm text-gray-500">{office.country}</p>
                {office.type === "HQ" && (
                  <span className="badge-blue mt-2">Headquarters</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
