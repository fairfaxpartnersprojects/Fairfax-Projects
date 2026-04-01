"use client";

import { useState } from "react";

type SettingsTab = "general" | "users" | "integrations" | "email" | "seo";

const users = [
  { id: 1, name: "Admin User", email: "admin@fairfax.com", role: "Super Admin", lastLogin: "Today" },
  { id: 2, name: "Alexandra Hughes", email: "a.hughes@fairfax.com", role: "Admin", lastLogin: "Today" },
  { id: 3, name: "David Park", email: "d.park@fairfax.com", role: "Editor", lastLogin: "Yesterday" },
  { id: 4, name: "Maria Santos", email: "m.santos@fairfax.com", role: "Editor", lastLogin: "3 days ago" },
];

const integrations = [
  { name: "Google Analytics", description: "Website traffic and user behavior analytics", connected: true, icon: "GA" },
  { name: "Google Search Console", description: "Search performance and indexing status", connected: true, icon: "SC" },
  { name: "Mailchimp", description: "Email marketing and newsletter management", connected: true, icon: "MC" },
  { name: "Slack", description: "Team notifications and alerts", connected: false, icon: "SL" },
  { name: "HubSpot", description: "Advanced CRM and marketing automation", connected: false, icon: "HS" },
  { name: "Stripe", description: "Payment processing and invoicing", connected: false, icon: "ST" },
  { name: "Zapier", description: "Workflow automation and app connections", connected: false, icon: "ZP" },
  { name: "Salesforce", description: "Enterprise CRM integration", connected: false, icon: "SF" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  const tabs: { key: SettingsTab; label: string }[] = [
    { key: "general", label: "General" },
    { key: "users", label: "Users & Roles" },
    { key: "integrations", label: "Integrations" },
    { key: "email", label: "Email" },
    { key: "seo", label: "SEO" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">
          Configure your site, manage users, and connect integrations
        </p>
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
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="admin-card max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            General Settings
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Name
              </label>
              <input
                type="text"
                defaultValue="Fairfax Partners"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tagline
              </label>
              <input
                type="text"
                defaultValue="Strategic Business Solutions"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="contact@fairfaxpartners.com"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="(703) 555-0100"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                rows={2}
                defaultValue="123 Business Ave, Suite 500&#10;Fairfax, VA 22030"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Timezone
              </label>
              <select className="input-field" defaultValue="ET">
                <option value="ET">Eastern Time (ET)</option>
                <option value="CT">Central Time (CT)</option>
                <option value="MT">Mountain Time (MT)</option>
                <option value="PT">Pacific Time (PT)</option>
              </select>
            </div>
            <button className="btn-primary text-sm">Save Changes</button>
          </div>
        </div>
      )}

      {/* Users & Roles */}
      {activeTab === "users" && (
        <div>
          <div className="flex justify-end mb-4">
            <button className="btn-primary text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Invite User
            </button>
          </div>
          <div className="admin-card p-0 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="table-header">User</th>
                  <th className="table-header">Role</th>
                  <th className="table-header">Last Login</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="table-cell">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold text-xs">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">{user.name}</span>
                          <span className="text-xs text-gray-400 block">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span
                        className={
                          user.role === "Super Admin"
                            ? "badge-red"
                            : user.role === "Admin"
                            ? "badge-blue"
                            : "badge-gray"
                        }
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="table-cell text-gray-500">
                      {user.lastLogin}
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
        </div>
      )}

      {/* Integrations */}
      {activeTab === "integrations" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="admin-card flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-xs">
                  {integration.icon}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {integration.description}
                </p>
              </div>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  integration.connected
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {integration.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Email Settings */}
      {activeTab === "email" && (
        <div className="admin-card max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Email Configuration
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Host
              </label>
              <input
                type="text"
                defaultValue="smtp.mailprovider.com"
                className="input-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Port
                </label>
                <input
                  type="text"
                  defaultValue="587"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Encryption
                </label>
                <select className="input-field" defaultValue="tls">
                  <option value="tls">TLS</option>
                  <option value="ssl">SSL</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From Name
              </label>
              <input
                type="text"
                defaultValue="Fairfax Partners"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From Email
              </label>
              <input
                type="email"
                defaultValue="noreply@fairfaxpartners.com"
                className="input-field"
              />
            </div>
            <div className="flex gap-3">
              <button className="btn-primary text-sm">Save Changes</button>
              <button className="btn-secondary text-sm">
                Send Test Email
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEO Settings */}
      {activeTab === "seo" && (
        <div className="admin-card max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            SEO Settings
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Title
              </label>
              <input
                type="text"
                defaultValue="Fairfax Partners | Strategic Business Solutions"
                className="input-field"
              />
              <p className="text-xs text-gray-400 mt-1">
                Recommended: 50-60 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Description
              </label>
              <textarea
                rows={3}
                defaultValue="Fairfax Partners delivers innovative strategic business solutions, consulting, and technology services to help companies grow and succeed."
                className="input-field"
              />
              <p className="text-xs text-gray-400 mt-1">
                Recommended: 150-160 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Google Analytics Tracking ID
              </label>
              <input
                type="text"
                defaultValue="G-XXXXXXXXXX"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Google Search Console Verification
              </label>
              <input
                type="text"
                placeholder="Enter verification meta tag"
                className="input-field"
              />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="sitemap" defaultChecked className="w-4 h-4 text-primary-600" />
              <label htmlFor="sitemap" className="text-sm text-gray-700">
                Auto-generate XML sitemap
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="robots" defaultChecked className="w-4 h-4 text-primary-600" />
              <label htmlFor="robots" className="text-sm text-gray-700">
                Allow search engine indexing
              </label>
            </div>
            <button className="btn-primary text-sm">Save Changes</button>
          </div>
        </div>
      )}
    </div>
  );
}
