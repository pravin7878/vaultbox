import React from "react";

export default function Navbar({ onLogout, user }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center shadow">
      <span className="text-xl font-bold text-blue-400 tracking-widest">VaultBox</span>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-gray-300">{user.email}</span>
          <button
            onClick={onLogout}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}