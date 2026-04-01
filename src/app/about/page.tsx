import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const team = [
  {
    name: "Alexandra Hughes",
    role: "Managing Partner & CEO",
    bio: "20+ years in strategic consulting. Former McKinsey partner with expertise in Fortune 500 transformations.",
  },
  {
    name: "David Park",
    role: "Chief Technology Officer",
    bio: "Former VP of Engineering at a leading tech firm. Specialist in enterprise digital transformation.",
  },
  {
    name: "Maria Santos",
    role: "Chief Financial Officer",
    bio: "CPA with extensive M&A experience. Previously led financial advisory at a top investment bank.",
  },
  {
    name: "James Whitfield",
    role: "Head of Operations",
    bio: "Supply chain and operations expert with global experience across manufacturing and logistics.",
  },
];

const values = [
  {
    title: "Client-Centric",
    description: "Every solution is designed around our clients' unique needs and long-term success.",
  },
  {
    title: "Innovation-Driven",
    description: "We leverage cutting-edge methodologies and technologies to deliver superior results.",
  },
  {
    title: "Integrity First",
    description: "Transparent communication and ethical practices are the foundation of everything we do.",
  },
  {
    title: "Results-Oriented",
    description: "We measure our success by the measurable impact we create for our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-200 max-w-2xl">
            We&apos;re a team of experienced strategists, technologists, and
            advisors passionate about driving business growth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Fairfax Partners began with a simple mission:
                  to help businesses navigate complexity and unlock their full
                  potential. What started as a small consulting firm has grown
                  into a comprehensive strategic advisory practice.
                </p>
                <p>
                  Over 15 years, we&apos;ve partnered with over 500 organizations
                  across industries, from emerging startups to Fortune 500
                  enterprises. Our multidisciplinary approach combines strategic
                  insight with practical execution.
                </p>
                <p>
                  Today, our team of 100+ professionals operates globally,
                  delivering transformative results that drive sustainable growth
                  and competitive advantage.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-primary-800 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
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

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
