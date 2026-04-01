"use client";

import { useState } from "react";

type Tab = "contacts" | "leads" | "deals";

const contacts = [
  { id: 1, name: "John Smith", email: "john@acmecorp.com", company: "Acme Corp", phone: "(555) 123-4567", status: "Active" },
  { id: 2, name: "Sarah Johnson", email: "sarah@techstart.io", company: "TechStart Inc.", phone: "(555) 234-5678", status: "Active" },
  { id: 3, name: "Michael Chen", email: "mchen@globallog.com", company: "Global Logistics", phone: "(555) 345-6789", status: "Inactive" },
  { id: 4, name: "Emily Davis", email: "emily@meridian.health", company: "Meridian Health", phone: "(555) 456-7890", status: "Active" },
  { id: 5, name: "Robert Wilson", email: "rwilson@pinnacle.co", company: "Pinnacle Solutions", phone: "(555) 567-8901", status: "Lead" },
  { id: 6, name: "Lisa Martinez", email: "lisa@innovate.ai", company: "InnovateAI", phone: "(555) 678-9012", status: "Active" },
];

const leads = [
  { id: 1, name: "David Park", company: "NextGen Tech", source: "Website", score: 92, stage: "Qualified", value: "$85K" },
  { id: 2, name: "Amanda Foster", company: "Blue Sky Media", source: "Referral", score: 87, stage: "Meeting", value: "$120K" },
  { id: 3, name: "Kevin Brown", company: "Atlas Industries", source: "LinkedIn", score: 74, stage: "Proposal", value: "$200K" },
  { id: 4, name: "Rachel Kim", company: "Vertex Solutions", source: "Event", score: 68, stage: "Qualified", value: "$65K" },
  { id: 5, name: "Chris Taylor", company: "Summit Group", source: "Cold Call", score: 55, stage: "New", value: "$150K" },
];

const deals = [
  { id: 1, name: "Enterprise Platform Upgrade", company: "Acme Corp", value: "$250K", stage: "Negotiation", probability: 85, close: "Apr 15" },
  { id: 2, name: "Digital Strategy Engagement", company: "TechStart Inc.", value: "$125K", stage: "Closed Won", probability: 100, close: "Mar 28" },
  { id: 3, name: "Supply Chain Optimization", company: "Global Logistics", value: "$340K", stage: "Proposal", probability: 60, close: "May 10" },
  { id: 4, name: "Healthcare Analytics Platform", company: "Meridian Health", value: "$180K", stage: "Discovery", probability: 30, close: "Jun 1" },
  { id: 5, name: "Compliance Automation Suite", company: "Pinnacle Solutions", value: "$95K", stage: "Negotiation", probability: 75, close: "Apr 22" },
];

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<Tab>("contacts");
  const [search, setSearch] = useState("");

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "contacts", label: "Contacts", count: contacts.length },
    { key: "leads", label: "Leads", count: leads.length },
    { key: "deals", label: "Deals", count: deals.length },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM</h1>
          <p className="text-gray-500 mt-1">
            Manage contacts, leads, and deals
          </p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New
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

      {/* Contacts Table */}
      {activeTab === "contacts" && (
        <div className="admin-card overflow-hidden p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">Company</th>
                <th className="table-header">Phone</th>
                <th className="table-header">Status</th>
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
                    <td className="table-cell text-gray-500">{contact.email}</td>
                    <td className="table-cell">{contact.company}</td>
                    <td className="table-cell text-gray-500">{contact.phone}</td>
                    <td className="table-cell">
                      <span
                        className={
                          contact.status === "Active"
                            ? "badge-green"
                            : contact.status === "Lead"
                            ? "badge-blue"
                            : "badge-gray"
                        }
                      >
                        {contact.status}
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

      {/* Leads Table */}
      {activeTab === "leads" && (
        <div className="admin-card overflow-hidden p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Company</th>
                <th className="table-header">Source</th>
                <th className="table-header">Score</th>
                <th className="table-header">Stage</th>
                <th className="table-header">Est. Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads
                .filter(
                  (l) =>
                    l.name.toLowerCase().includes(search.toLowerCase()) ||
                    l.company.toLowerCase().includes(search.toLowerCase())
                )
                .map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="table-cell font-medium">{lead.name}</td>
                    <td className="table-cell">{lead.company}</td>
                    <td className="table-cell text-gray-500">{lead.source}</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              lead.score >= 80
                                ? "bg-green-500"
                                : lead.score >= 60
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {lead.score}
                        </span>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span
                        className={
                          lead.stage === "Proposal"
                            ? "badge-blue"
                            : lead.stage === "Meeting"
                            ? "badge-yellow"
                            : lead.stage === "Qualified"
                            ? "badge-green"
                            : "badge-gray"
                        }
                      >
                        {lead.stage}
                      </span>
                    </td>
                    <td className="table-cell font-medium">{lead.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Deals Table */}
      {activeTab === "deals" && (
        <div className="admin-card overflow-hidden p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Deal Name</th>
                <th className="table-header">Company</th>
                <th className="table-header">Value</th>
                <th className="table-header">Stage</th>
                <th className="table-header">Probability</th>
                <th className="table-header">Close Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {deals
                .filter(
                  (d) =>
                    d.name.toLowerCase().includes(search.toLowerCase()) ||
                    d.company.toLowerCase().includes(search.toLowerCase())
                )
                .map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50">
                    <td className="table-cell font-medium">{deal.name}</td>
                    <td className="table-cell">{deal.company}</td>
                    <td className="table-cell font-semibold text-green-700">
                      {deal.value}
                    </td>
                    <td className="table-cell">
                      <span
                        className={
                          deal.stage === "Closed Won"
                            ? "badge-green"
                            : deal.stage === "Negotiation"
                            ? "badge-yellow"
                            : deal.stage === "Proposal"
                            ? "badge-blue"
                            : "badge-gray"
                        }
                      >
                        {deal.stage}
                      </span>
                    </td>
                    <td className="table-cell">{deal.probability}%</td>
                    <td className="table-cell text-gray-500">{deal.close}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pipeline Summary for Deals */}
      {activeTab === "deals" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            { stage: "Discovery", count: 1, value: "$180K", color: "border-gray-400" },
            { stage: "Proposal", count: 1, value: "$340K", color: "border-blue-400" },
            { stage: "Negotiation", count: 2, value: "$345K", color: "border-yellow-400" },
            { stage: "Closed Won", count: 1, value: "$125K", color: "border-green-400" },
          ].map((p) => (
            <div key={p.stage} className={`stat-card border-l-4 ${p.color}`}>
              <span className="text-sm text-gray-500">{p.stage}</span>
              <span className="text-xl font-bold text-gray-900 mt-1">
                {p.value}
              </span>
              <span className="text-xs text-gray-400">
                {p.count} deal{p.count !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
