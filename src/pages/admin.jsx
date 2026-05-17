import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import {
    FaUsers,
    FaShoppingCart,
    FaSeedling,
    FaMoneyBillWave,
    FaPlus,
    FaTrash,
    FaCheckCircle,
} from "react-icons/fa";

const farmers = [
    {
        name: "Ramesh Gowda",
        crop: "Organic Tomatoes",
        status: "Verified",
    },

    {
        name: "Suresh Patil",
        crop: "Premium Mangoes",
        status: "Pending",
    },

    {
        name: "Lakshmi Devi",
        crop: "Fresh Roses",
        status: "Verified",
    },
];

const orders = [
    {
        id: "#AG1021",
        customer: "Rahul Sharma",
        amount: "₹1240",
        status: "Delivered",
    },

    {
        id: "#AG1022",
        customer: "Anjali Verma",
        amount: "₹890",
        status: "Processing",
    },

    {
        id: "#AG1023",
        customer: "Kiran Kumar",
        amount: "₹1560",
        status: "Pending",
    },
];

function Admin() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#04110a] to-[#071b11] text-white overflow-hidden">

            <Navbar />

            <div className="pt-36 px-6 max-w-7xl mx-auto">

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-green-400 glow"
                >

                    ADMIN DASHBOARD

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg">

                    Manage farmers, products, analytics and marketplace orders

                </p>

                {/* Analytics Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {/* Card */}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass neon-border rounded-3xl p-8"
                    >

                        <FaUsers className="text-5xl text-green-400" />

                        <h2 className="text-4xl font-black mt-6">

                            245

                        </h2>

                        <p className="text-gray-300 mt-2">

                            Registered Farmers

                        </p>

                    </motion.div>

                    {/* Card */}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass neon-border rounded-3xl p-8"
                    >

                        <FaShoppingCart className="text-5xl text-green-400" />

                        <h2 className="text-4xl font-black mt-6">

                            1,280

                        </h2>

                        <p className="text-gray-300 mt-2">

                            Total Orders

                        </p>

                    </motion.div>

                    {/* Card */}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass neon-border rounded-3xl p-8"
                    >

                        <FaSeedling className="text-5xl text-green-400" />

                        <h2 className="text-4xl font-black mt-6">

                            560

                        </h2>

                        <p className="text-gray-300 mt-2">

                            Products Listed

                        </p>

                    </motion.div>

                    {/* Card */}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass neon-border rounded-3xl p-8"
                    >

                        <FaMoneyBillWave className="text-5xl text-green-400" />

                        <h2 className="text-4xl font-black mt-6">

                            ₹5.2L

                        </h2>

                        <p className="text-gray-300 mt-2">

                            Revenue Generated

                        </p>

                    </motion.div>

                </div>

                {/* Actions */}

                <div className="flex flex-wrap gap-6 mt-16">

                    <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full glow-btn flex items-center gap-3">

                        <FaPlus />

                        Add Product

                    </button>

                    <button className="bg-red-500 hover:bg-red-400 text-white font-bold px-8 py-4 rounded-full transition duration-300 flex items-center gap-3">

                        <FaTrash />

                        Delete Product

                    </button>

                </div>

                {/* Farmers */}

                <div className="glass neon-border rounded-3xl p-10 mt-20">

                    <h2 className="orbitron text-4xl font-black text-green-400">

                        FARMER MANAGEMENT

                    </h2>

                    <div className="mt-10 space-y-6">

                        {farmers.map((farmer, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="bg-black/30 border border-green-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                            >

                                <div>

                                    <h3 className="text-2xl font-bold">

                                        {farmer.name}

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        Crop: {farmer.crop}

                                    </p>

                                </div>

                                <div className="flex items-center gap-3 text-green-400 font-bold">

                                    <FaCheckCircle />

                                    {farmer.status}

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

                {/* Orders */}

                <div className="glass neon-border rounded-3xl p-10 mt-20 mb-20 overflow-x-auto">

                    <h2 className="orbitron text-4xl font-black text-green-400">

                        RECENT ORDERS

                    </h2>

                    <table className="w-full mt-10 min-w-[700px]">

                        <thead>

                            <tr className="border-b border-green-500/20 text-left">

                                <th className="pb-4">Order ID</th>

                                <th className="pb-4">Customer</th>

                                <th className="pb-4">Amount</th>

                                <th className="pb-4">Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {orders.map((order, index) => (

                                <tr
                                    key={index}
                                    className="border-b border-green-500/10"
                                >

                                    <td className="py-6 font-bold">
                                        {order.id}
                                    </td>

                                    <td>{order.customer}</td>

                                    <td>{order.amount}</td>

                                    <td>

                                        <span className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full text-green-400">

                                            {order.status}

                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Admin;