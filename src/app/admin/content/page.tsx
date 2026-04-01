"use client";

import { useState } from "react";

type ContentType = "pages" | "blog" | "media";

const pages = [
  { id: 1, title: "Home Page", slug: "/", status: "Published", lastModified: "Mar 28, 2026", author: "Admin" },
  { id: 2, title: "About Us", slug: "/about", status: "Published", lastModified: "Mar 25, 2026", author: "Admin" },
  { id: 3, title: "Services", slug: "/services", status: "Published", lastModified: "Mar 20, 2026", author: "Admin" },
  { id: 4, title: "Contact", slug: "/contact", status: "Published", lastModified: "Mar 15, 2026", author: "Admin" },
  { id: 5, title: "Careers", slug: "/careers", status: "Draft", lastModified: "Mar 30, 2026", author: "Admin" },
];

const blogPosts = [
  { id: 1, title: "Q1 2026 Market Insights", category: "Industry", status: "Published", date: "Mar 28, 2026", views: 3892 },
  { id: 2, title: "5 Trends in Strategic Consulting", category: "Insights", status: "Published", date: "Mar 20, 2026", views: 2145 },
  { id: 3, title: "Client Success: TechStart Transformation", category: "Case Study", status: "Published", date: "Mar 15, 2026", views: 1823 },
  { id: 4, title: "The Future of Digital Operations", category: "Technology", status: "Draft", date: "Apr 1, 2026", views: 0 },
  { id: 5, title: "Annual Report 2025 Highlights", category: "Company", status: "Review", date: "Mar 30, 2026", views: 0 },
];

const mediaFiles = [
  { id: 1, name: "hero-banner.jpg", type: "Image", size: "2.4 MB", uploaded: "Mar 28, 2026" },
  { id: 2, name: "team-photo.jpg", type: "Image", size: "3.1 MB", uploaded: "Mar 25, 2026" },
  { id: 3, name: "annual-report-2025.pdf", type: "PDF", size: "8.7 MB", uploaded: "Mar 20, 2026" },
  { id: 4, name: "logo-dark.svg", type: "SVG", size: "12 KB", uploaded: "Feb 15, 2026" },
  { id: 5, name: "case-study-techstart.pdf", type: "PDF", size: "4.2 MB", uploaded: "Mar 15, 2026" },
  { id: 6, name: "office-video.mp4", type: "Video", size: "45.8 MB", uploaded: "Mar 10, 2026" },
];

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<ContentType>("pages");

  const tabs: { key: ContentType; label: string }[] = [
    { key: "pages", label: "Pages" },
    { key: "blog", label: "Blog Posts" },
    { key: "media", label: "Media Library" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Manager</h1>
          <p className="text-gray-500 mt-1">
            Manage website pages, blog posts, and media files
          </p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New
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
          </button>
        ))}
      </div>

      {/* Pages */}
      {activeTab === "pages" && (
        <div className="admin-card p-0 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Slug</th>
                <th className="table-header">Status</th>
                <th className="table-header">Last Modified</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium">{page.title}</td>
                  <td className="table-cell text-gray-500 font-mono text-xs">
                    {page.slug}
                  </td>
                  <td className="table-cell">
                    <span
                      className={
                        page.status === "Published"
                          ? "badge-green"
                          : "badge-yellow"
                      }
                    >
                      {page.status}
                    </span>
                  </td>
                  <td className="table-cell text-gray-500">
                    {page.lastModified}
                  </td>
                  <td className="table-cell">
                    <div className="flex gap-3">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-sm">
                        Preview
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Blog Posts */}
      {activeTab === "blog" && (
        <div className="admin-card p-0 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Category</th>
                <th className="table-header">Status</th>
                <th className="table-header">Date</th>
                <th className="table-header">Views</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium">{post.title}</td>
                  <td className="table-cell">
                    <span className="badge-blue">{post.category}</span>
                  </td>
                  <td className="table-cell">
                    <span
                      className={
                        post.status === "Published"
                          ? "badge-green"
                          : post.status === "Draft"
                          ? "badge-yellow"
                          : "badge-gray"
                      }
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="table-cell text-gray-500">{post.date}</td>
                  <td className="table-cell text-gray-500">
                    {post.views > 0 ? post.views.toLocaleString() : "-"}
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

      {/* Media Library */}
      {activeTab === "media" && (
        <div>
          <div className="admin-card mb-6 border-2 border-dashed border-gray-300 text-center py-8">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-gray-600 font-medium">
              Drag & drop files here or click to upload
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Supports images, PDFs, videos up to 100MB
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaFiles.map((file) => (
              <div
                key={file.id}
                className="admin-card flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xs font-bold ${
                    file.type === "Image"
                      ? "bg-blue-500"
                      : file.type === "PDF"
                      ? "bg-red-500"
                      : file.type === "SVG"
                      ? "bg-purple-500"
                      : "bg-green-500"
                  }`}
                >
                  {file.type}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {file.size} &middot; {file.uploaded}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
