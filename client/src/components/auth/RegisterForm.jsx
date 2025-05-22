import React, { useState } from "react";

export default function RegisterForm({ onRegister, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    onRegister({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md mx-auto mt-16"
    >
      <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">Register</h2>
      <div className="mb-4">
        <label className="block mb-1 text-gray-300">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-300">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-gray-300">Confirm Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}