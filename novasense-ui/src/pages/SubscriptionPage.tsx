import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

interface SubscriptionStatus {
  isActive: boolean;
  planName?: string;
  expiresAt?: string;
}

export default function SubscriptionPage() {
  const { token } = useAuth();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const api = axios.create({
    baseURL: "http://localhost:5000/api/subscription",
    headers: { Authorization: `Bearer ${token}` }
  });

  // Load subscription status
  const fetchStatus = async () => {
    try {
      const res = await api.get("/status");
      setStatus(res.data);
    } catch (err) {
      setMessage("Failed to load subscription status");
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // Actions
  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await api.post("/subscribe");
      setMessage(res.data.message);
      await fetchStatus();
    } catch {
      setMessage("Subscription failed");
    }
    setLoading(false);
  };

  const handleRenew = async () => {
    setLoading(true);
    try {
      const res = await api.post("/renew");
      setMessage(res.data.message);
      await fetchStatus();
    } catch {
      setMessage("Renewal failed");
    }
    setLoading(false);
  };

  const handleCancel = async () => {
    setLoading(true);
    try {
      const res = await api.post("/cancel");
      setMessage(res.data.message);
      await fetchStatus();
    } catch {
      setMessage("Cancel failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Subscription</h1>

      {message && (
        <p className="bg-blue-100 text-blue-700 p-2 rounded mb-4 text-center">
          {message}
        </p>
      )}

      {!status ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="text-center mb-6">
          <p className="text-lg">
            <strong>Status:</strong>{" "}
            {status.isActive ? (
              <span className="text-green-600">Active</span>
            ) : (
              <span className="text-red-600">Inactive</span>
            )}
          </p>

          {status.isActive && (
            <>
              <p>
                <strong>Plan:</strong> {status.planName}
              </p>
              <p>
                <strong>Expires:</strong> {new Date(status.expiresAt!).toDateString()}
              </p>
            </>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        {!status?.isActive && (
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Subscribe
          </button>
        )}

        {status?.isActive && (
          <>
            <button
              onClick={handleRenew}
              disabled={loading}
              className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
            >
              Renew Subscription
            </button>

            <button
              onClick={handleCancel}
              disabled={loading}
              className="bg-red-600 text-white p-3 rounded hover:bg-red-700"
            >
              Cancel Subscription
            </button>
          </>
        )}
      </div>
    </div>
  );
}