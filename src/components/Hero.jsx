import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import BackgroundScene from "./BackgroundScene";

function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden gradient-bg">

            <BackgroundScene />

            <Navbar />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-20 text-center px-6"
            >

                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="orbitron text-5xl md:text-8xl font-black leading-tight glow tracking-wider"
                >

                    AgroNova

                    <span className="block text-green-400 mt-4 text-3xl md:text-6xl">
                        Smart Agro Marketplace
                    </span>

                </motion.h1>

                <p className="mt-8 text-base md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">

                    Revolutionizing agriculture with blockchain-powered supply tracking,
                    futuristic analytics, smart farmer networks and AI-driven marketplace
                    technology.

                </p>

                {/* Buttons */}

                <div className="mt-12 flex justify-center gap-6 flex-wrap">

                    <Link to="/marketplace">

                        <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-lg transition glow-btn">

                            Explore Marketplace

                        </button>

                    </Link>

                    <Link to="/blockchain">

                        <button className="glass border border-green-500 hover:bg-green-500/20 px-8 py-4 rounded-full text-lg transition">

                            Track Supply Chain

                        </button>

                    </Link>

                </div>

                {/* Stats */}

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <div className="glass p-6 rounded-3xl neon-border">

                        <h2 className="text-4xl font-bold text-green-400 orbitron">
                            10K+
                        </h2>

                        <p className="mt-3 text-gray-300 text-lg">
                            Farmers Connected
                        </p>

                    </div>

                    <div className="glass p-6 rounded-3xl neon-border">

                        <h2 className="text-4xl font-bold text-green-400 orbitron">
                            50K+
                        </h2>

                        <p className="mt-3 text-gray-300 text-lg">
                            Orders Delivered
                        </p>

                    </div>

                    <div className="glass p-6 rounded-3xl neon-border">

                        <h2 className="text-4xl font-bold text-green-400 orbitron">
                            100%
                        </h2>

                        <p className="mt-3 text-gray-300 text-lg">
                            Blockchain Verified
                        </p>

                    </div>

                </div>

            </motion.div>

        </div>
    );
}

export default Hero;