import { motion } from "framer-motion";

import { useState } from "react";

import { Link } from "react-router-dom";

import {
    FaBars,
    FaTimes,
    FaShoppingCart,
} from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-green-500/20"
        >

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}

                <Link to="/">

                    <h1 className="orbitron text-2xl md:text-4xl font-black text-green-400 tracking-[4px] glow cursor-pointer">

                        AGRONOVA

                    </h1>

                </Link>

                {/* Desktop Menu */}

                <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-200 items-center">

                    <Link to="/">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            Home

                        </li>

                    </Link>

                    <Link to="/marketplace">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            Marketplace

                        </li>

                    </Link>

                    <Link to="/blockchain">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            Blockchain

                        </li>

                    </Link>

                    <Link to="/dashboard">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            Dashboard

                        </li>

                    </Link>

                    <Link to="/cart">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300 flex items-center gap-2">

                            <FaShoppingCart />

                            Cart

                        </li>

                    </Link>

                    <Link to="/admin">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            Admin

                        </li>

                    </Link>

                    <Link to="/assistant">

                        <li className="hover:text-green-400 cursor-pointer transition duration-300">

                            AI Assistant

                        </li>

                    </Link>

                </ul>

                {/* Login Button */}

                <Link to="/login">

                    <button className="hidden md:block bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full glow-btn transition duration-300">

                        Login

                    </button>

                </Link>

                {/* Mobile Menu Button */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl text-green-400"
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

            {/* Mobile Menu */}

            {menuOpen && (

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass border-t border-green-500/20"
                >

                    <ul className="flex flex-col items-center gap-8 py-10 text-xl text-gray-200">

                        <Link to="/">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                Home

                            </li>

                        </Link>

                        <Link to="/marketplace">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                Marketplace

                            </li>

                        </Link>

                        <Link to="/blockchain">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                Blockchain

                            </li>

                        </Link>

                        <Link to="/dashboard">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                Dashboard

                            </li>

                        </Link>

                        <Link to="/cart">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer flex items-center gap-2"
                            >

                                <FaShoppingCart />

                                Cart

                            </li>

                        </Link>

                        <Link to="/admin">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                Admin

                            </li>

                        </Link>

                        <Link to="/assistant">

                            <li
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-green-400 cursor-pointer"
                            >

                                AI Assistant

                            </li>

                        </Link>

                        <Link to="/login">

                            <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full glow-btn">

                                Login

                            </button>

                        </Link>

                    </ul>

                </motion.div>

            )}

        </motion.nav>

    );
}

export default Navbar;