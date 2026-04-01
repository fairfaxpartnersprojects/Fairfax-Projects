"use client";

import { useState } from "react";

const overviewStats = [
  { label: "Total Visitors", value: "18,247", change: "+12.3%", up: true },
  { label: "Page Views", value: "54,892", change: "+8.7%", up: true },
  { label: "Avg. Session Duration", value: "3m 42s", change: "+5.2%", up: true },
  { label: "Bounce Rate", value: "38.4%", change: "-2.1%", up: true },
];

const trafficSources = [
  { source: "Organic Search", visitors: 7892, percentage: 43, color: "bg-green-500" },
  { source: "Direct", visitors: 4012, percentage: 22, color: "bg-blue-500" },
  { source: "Social Media", visitors: 3284, percentage: 18, color: "bg-purple-500" },
  { source: "Referral", visitors: 1823, percentage: 10, color: "bg-orange-500" },
  { source: "Email", visitors: 1236, percentage: 7, color: "bg-pink-500" },
];

const topPages = [
  { page: "/", title: "Home", views: 12847, unique: 9234, avgTime: "2m 15s" },
  { page: "/services", title: "Services", views: 8923, unique: 6712, avgTime: "3m 48s" },
  { page: "/about", title: "About Us", views: 6234, unique: 4891, avgTime: "2m 32s" },
  { page: "/contact", title: "Contact", views: 4123, unique: 3456, avgTime: "1m 54s" },
  { page: "/blog/q1-insights", title: "Q1 Market Insights", views: 3892, unique: 3102, avgTime: "5m 12s" },
];

const dailyVisitors = [
  { day: "Mon", visitors: 2841 },
  { day: "Tue", visitors: 3124 },
  { day: "Wed", visitors: 2956 },
  { day: "Thu", visitors: 3287 },
  { day: "Fri", visitors: 2678 },
  { day: "Sat", visitors: 1234 },
  { day: "Sun", visitors: 1127 },
];

const deviceBreakdown = [
  { device: "Desktop", percentage: 62, sessions: "11,313" },
  { device: "Mobile", percentage: 31, sessions: "5,657" },
  { device: "Tablet", percentage: 7, sessions: "1,277" },
];

const conversions = [
  { goal: "Contact Form Submission", completions: 147, rate: "3.2%" },
  { goal: "Newsletter Signup", completions: 234, rate: "5.1%" },
  { goal: "Service Page CTA Click", completions: 389, rate: "4.4%" },
  { goal: "Document Download", completions: 178, rate: "2.8%" },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("30d");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">
            Website traffic, conversions, and audience insights
          </p>
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {[
            { key: "7d", label: "7D" },
            { key: "30d", label: "30D" },
            { key: "90d", label: "90D" },
            { key: "12m", label: "12M" },
          ].map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                period === p.key
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="text-sm text-gray-500">{stat.label}</span>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className={`text-sm font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Daily Visitors Chart */}
        <div className="admin-card lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Daily Visitors (This Week)
          </h2>
          <div className="flex items-end gap-4 h-48">
            {dailyVisitors.map((d) => {
              const maxVisitors = Math.max(
                ...dailyVisitors.map((x) => x.visitors)
              );
              const height = (d.visitors / maxVisitors) * 100;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {d.visitors.toLocaleString()}
                  </span>
                  <div
                    className="w-full bg-primary-500 rounded-t-md transition-all duration-500 hover:bg-primary-600"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-500">{d.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{source.source}</span>
                  <span className="text-gray-500">
                    {source.visitors.toLocaleString()} ({source.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${source.color} h-2 rounded-full`}
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Top Pages */}
        <div className="admin-card lg:col-span-2 p-0 overflow-hidden">
          <div className="p-6 pb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Top Pages
            </h2>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Page</th>
                <th className="table-header">Views</th>
                <th className="table-header">Unique</th>
                <th className="table-header">Avg. Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {topPages.map((page) => (
                <tr key={page.page} className="hover:bg-gray-50">
                  <td className="table-cell">
                    <div>
                      <span className="font-medium">{page.title}</span>
                      <span className="text-xs text-gray-400 block">
                        {page.page}
                      </span>
                    </div>
                  </td>
                  <td className="table-cell">
                    {page.views.toLocaleString()}
                  </td>
                  <td className="table-cell text-gray-500">
                    {page.unique.toLocaleString()}
                  </td>
                  <td className="table-cell text-gray-500">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Device & Conversions */}
        <div className="space-y-8">
          <div className="admin-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Devices
            </h2>
            <div className="space-y-3">
              {deviceBreakdown.map((device) => (
                <div key={device.device} className="flex items-center gap-3">
                  <div className="w-full bg-gray-100 rounded-full h-3 flex-1">
                    <div
                      className="bg-primary-500 h-3 rounded-full"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-sm font-medium text-gray-900">
                      {device.percentage}%
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 w-16">
                    {device.device}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Conversions
            </h2>
            <div className="space-y-3">
              {conversions.map((c) => (
                <div
                  key={c.goal}
                  className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div>
                    <span className="text-sm text-gray-900">{c.goal}</span>
                    <span className="text-xs text-gray-400 block">
                      {c.completions} completions
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-primary-600">
                    {c.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
