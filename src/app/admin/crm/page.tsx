"use client";

import { useState } from "react";

type Tab = "issuers" | "contacts" | "pipeline";

const issuers = [
  { id: 1, name: "Noveris Health Sciences", ticker: "NRVS", exchange: "CSE", services: ["Core IR", "MyIR", "Essential IR"], status: "Active", onboarded: "Mar 15, 2026" },
  { id: 2, name: "Atlas Mining Corp", ticker: "ATMC", exchange: "TSX", services: ["Core IR", "MyIR", "Essential IR", "Momentum IR"], status: "Active", onboarded: "Feb 20, 2026" },
  { id: 3, name: "Vertex Biotech Inc.", ticker: "VRTX", exchange: "NASDAQ", services: ["Core IR", "MyIR", "Momentum IR"], status: "Active", onboarded: "Jan 10, 2026" },
  { id: 4, name: "BlueSky Minerals", ticker: "BSKY", exchange: "CSE", services: ["Core IR", "MyIR"], status: "Onboarding", onboarded: "Mar 28, 2026" },
  { id: 5, name: "NexGen Energy Ltd.", ticker: "NXE", exchange: "TSX", services: ["Core IR", "MyIR", "Essential IR"], status: "Active", onboarded: "Nov 5, 2025" },
  { id: 6, name: "Summit Fintech Group", ticker: "SFG", exchange: "OTC", services: ["Core IR", "MyIR", "Essential IR"], status: "Active", onboarded: "Dec 12, 2025" },
  { id: 7, name: "Meridian CleanTech", ticker: "MCT", exchange: "Euronext", services: ["Core IR", "MyIR"], status: "Active", onboarded: "Jan 28, 2026" },
  { id: 8, name: "Pinnacle Gold Corp", ticker: "PGC", exchange: "LSE", services: ["Core IR", "MyIR", "Momentum IR"], status: "Active", onboarded: "Feb 8, 2026" },
];

const contacts = [
  { id: 1, name: "James Whitmore", email: "jwhitmore@noveris.com", company: "Noveris Health Sciences", role: "CEO", type: "Issuer" },
  { id: 2, name: "Sarah Chen", email: "schen@atlasmining.com", company: "Atlas Mining Corp", role: "CFO", type: "Issuer" },
  { id: 3, name: "David Park", email: "dpark@vertexbio.com", company: "Vertex Biotech Inc.", role: "IR Contact", type: "Issuer" },
  { id: 4, name: "Robert Klein", email: "rklein@hedgefund.com", company: "Klein Capital", role: "Portfolio Manager", type: "Investor" },
  { id: 5, name: "Amanda Foster", email: "afoster@pension.ca", company: "National Pension Fund", role: "Analyst", type: "Investor" },
  { id: 6, name: "Michael Torres", email: "mtorres@family.office", company: "Torres Family Office", role: "Principal", type: "Investor" },
];

