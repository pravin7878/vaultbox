import React, { useState } from "react";
import VaultEntryForm from "./vaultEntryForm";

export default function VaultDashboard({ onAddEntry }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-800 rounded-xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-300">Your Vault Entries</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
          onClick={() => setShowForm(true)}
        >
          + Add Entry
        </button>
      </div>
      {/* VaultEntryList would go here */}
      <div className="text-gray-400 italic text-center mb-4">
        (Vault entries list coming soon)
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <VaultEntryForm
              onSubmit={entry => {
                onAddEntry(entry);
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}