import React, { useState } from "react";

const categories = ["Finance", "Health", "Personal", "Notes"];

export default function VaultEntryForm({ onSubmit, onCancel, initial = {} }) {
  const [title, setTitle] = useState(initial.title || "");
  const [category, setCategory] = useState(initial.category || categories[0]);
  const [content, setContent] = useState(initial.content || "");
  const [autoDeleteDate, setAutoDeleteDate] = useState(initial.autoDeleteDate || "");
  const [visibility, setVisibility] = useState(initial.visibility || "private");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }
    if (autoDeleteDate && isNaN(Date.parse(autoDeleteDate))) {
      setError("Auto-delete date is invalid.");
      return;
    }
    setError("");
    onSubmit({
      title,
      category,
      content,
      autoDeleteDate: autoDeleteDate ? new Date(autoDeleteDate) : null,
      visibility,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold text-blue-400 mb-4">Add Vault Entry</h3>
      {error && <div className="mb-3 text-red-400">{error}</div>}
      <div className="mb-3">
        <label className="block text-gray-300 mb-1">Title</label>
        <input
          className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-300 mb-1">Category</label>
        <select
          className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-gray-300 mb-1">Content</label>
        <textarea
          className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-300 mb-1">Auto-Delete Date (optional)</label>
        <input
          type="date"
          className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          value={autoDeleteDate}
          onChange={e => setAutoDeleteDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-1">Visibility</label>
        <select
          className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          value={visibility}
          onChange={e => setVisibility(e.target.value)}
        >
          <option value="private">Private</option>
          <option value="shared">Shared if inactive</option>
          <option value="unlock_after">Unlock after...</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Save Entry
        </button>
      </div>
    </form>
  );
}