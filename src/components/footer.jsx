import { motion } from "framer-motion";

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPaperPlane,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="relative bg-black text-white overflow-hidden pt-24">

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Top Grid */}

                <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-green-500/20">

                    {/* Brand */}

                    <div>

                        <h1 className="orbitron text-4xl font-black text-green-400 glow">

                            AGRONOVA

                        </h1>

                        <p className="text-gray-400 mt-6 leading-relaxed">

                            Smart blockchain-powered agriculture marketplace connecting farmers directly with consumers.

                        </p>

                        {/* Social */}

                        <div className="flex gap-4 mt-8">

                            <button className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-110 transition duration-300">

                                <FaInstagram />

                            </button>

                            <button className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-110 transition duration-300">

                                <FaLinkedin />

                            </button>

                            <button className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-110 transition duration-300">

                                <FaGithub />

                            </button>

                            <button className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-110 transition duration-300">

                                <FaTwitter />

                            </button>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h2 className="text-2xl font-bold text-green-400">

                            Quick Links

                        </h2>

                        <ul className="mt-8 space-y-4 text-gray-300">

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/marketplace">Marketplace</Link>
                            </li>

                            <li>
                                <Link to="/blockchain">Blockchain</Link>
                            </li>

                            <li>
                                <Link to="/assistant">AI Assistant</Link>
                            </li>

                        </ul>

                    </div>

                    {/* Services */}

                    <div>

                        <h2 className="text-2xl font-bold text-green-400">

                            Services

                        </h2>

                        <ul className="mt-8 space-y-4 text-gray-300">

                            <li>Smart Farming</li>

                            <li>Blockchain Tracking</li>

                            <li>AI Agriculture</li>

                            <li>Organic Marketplace</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h2 className="text-2xl font-bold text-green-400">

                            Contact Us

                        </h2>

                        <div className="mt-8 space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black/40 border border-green-500/20 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-black/40 border border-green-500/20 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                            />

                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-black/40 border border-green-500/20 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
                            ></textarea>

                            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl glow-btn transition duration-300 flex items-center justify-center gap-3">

                                <FaPaperPlane />

                                Send Message

                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="py-8 text-center text-gray-500"
                >

                    © 2026 AGRONOVA — Smart Agro Marketplace using Blockchain Technology

                </motion.div>

            </div>

        </footer>
    );
}

export default Footer;