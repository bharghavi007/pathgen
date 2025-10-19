import React from "react";

function Roadmap({ roadmap, onRegenerate }) {
  if (roadmap.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-gray-50 rounded-xl shadow-inner">
      <h3 className="font-bold text-lg mb-3">Your Learning Path 🧭</h3>
      {roadmap.map((week, index) => (
        <div key={index} className="border-l-4 border-blue-500 p-3 mb-2 bg-white shadow-sm">
          <p>{week.topic}</p>
        </div>
      ))}
      <button
        onClick={onRegenerate}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        🔁 Regenerate Path
      </button>
    </div>
  );
}

export default Roadmap;
