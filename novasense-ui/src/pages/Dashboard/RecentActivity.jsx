const RecentActivity = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Recent Training Activity</h2>

      <div className="bg-white p-4 rounded-2xl shadow">
        <ul className="space-y-3">

          <li className="flex justify-between border-b pb-2">
            <span>Model Training: Disease Detection</span>
            <span className="text-green-600 font-semibold">Completed</span>
          </li>

          <li className="flex justify-between border-b pb-2">
            <span>AI Bot: Medical Prescription</span>
            <span className="text-blue-600 font-semibold">Running</span>
          </li>

          <li className="flex justify-between">
            <span>Quantum Task: Genetic Simulation</span>
            <span className="text-yellow-600 font-semibold">Pending</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;