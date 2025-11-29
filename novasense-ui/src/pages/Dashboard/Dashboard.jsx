import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import StatsCard from "../../components/Dashboard/StatsCard";
import RecentActivity from "../../components/Dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Pending Tasks" value="3" />
            <StatsCard title="Completed Trainings" value="12" />
            <StatsCard title="Active Models" value="5" />
          </div>

          {/* Recent Activity */}
          <RecentActivity />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;