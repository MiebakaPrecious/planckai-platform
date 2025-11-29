import { useState } from "react";

const TrainModel = () => {
  const [dataset, setDataset] = useState(null);
  const [modelType, setModelType] = useState("disease-detection");
  const [training, setTraining] = useState(false);
  const [status, setStatus] = useState(null);

  const handleDatasetUpload = (e) => {
    setDataset(e.target.files[0]);
  };

  const startTraining = async () => {
    if (!dataset) {
      alert("Please upload a dataset first.");
      return;
    }

    setTraining(true);
    setStatus("Processing dataset…");

    // Simulate training
    setTimeout(() => {
      setStatus("Training model…");
    }, 1500);

    setTimeout(() => {
      setStatus("Finalizing…");
    }, 3500);

    setTimeout(() => {
      setStatus("Training Completed Successfully 🎉");
      setTraining(false);
    }, 6000);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-semibold mb-6">Train a Model</h1>

      {/* Section */}
      <div className="bg-white p-6 rounded-xl shadow">

        {/* Upload Dataset */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Upload Dataset (CSV, JSON, Excel)
          </label>

          <input
            type="file"
            onChange={handleDatasetUpload}
            className="border border-gray-300 p-3 rounded-lg w-full"
          />

          {dataset && (
            <p className="mt-2 text-green-600 font-medium">
              Selected: {dataset.name}
            </p>
          )}
        </div>

        {/* Model Type */}
        <div className="mt-6">
          <label className="block text-lg font-medium mb-2">Model Type</label>

          <select
            value={modelType}
            onChange={(e) => setModelType(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full"
          >
            <option value="disease-detection">Disease Detection</option>
            <option value="medical-prescription">Medical Prescription AI</option>
            <option value="genetic-simulation">Genetic Simulation</option>
            <option value="robotics-motion">Robotics Motion AI</option>
          </select>
        </div>

        {/* Train Button */}
        <button
          onClick={startTraining}
          disabled={training}
          className={`mt-6 w-full py-3 rounded-lg text-white font-semibold ${
            training ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {training ? "Training…" : "Start Training"}
        </button>

        {/* Status Box */}
        {status && (
          <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <h3 className="font-medium text-lg">Training Status:</h3>
            <p className="mt-1 text-blue-700">{status}</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default TrainModel;