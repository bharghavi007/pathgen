import React, { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem("userName", name);
    onLogin(name);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-3xl font-bold mb-4">Welcome to GemPath ✨</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-64 mb-3"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
