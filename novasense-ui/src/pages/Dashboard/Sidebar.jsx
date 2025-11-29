import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white shadow-md h-full p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">NovaSense</h1>

      <nav className="flex-1 space-y-4">
        <Link to="/dashboard" className="block text-lg hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/train-model" className="block text-lg hover:text-blue-600">
          Train Model
        </Link>
        <Link to="/subscription" className="block text-lg hover:text-blue-600">
          Subscription
        </Link>
        <Link to="/payments" className="block text-lg hover:text-blue-600">
          Payments
        </Link>
        <Link to="/train-model" className="block text-lg hover:text-blue-600">
            Train Model
        </Link>

      </nav>

      <button
        onClick={logout}
        className="mt-10 bg-red-500 text-white p-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;