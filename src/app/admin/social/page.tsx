"use client";

import { useState } from "react";

const platforms = [
  { name: "LinkedIn", followers: "12.4K", growth: "+342", posts: 28, engagement: "4.2%", color: "bg-blue-600" },
  { name: "Twitter / X", followers: "8.7K", growth: "+189", posts: 45, engagement: "2.8%", color: "bg-gray-900" },
  { name: "Facebook", followers: "5.2K", growth: "+98", posts: 15, engagement: "3.1%", color: "bg-blue-500" },
  { name: "Instagram", followers: "3.8K", growth: "+256", posts: 22, engagement: "5.6%", color: "bg-pink-500" },
];

const scheduledPosts = [
  {
    id: 1,
    platform: "LinkedIn",
    content: "Excited to announce our Q1 results! Revenue up 23% YoY with strong client retention...",
    date: "Apr 2, 2026",
    time: "9:00 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    platform: "Twitter / X",
    content: "Join us at the Business Innovation Summit next week. Our CEO will be presenting on...",
    date: "Apr 3, 2026",
    time: "12:00 PM",
    status: "Scheduled",
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Behind the scenes at our annual strategy retreat. Building the future together...",
    date: "Apr 4, 2026",
    time: "3:00 PM",
    status: "Draft",
  },
  {
    id: 4,
    platform: "LinkedIn",
    content: "5 key trends shaping the future of strategic consulting in 2026. Thread below...",
    date: "Apr 5, 2026",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: 5,
    platform: "Facebook",
    content: "We're hiring! Looking for talented consultants to join our growing team...",
    date: "Apr 6, 2026",
    time: "11:00 AM",
    status: "Draft",
  },
];

const recentPerformance = [
  { title: "Q1 Market Insights Report", platform: "LinkedIn", likes: 342, comments: 48, shares: 87, reach: "15.2K" },
  { title: "Client Success: TechStart", platform: "LinkedIn", likes: 256, comments: 31, shares: 62, reach: "11.8K" },
  { title: "Innovation Summit Recap", platform: "Twitter / X", likes: 189, comments: 23, shares: 45, reach: "8.4K" },
  { title: "Team Culture Spotlight", platform: "Instagram", likes: 412, comments: 67, shares: 34, reach: "6.2K" },
];

export default function SocialMediaPage() {
  const [showComposer, setShowComposer] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Social Media Manager</h1>
          <p className="text-gray-500 mt-1">
            Schedule posts, track engagement, and grow your audience
          </p>
        </div>
        <button
          onClick={() => setShowComposer(!showComposer)}
          className="btn-primary text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Post
        </button>
      </div>

      {/* Post Composer */}
      {showComposer && (
        <div className="admin-card mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Compose Post
          </h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              {["LinkedIn", "Twitter / X", "Facebook", "Instagram"].map(
                (p) => (
                  <button
                    key={p}
                    className="px-3 py-1.5 text-sm rounded-full border border-gray-300 hover:border-primary-500 hover:text-primary-600 transition-colors"
                  >
                    {p}
                  </button>
                )
              )}
            </div>
            <textarea
              rows={4}
              placeholder="What would you like to share?"
              className="input-field"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Image
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule
                </button>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary text-sm py-2">
                  Save Draft
                </button>
                <button className="btn-primary text-sm py-2">Publish</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platforms.map((platform) => (
          <div key={platform.name} className="admin-card">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}
              >
                <span className="text-white font-bold text-xs">
                  {platform.name[0]}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{platform.name}</h3>
                <p className="text-xs text-gray-500">
                  {platform.posts} posts this month
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {platform.followers}
                </span>
                <span className="text-xs text-green-600 ml-2">
                  {platform.growth}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Engagement</span>
                <p className="text-lg font-semibold text-primary-600">
                  {platform.engagement}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scheduled Posts */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Scheduled Posts
          </h2>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500">
                      {post.platform}
                    </span>
                    <span
                      className={
                        post.status === "Scheduled"
                          ? "badge-green"
                          : "badge-yellow"
                      }
                    >
                      {post.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 truncate">
                    {post.content}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {post.date} at {post.time}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Performance */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Posts
          </h2>
          <div className="space-y-4">
            {recentPerformance.map((post, i) => (
              <div
                key={i}
                className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    {post.title}
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.platform}
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                  <span>{post.reach} reach</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