const pipeline = [
  { id: 1, company: "GreenLeaf Cannabis Corp", exchange: "CSE", stage: "Proposal Sent", services: "Core IR + Essential IR", value: "$5,194/mo", probability: 75 },
  { id: 2, company: "Nordic Mining AS", exchange: "Euronext", stage: "Discovery Call", services: "Core IR + MyIR", value: "$1,195/mo", probability: 40 },
  { id: 3, company: "Quantum AI Technologies", exchange: "NASDAQ", stage: "Negotiation", services: "Full Suite", value: "$49,194/mo", probability: 85 },
  { id: 4, company: "Pacific Lithium Inc.", exchange: "TSX", stage: "Proposal Sent", services: "Core IR + Momentum IR", value: "$44,000/mo", probability: 60 },
  { id: 5, company: "BioVenture Therapeutics", exchange: "OTC", stage: "Discovery Call", services: "Core IR + Essential IR", value: "$5,194/mo", probability: 30 },
];

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<Tab>("issuers");
  const [search, setSearch] = useState("");

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "issuers", label: "Issuers", count: issuers.length },
    { key: "contacts", label: "Contacts", count: contacts.length },
    { key: "pipeline", label: "Pipeline", count: pipeline.length },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM</h1>
          <p className="text-gray-500 mt-1">
            Manage issuers, contacts, and the sales pipeline
          </p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Onboard Issuer
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
            <span className="ml-2 text-xs text-gray-400">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field max-w-md"
        />
      </div>

      {/* Issuers Table */}
      {activeTab === "issuers" && (
        <div className="admin-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="table-header">Issuer</th>
                  <th className="table-header">Ticker</th>
                  <th className="table-header">Exchange</th>
                  <th className="table-header">Services</th>
                  <th className="table-header">Status</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {issuers
                  .filter(
                    (i) =>
                      i.name.toLowerCase().includes(search.toLowerCase()) ||
                      i.ticker.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((issuer) => (
                    <tr key={issuer.id} className="hover:bg-gray-50">
                      <td className="table-cell font-medium">{issuer.name}</td>
                      <td className="table-cell font-mono text-sm text-primary-600">
                        {issuer.ticker}
                      </td>
                      <td className="table-cell">
                        <span className="badge-gray">{issuer.exchange}</span>
                      </td>
                      <td className="table-cell">
                        <div className="flex flex-wrap gap-1">
                          {issuer.services.map((s) => (
                            <span
                              key={s}
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                s === "Core IR"
                                  ? "bg-blue-50 text-blue-700"
                                  : s === "MyIR"
                                  ? "bg-primary-50 text-primary-700"
                                  : s === "Essential IR"
                                  ? "bg-purple-50 text-purple-700"
                                  : "bg-orange-50 text-orange-700"
                              }`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="table-cell">
                        <span
                          className={
                            issuer.status === "Active"
                              ? "badge-green"
                              : "badge-yellow"
                          }
                        >
                          {issuer.status}
                        </span>
                      </td>
                      <td className="table-cell">
                        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Contacts Table */}
      {activeTab === "contacts" && (
        <div className="admin-card overflow-hidden p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">Company</th>
                <th className="table-header">Role</th>
                <th className="table-header">Type</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts
                .filter(
                  (c) =>
                    c.name.toLowerCase().includes(search.toLowerCase()) ||
                    c.company.toLowerCase().includes(search.toLowerCase())
                )
                .map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="table-cell font-medium">{contact.name}</td>
                    <td className="table-cell text-gray-500">
                      {contact.email}
                    </td>
                    <td className="table-cell">{contact.company}</td>
                    <td className="table-cell text-gray-500">
                      {contact.role}
                    </td>
                    <td className="table-cell">
                      <span
                        className={
                          contact.type === "Issuer"
                            ? "badge-blue"
                            : "badge-green"
                        }
                      >
                        {contact.type}
                      </span>
                    </td>
                    <td className="table-cell">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pipeline Table */}
      {activeTab === "pipeline" && (
        <>
          <div className="admin-card overflow-hidden p-0">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="table-header">Company</th>
                  <th className="table-header">Exchange</th>
                  <th className="table-header">Stage</th>
                  <th className="table-header">Services</th>
                  <th className="table-header">MRR</th>
                  <th className="table-header">Probability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pipeline
                  .filter((p) =>
                    p.company.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((deal) => (
                    <tr key={deal.id} className="hover:bg-gray-50">
                      <td className="table-cell font-medium">
                        {deal.company}
                      </td>
                      <td className="table-cell">
                        <span className="badge-gray">{deal.exchange}</span>
                      </td>
                      <td className="table-cell">
                        <span
                          className={
                            deal.stage === "Negotiation"
                              ? "badge-yellow"
                              : deal.stage === "Proposal Sent"
                              ? "badge-blue"
                              : "badge-gray"
                          }
                        >
                          {deal.stage}
                        </span>
                      </td>
                      <td className="table-cell text-sm text-gray-600">
                        {deal.services}
                      </td>
                      <td className="table-cell font-semibold text-green-700">
                        {deal.value}
                      </td>
                      <td className="table-cell">{deal.probability}%</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pipeline Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { stage: "Discovery", count: 2, mrr: "$6,389" },
              { stage: "Proposal Sent", count: 2, mrr: "$49,194" },
              { stage: "Negotiation", count: 1, mrr: "$49,194" },
            ].map((p) => (
              <div key={p.stage} className="stat-card">
                <span className="text-sm text-gray-500">{p.stage}</span>
                <span className="text-xl font-bold text-gray-900 mt-1">
                  {p.mrr}
                </span>
                <span className="text-xs text-gray-400">
                  {p.count} prospective issuer{p.count !== 1 ? "s" : ""}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
