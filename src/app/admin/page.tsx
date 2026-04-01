"use client";

import Link from "next/link";

const stats = [
  { label: "Active Issuers", value: "47", change: "+6", up: true },
  { label: "MyIR Subscriptions", value: "38", change: "+4", up: true },
  { label: "Essential IR Clients", value: "22", change: "+2", up: true },
  { label: "Momentum Campaigns", value: "12", change: "+3", up: true },
];

const recentActivity = [
  { action: "New issuer onboarded", detail: "Noveris Health Sciences — Core IR + MyIR Pro", time: "25 min ago", type: "core" },
  { action: "Press release drafted", detail: "Atlas Mining Corp — Q1 Operational Update", time: "1 hour ago", type: "essential" },
  { action: "Momentum campaign live", detail: "Vertex Biotech — LinkedIn + Google Ads", time: "2 hours ago", type: "momentum" },
  { action: "FAIR agent alert", detail: "Inbound call spike for NexGen Energy — 14 calls today", time: "3 hours ago", type: "myir" },
  { action: "Investor website deployed", detail: "BlueSky Minerals — Core IR infrastructure complete", time: "5 hours ago", type: "core" },
  { action: "Disclosure review", detail: "Summit Fintech — Material change report approved", time: "6 hours ago", type: "essential" },
];

const quickActions = [
  { label: "Onboard Issuer", href: "/admin/crm", color: "bg-blue-500" },
  { label: "Draft Release", href: "/admin/content", color: "bg-purple-500" },
  { label: "Campaign Report", href: "/admin/analytics", color: "bg-green-500" },
  { label: "Social Post", href: "/admin/social", color: "bg-orange-500" },
];

const pipelineByService = [
  { service: "Core IR", active: 47, pending: 8, color: "bg-blue-500" },
  { service: "MyIR", active: 38, pending: 5, color: "bg-primary-500" },
  { service: "Essential IR", active: 22, pending: 4, color: "bg-purple-500" },
  { service: "Momentum IR", active: 12, pending: 6, color: "bg-orange-500" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Overview of issuers, services, and IR operations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="text-sm text-gray-500">{stat.label}</span>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span
                className={`text-sm font-medium ${
                  stat.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="admin-card flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <div
              className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900 text-sm">
              {action.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    item.type === "core"
                      ? "bg-blue-500"
                      : item.type === "essential"
                      ? "bg-purple-500"
                      : item.type === "momentum"
                      ? "bg-orange-500"
                      : "bg-primary-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {item.action}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {item.detail}
                  </p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Pipeline */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Service Pipeline
          </h2>
          <div className="space-y-6">
            {pipelineByService.map((p) => (
              <div key={p.service}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {p.service}
                  </span>
                  <div className="flex gap-3 text-xs">
                    <span className="text-gray-500">
                      {p.active} active
                    </span>
                    <span className="text-yellow-600">
                      {p.pending} pending
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${p.color} h-full rounded-full`}
                    style={{
                      width: `${(p.active / 50) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Active Issuers</span>
              <span className="text-lg font-bold text-gray-900">47</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
