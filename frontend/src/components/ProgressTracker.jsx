import React, { useState, useEffect } from "react";

function ProgressTracker({ roadmap }) {
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("progress")) || {}
  );

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const toggleWeek = (index) => {
    setProgress({ ...progress, [index]: !progress[index] });
  };

  const completed = Object.values(progress).filter(Boolean).length;
  const total = roadmap.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (roadmap.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-3">📈 Weekly Progress Tracker</h3>
      <p className="mb-2 text-sm text-gray-600">Progress: {percent}% ✅</p>
      <div>
        {roadmap.map((week, i) => (
          <div
            key={i}
            onClick={() => toggleWeek(i)}
            className={`cursor-pointer border p-2 my-1 rounded ${
              progress[i] ? "bg-green-200" : "bg-gray-100"
            }`}
          >
            {progress[i] ? "✅ " : "⬜ "} Week {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;