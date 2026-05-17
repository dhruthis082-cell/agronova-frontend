import { motion } from "framer-motion";

import {
    FaLeaf,
    FaLock,
    FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#04110a] via-black to-[#071b11] flex items-center justify-center px-6 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px] top-0 left-0"></div>

            <div className="absolute w-[400px] h-[400px] bg-lime-500/20 rounded-full blur-[120px] bottom-0 right-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="glass neon-border w-full max-w-md rounded-3xl p-10 relative z-10"
            >

                {/* Logo */}

                <div className="flex justify-center">

                    <div className="bg-green-500 p-4 rounded-full">

                        <FaLeaf className="text-3xl text-black" />

                    </div>

                </div>

                <h1 className="orbitron text-4xl font-black text-center mt-6 text-green-400 glow">

                    AGRONOVA

                </h1>

                <p className="text-center text-gray-300 mt-3">

                    Login to continue your smart farming journey

                </p>

                {/* Form */}

                <form className="mt-10 space-y-6">

                    {/* Email */}

                    <div className="relative">

                        <FaEnvelope className="absolute left-4 top-4 text-green-400" />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-black/40 border border-green-500/30 rounded-full py-4 pl-12 pr-4 outline-none text-white focus:border-green-400 transition"
                        />

                    </div>

                    {/* Password */}

                    <div className="relative">

                        <FaLock className="absolute left-4 top-4 text-green-400" />

                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full bg-black/40 border border-green-500/30 rounded-full py-4 pl-12 pr-4 outline-none text-white focus:border-green-400 transition"
                        />

                    </div>

                    {/* User Type */}

                    <select className="w-full bg-black/40 border border-green-500/30 rounded-full py-4 px-6 outline-none text-white focus:border-green-400 transition">

                        <option>Login as Buyer</option>

                        <option>Login as Farmer</option>

                        <option>Login as Admin</option>

                    </select>

                    {/* Button */}

                    <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-full glow-btn transition duration-300">

                        Login

                    </button>

                </form>

                {/* Bottom */}

                <p className="text-center text-gray-400 mt-8">

                    Don’t have an account?{" "}

                    <Link
                        to="/signup"
                        className="text-green-400 hover:text-green-300"
                    >
                        Signup
                    </Link>

                </p>

            </motion.div>

        </div>
    );
}

export default Login;