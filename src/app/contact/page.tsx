"use client";

import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-200 max-w-2xl">
            Ready to build your IR infrastructure? Get in touch and we&apos;ll
            get you started with Core IR — complimentary.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Headquarters
                </h3>
                <p className="text-gray-600 text-sm">
                  Suite #1504, 1221 Bidwell Street
                  <br />
                  Vancouver, BC V6G 0B1, Canada
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  connect@fairfax.partners
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+1 604 366 6277</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Global Offices
                </h3>
                <div className="space-y-2">
                  {[
                    "Vancouver, Canada (HQ)",
                    "Toronto, Canada",
                    "Lisbon, Portugal",
                    "Manchester, UK",
                  ].map((office) => (
                    <div
                      key={office}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {office}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Exchanges</h3>
                <div className="flex flex-wrap gap-2">
                  {["TSX", "CSE", "NASDAQ", "OTC", "Euronext", "LSE"].map(
                    (ex) => (
                      <span
                        key={ex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium"
                      >
                        {ex}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card text-center py-16">
                  <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent-600"
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
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Exchange / Listing
                      </label>
                      <select className="input-field">
                        <option value="">Select exchange</option>
                        <option>TSX</option>
                        <option>CSE</option>
                        <option>NASDAQ</option>
                        <option>OTC</option>
                        <option>Euronext</option>
                        <option>LSE</option>
                        <option>Pre-IPO / Private</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select className="input-field">
                      <option value="">Select a service</option>
                      <option>Core IR (Infrastructure Build)</option>
                      <option>MyIR (IR Management via FAIR)</option>
                      <option>Essential IR (Active IR Management)</option>
                      <option>Momentum IR (Digital Marketing)</option>
                      <option>Full Suite</option>
                      <option>Not Sure — Need Guidance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="input-field"
                      placeholder="Tell us about your company and what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
