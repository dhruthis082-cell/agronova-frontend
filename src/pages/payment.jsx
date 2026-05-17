import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import {
    FaCreditCard,
    FaGooglePay,
    FaUniversity,
    FaCheckCircle,
} from "react-icons/fa";

function Payment() {
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

                    SECURE PAYMENT

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg md:text-xl">

                    Fast and secure payment for your smart agriculture orders

                </p>

                <div className="grid lg:grid-cols-2 gap-12 mt-20">

                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="glass neon-border rounded-3xl p-10"
                    >

                        <h2 className="orbitron text-3xl font-black text-green-400">

                            PAYMENT DETAILS

                        </h2>

                        {/* Methods */}

                        <div className="flex gap-4 mt-8 flex-wrap">

                            <button className="bg-green-500 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-3">

                                <FaCreditCard />

                                Card

                            </button>

                            <button className="bg-black/40 border border-green-500/30 px-6 py-4 rounded-2xl font-bold flex items-center gap-3">

                                <FaGooglePay />

                                GPay

                            </button>

                            <button className="bg-black/40 border border-green-500/30 px-6 py-4 rounded-2xl font-bold flex items-center gap-3">

                                <FaUniversity />

                                Net Banking

                            </button>

                        </div>

                        {/* Form */}

                        <div className="mt-10 space-y-6">

                            <input
                                type="text"
                                placeholder="Card Holder Name"
                                className="w-full bg-black/40 border border-green-500/30 rounded-2xl px-6 py-5 outline-none focus:border-green-400"
                            />

                            <input
                                type="text"
                                placeholder="Card Number"
                                className="w-full bg-black/40 border border-green-500/30 rounded-2xl px-6 py-5 outline-none focus:border-green-400"
                            />

                            <div className="grid grid-cols-2 gap-6">

                                <input
                                    type="text"
                                    placeholder="Expiry Date"
                                    className="bg-black/40 border border-green-500/30 rounded-2xl px-6 py-5 outline-none focus:border-green-400"
                                />

                                <input
                                    type="password"
                                    placeholder="CVV"
                                    className="bg-black/40 border border-green-500/30 rounded-2xl px-6 py-5 outline-none focus:border-green-400"
                                />

                            </div>

                            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-5 rounded-2xl text-xl glow-btn transition duration-300">

                                Pay Securely

                            </button>

                        </div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="glass neon-border rounded-3xl p-10"
                    >

                        <h2 className="orbitron text-3xl font-black text-green-400">

                            ORDER SUMMARY

                        </h2>

                        {/* Products */}

                        <div className="mt-10 space-y-6">

                            <div className="flex justify-between border-b border-green-500/20 pb-4">

                                <span>Organic Tomatoes</span>

                                <span>₹240</span>

                            </div>

                            <div className="flex justify-between border-b border-green-500/20 pb-4">

                                <span>Premium Mangoes</span>

                                <span>₹660</span>

                            </div>

                            <div className="flex justify-between border-b border-green-500/20 pb-4">

                                <span>Fresh Roses</span>

                                <span>₹350</span>

                            </div>

                        </div>

                        {/* Total */}

                        <div className="mt-10">

                            <div className="flex justify-between text-2xl font-bold">

                                <span>Total</span>

                                <span className="text-green-400">

                                    ₹1250

                                </span>

                            </div>

                        </div>

                        {/* Verified */}

                        <div className="mt-12 bg-green-500/10 border border-green-500/30 rounded-3xl p-8 text-center">

                            <FaCheckCircle className="text-7xl text-green-400 mx-auto" />

                            <h3 className="text-3xl font-black mt-6 text-green-400">

                                Secure Checkout

                            </h3>

                            <p className="text-gray-300 mt-4 leading-relaxed">

                                Your transaction is protected with advanced blockchain verification and encrypted payment security.

                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
}

export default Payment;