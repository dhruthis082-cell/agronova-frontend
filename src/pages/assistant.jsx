import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import {
    FaRobot,
    FaLeaf,
    FaCloudSun,
    FaSeedling,
    FaTint,
    FaBug,
} from "react-icons/fa";

const suggestions = [
    {
        icon: <FaLeaf />,
        title: "Crop Recommendation",
        text: "Based on soil conditions, tomatoes and spinach are highly recommended this season.",
    },

    {
        icon: <FaCloudSun />,
        title: "Weather Analysis",
        text: "Expected rainfall in the next 3 days. Reduce irrigation frequency.",
    },

    {
        icon: <FaSeedling />,
        title: "Fertilizer Suggestion",
        text: "Use organic nitrogen fertilizer for improved crop growth.",
    },

    {
        icon: <FaTint />,
        title: "Water Management",
        text: "Smart irrigation can reduce water usage by 35%.",
    },

    {
        icon: <FaBug />,
        title: "Disease Detection",
        text: "Early signs of leaf spot detected in nearby farms.",
    },
];

function Assistant() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#04110a] to-[#071b11] text-white overflow-hidden">

            <Navbar />

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[120px]"></div>

            <div className="pt-36 px-6 max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-green-400 glow"
                >

                    AI FARMING ASSISTANT

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg md:text-xl max-w-4xl mx-auto">

                    Smart AI-powered agricultural assistant for modern farmers.

                </p>

                {/* AI Chat UI */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass neon-border rounded-3xl p-10 mt-20"
                >

                    <div className="flex items-center gap-5">

                        <div className="bg-green-500 p-5 rounded-full">

                            <FaRobot className="text-4xl text-black" />

                        </div>

                        <div>

                            <h2 className="orbitron text-3xl font-black text-green-400">

                                AgroNova AI

                            </h2>

                            <p className="text-gray-300 mt-2">

                                Your intelligent farming companion

                            </p>

                        </div>

                    </div>

                    {/* Chat */}

                    <div className="mt-12 space-y-6">

                        {/* User */}

                        <div className="flex justify-end">

                            <div className="bg-green-500 text-black px-6 py-4 rounded-3xl max-w-xl font-medium">

                                Which crop is best for this season?

                            </div>

                        </div>

                        {/* AI */}

                        <div className="flex justify-start">

                            <div className="bg-black/40 border border-green-500/30 px-6 py-4 rounded-3xl max-w-xl text-gray-200">

                                Based on current weather and soil analysis,
                                tomatoes, spinach and carrots are highly profitable this season.

                            </div>

                        </div>

                        {/* User */}

                        <div className="flex justify-end">

                            <div className="bg-green-500 text-black px-6 py-4 rounded-3xl max-w-xl font-medium">

                                How can I improve crop quality?

                            </div>

                        </div>

                        {/* AI */}

                        <div className="flex justify-start">

                            <div className="bg-black/40 border border-green-500/30 px-6 py-4 rounded-3xl max-w-xl text-gray-200">

                                Use organic fertilizers, maintain proper irrigation and monitor plant diseases regularly.

                            </div>

                        </div>

                    </div>

                    {/* Input */}

                    <div className="mt-10 flex gap-4">

                        <input
                            type="text"
                            placeholder="Ask AI farming assistant..."
                            className="flex-1 bg-black/40 border border-green-500/30 rounded-full px-6 py-5 outline-none text-white focus:border-green-400"
                        />

                        <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 rounded-full glow-btn">

                            Send

                        </button>

                    </div>

                </motion.div>

                {/* Suggestions */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-20">

                    {suggestions.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="glass neon-border rounded-3xl p-8"
                        >

                            <div className="bg-green-500 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-black">

                                {item.icon}

                            </div>

                            <h2 className="orbitron text-2xl font-black text-green-400 mt-8">

                                {item.title}

                            </h2>

                            <p className="text-gray-300 mt-5 leading-relaxed">

                                {item.text}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Assistant;