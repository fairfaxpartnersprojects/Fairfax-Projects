"use client";

import Link from "next/link";

const stats = [
  { label: "Total Contacts", value: "2,847", change: "+12.5%", up: true },
  { label: "Active Deals", value: "124", change: "+8.2%", up: true },
  { label: "Revenue (MTD)", value: "$482K", change: "+23.1%", up: true },
  { label: "Website Visitors", value: "18.2K", change: "-3.1%", up: false },
];

const recentActivity = [
  { action: "New lead added", detail: "John Smith from Acme Corp", time: "5 min ago", type: "crm" },
  { action: "Post published", detail: "Q1 Market Insights on LinkedIn", time: "1 hour ago", type: "social" },
  { action: "Deal closed", detail: "$125K - TechStart Inc.", time: "2 hours ago", type: "deal" },
  { action: "New contact form", detail: "Emily Davis - Strategy inquiry", time: "3 hours ago", type: "crm" },
  { action: "Campaign launched", detail: "Spring Newsletter sent to 2.4K", time: "5 hours ago", type: "social" },
  { action: "Analytics alert", detail: "Traffic spike: +45% from organic", time: "6 hours ago", type: "analytics" },
];

const quickActions = [
  { label: "Add Contact", href: "/admin/crm", color: "bg-blue-500" },
  { label: "New Post", href: "/admin/social", color: "bg-purple-500" },
  { label: "View Reports", href: "/admin/analytics", color: "bg-green-500" },
  { label: "Edit Content", href: "/admin/content", color: "bg-orange-500" },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back. Here&apos;s what&apos;s happening today.
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
                    item.type === "crm"
                      ? "bg-blue-500"
                      : item.type === "social"
                      ? "bg-purple-500"
                      : item.type === "deal"
                      ? "bg-green-500"
                      : "bg-orange-500"
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

        {/* Revenue Chart Placeholder */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Overview
          </h2>
          <div className="space-y-4">
            {[
              { month: "Jan", value: 65, amount: "$320K" },
              { month: "Feb", value: 72, amount: "$355K" },
              { month: "Mar", value: 80, amount: "$395K" },
              { month: "Apr", value: 95, amount: "$482K" },
            ].map((bar) => (
              <div key={bar.month} className="flex items-center gap-4">
                <span className="text-sm text-gray-500 w-8">{bar.month}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="bg-primary-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-16 text-right">
                  {bar.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total YTD</span>
              <span className="text-lg font-bold text-gray-900">$1.55M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
