import React from "react";

function History({ history, onSelectHistoryItem }) {
  if (history.length === 0) return null;

  return (
    <div className="bg-white p-4 m-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-2">📜 Past Roadmaps</h3>
      <ul className="list-disc list-inside text-sm">
        {history.map((item, i) => (
          <li
            key={i}
            onClick={() => onSelectHistoryItem(item)}
            className="cursor-pointer hover:text-blue-600 hover:underline mb-1"
          >
            {item.goal} ({item.duration} weeks)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
