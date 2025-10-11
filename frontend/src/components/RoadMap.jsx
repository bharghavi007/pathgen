import React from "react";

function Roadmap({ roadmap }) {
  return (
    <div className="p-4 m-4">
      {roadmap.length === 0 ? (
        <p className="text-gray-500">No roadmap yet</p>
      ) : (
        roadmap.map((week, index) => (
          <div key={index} className="border p-2 m-2 rounded shadow">
            <h3 className="font-bold">Week {index + 1}</h3>
            <p>{week.topic}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Roadmap;
