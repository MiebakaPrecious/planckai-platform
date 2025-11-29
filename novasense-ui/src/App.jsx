import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import TrainModel from "./pages/TrainModel/TrainModel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Later */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Train Model Page Route */}
        <Route
          path="/train-model"
          element={
            <ProtectedRoute>
              <TrainModel />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;