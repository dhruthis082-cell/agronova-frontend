import {
    FaLeaf,
    FaRobot,
    FaChartLine,
    FaTruck,
} from "react-icons/fa";

import { motion } from "framer-motion";

const features = [
    {
        icon: <FaLeaf />,
        title: "Smart Marketplace",
        desc: "Farmers directly connect with buyers using a futuristic agriculture marketplace.",
    },

    {
        icon: <FaRobot />,
        title: "AI Recommendations",
        desc: "AI-powered crop insights and smart farming recommendations for better productivity.",
    },

    {
        icon: <FaChartLine />,
        title: "Blockchain Tracking",
        desc: "Track the entire supply chain from harvest to delivery with secure blockchain verification.",
    },

    {
        icon: <FaTruck />,
        title: "Smart Logistics",
        desc: "Advanced delivery management and live tracking for efficient transportation.",
    },
];

function Features() {
    return (
        <section className="relative z-20 py-32 px-6 bg-[#071b11]">
            <div className="max-w-7xl mx-auto">

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-4xl md:text-6xl text-center font-black glow text-green-400"
                >
                    FUTURE OF AGRICULTURE
                </motion.h1>

                <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
                    AgroNova combines AI, blockchain and futuristic technology
                    to revolutionize modern farming and agricultural commerce.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 10,
                            }}
                            className="glass neon-border rounded-3xl p-8 text-center hover:bg-green-500/10 transition duration-500"
                        >
                            <div className="text-5xl text-green-400 flex justify-center mb-6 glow">
                                {item.icon}
                            </div>

                            <h2 className="text-2xl font-bold orbitron mb-4">
                                {item.title}
                            </h2>

                            <p className="text-gray-300 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Features;