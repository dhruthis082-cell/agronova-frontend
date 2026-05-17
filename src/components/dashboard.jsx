import { motion } from "framer-motion";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 30000 },
  { month: "May", revenue: 42000 },
  { month: "Jun", revenue: 55000 },
];

const farmerGrowth = [
  { month: "Jan", farmers: 200 },
  { month: "Feb", farmers: 450 },
  { month: "Mar", farmers: 800 },
  { month: "Apr", farmers: 1200 },
  { month: "May", farmers: 1700 },
  { month: "Jun", farmers: 2400 },
];

function Dashboard() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#22c55e33,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="orbitron text-4xl md:text-6xl text-center font-black text-green-400 glow"
        >
          ANALYTICS DASHBOARD
        </motion.h1>

        <p className="text-center text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
          Real-time agricultural analytics powered by AI and blockchain insights.
        </p>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">

          <div className="glass neon-border rounded-3xl p-8 text-center">
            <h2 className="orbitron text-5xl text-green-400 font-black glow">
              ₹5.2M
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Revenue Generated
            </p>
          </div>

          <div className="glass neon-border rounded-3xl p-8 text-center">
            <h2 className="orbitron text-5xl text-green-400 font-black glow">
              12K+
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Farmers Active
            </p>
          </div>

          <div className="glass neon-border rounded-3xl p-8 text-center">
            <h2 className="orbitron text-5xl text-green-400 font-black glow">
              98%
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Delivery Success
            </p>
          </div>

          <div className="glass neon-border rounded-3xl p-8 text-center">
            <h2 className="orbitron text-5xl text-green-400 font-black glow">
              24/7
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Blockchain Monitoring
            </p>
          </div>

        </div>

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* Revenue Chart */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass neon-border rounded-3xl p-8"
          >

            <h2 className="orbitron text-2xl text-green-400 mb-8">
              Revenue Growth
            </h2>

            <div className="h-80">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={revenueData}>

                  <XAxis dataKey="month" stroke="#ffffff" />

                  <YAxis stroke="#ffffff" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#22c55e"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </motion.div>

          {/* Farmer Growth */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass neon-border rounded-3xl p-8"
          >

            <h2 className="orbitron text-2xl text-green-400 mb-8">
              Farmer Network Growth
            </h2>

            <div className="h-80">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={farmerGrowth}>

                  <XAxis dataKey="month" stroke="#ffffff" />

                  <YAxis stroke="#ffffff" />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="farmers"
                    stroke="#22c55e"
                    fill="#22c55e55"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;