import Dashboard from "../components/Dashboard";

function DashboardPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 px-6">
            <h1 className="orbitron text-5xl text-center text-green-400 glow font-black">
                SMART ANALYTICS
            </h1>

            <Dashboard />
        </div>
    );
}

export default DashboardPage;