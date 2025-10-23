import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown";

function Roadmap({ roadmap, onRegenerate }) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("GemPath Learning Roadmap", 20, 20);
    doc.setFont("helvetica", "normal");
    let y = 35;
    roadmap.forEach((week, i) => {
      doc.text(`Week ${i + 1}: ${week.topic}`, 20, y);
      y += 10;
    });
    doc.save("PathGen_Roadmap.pdf");
  };
  if (roadmap.length === 0) return null;

  const markdownContent = roadmap.map((item) => item.topic).join("\n");

  return (
    <div className="p-4 m-4 bg-gray-50 rounded-xl shadow-inner">
      <h3 className="font-bold text-lg mb-3">Your Learning Path 🧭</h3>
      <div className="max-h-96 overflow-y-auto border p-3 bg-white shadow-sm rounded">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
      <button
        onClick={onRegenerate}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        🔁 Regenerate Path
      </button>
      <button
        onClick={downloadPDF}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        📄 Download PDF
      </button>
    </div>
  );
}

export default Roadmap;
