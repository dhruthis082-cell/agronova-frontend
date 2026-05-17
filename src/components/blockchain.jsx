import { motion } from "framer-motion";

import {
    FaCheckCircle,
    FaTruck,
    FaSeedling,
    FaWarehouse,
    FaStore,
    FaQrcode,
} from "react-icons/fa";

const trackingData = [
    {
        stage: "Farmer Harvested",
        icon: <FaSeedling />,
        date: "12 May 2026",
        status: "Completed",
    },

    {
        stage: "Stored in Warehouse",
        icon: <FaWarehouse />,
        date: "13 May 2026",
        status: "Completed",
    },

    {
        stage: "Transport In Progress",
        icon: <FaTruck />,
        date: "14 May 2026",
        status: "In Transit",
    },

    {
        stage: "Delivered to Marketplace",
        icon: <FaStore />,
        date: "15 May 2026",
        status: "Pending",
    },
];

function Blockchain() {
    return (
        <section className="relative py-32 px-6 min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#04110a] to-[#071b11] text-white">

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[120px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Title */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-green-400 glow"
                >

                    BLOCKCHAIN TRACKING

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg md:text-xl max-w-4xl mx-auto">

                    Track agricultural products from farm to marketplace using secure blockchain verification.

                </p>

                {/* Product Card */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass neon-border rounded-3xl p-10 mt-20"
                >

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left */}

                        <div>

                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                                alt="Product"
                                className="rounded-3xl w-full h-[350px] object-cover"
                            />

                        </div>

                        {/* Right */}

                        <div>

                            <h2 className="orbitron text-4xl font-black text-green-400">

                                Organic Tomatoes

                            </h2>

                            <p className="mt-6 text-lg text-gray-300 leading-relaxed">

                                Blockchain verified premium organic tomatoes sourced directly
                                from certified smart farmers.

                            </p>

                            {/* Details */}

                            <div className="mt-8 space-y-4">

                                <div className="flex justify-between border-b border-green-500/20 pb-3">

                                    <span className="text-gray-400">
                                        Tracking ID
                                    </span>

                                    <span className="text-green-400 font-bold">
                                        AGRO-78291
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-green-500/20 pb-3">

                                    <span className="text-gray-400">
                                        Farmer
                                    </span>

                                    <span className="font-bold">
                                        Ramesh Gowda
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-green-500/20 pb-3">

                                    <span className="text-gray-400">
                                        Harvest Date
                                    </span>

                                    <span className="font-bold">
                                        12 May 2026
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-green-500/20 pb-3">

                                    <span className="text-gray-400">
                                        Quality
                                    </span>

                                    <span className="text-green-400 font-bold">
                                        Premium Grade
                                    </span>

                                </div>

                            </div>

                            {/* Verified */}

                            <div className="mt-8 flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-2xl p-5">

                                <FaCheckCircle className="text-4xl text-green-400" />

                                <div>

                                    <h3 className="text-xl font-bold text-green-400">

                                        Blockchain Verified

                                    </h3>

                                    <p className="text-gray-300 mt-1">

                                        Data secured and tamper-proof

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Timeline */}

                <div className="mt-24">

                    <h2 className="orbitron text-4xl text-center font-black text-green-400">

                        SUPPLY CHAIN TIMELINE

                    </h2>

                    <div className="mt-16 grid gap-8">

                        {trackingData.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="glass neon-border rounded-3xl p-6 flex items-center gap-6"
                            >

                                {/* Icon */}

                                <div className="bg-green-500 p-5 rounded-2xl text-3xl text-black">

                                    {item.icon}

                                </div>

                                {/* Content */}

                                <div className="flex-1">

                                    <h3 className="text-2xl font-bold">

                                        {item.stage}

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        {item.date}

                                    </p>

                                </div>

                                {/* Status */}

                                <div className="bg-green-500/20 border border-green-500/30 px-5 py-3 rounded-full text-green-400 font-bold">

                                    {item.status}

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

                {/* QR Verification */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass neon-border rounded-3xl p-10 mt-24 text-center"
                >

                    <FaQrcode className="text-8xl mx-auto text-green-400" />

                    <h2 className="orbitron text-4xl font-black mt-8 text-green-400">

                        QR VERIFICATION

                    </h2>

                    <p className="mt-4 text-gray-300 text-lg">

                        Scan QR code to verify blockchain authenticity and supply chain records.

                    </p>

                    <button className="mt-8 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full glow-btn transition duration-300">

                        Verify Product

                    </button>

                </motion.div>

            </div>

        </section>
    );
}

export default Blockchain;