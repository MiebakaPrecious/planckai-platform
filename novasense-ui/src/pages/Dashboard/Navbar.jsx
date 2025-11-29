import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between">
      <h2 className="text-xl font-semibold">Welcome 👋</h2>

      <div className="flex items-center gap-4">
        <span className="font-medium">{user?.email}</span>

        <img
          src="https://ui-avatars.com/api/?name=User"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;