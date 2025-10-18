import React from "react";

function Roadmap({ roadmap }) {
  return (
    <div className="p-4 m-4">
      {roadmap.length === 0 ? (
        <p className="text-gray-500">No roadmap yet</p>
      ) : (
        <div className="space-y-3">
          {roadmap.map((week, index) => (
            <div key={index} className="border p-3 rounded-lg bg-white shadow">
              <p>{week.topic}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Roadmap;
