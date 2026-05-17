import { motion } from "framer-motion";

import {
    FaTrash,
    FaShoppingCart,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Cart() {

    const cartItems = [
        {
            name: "Organic Tomatoes",
            price: 120,
            quantity: 2,
            image:
                "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
        },

        {
            name: "Fresh Roses",
            price: 350,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
        },

        {
            name: "Premium Mangoes",
            price: 220,
            quantity: 3,
            image:
                "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#04110a] via-black to-[#071b11] text-white overflow-hidden">

            <Navbar />

            {/* Glow Background */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[120px]"></div>

            <div className="pt-36 px-6 max-w-7xl mx-auto relative z-10">

                {/* Title */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-green-400 glow"
                >

                    YOUR CART

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg">

                    Review your smart farming purchases

                </p>

                {/* Cart Items */}

                <div className="mt-20 grid gap-8">

                    {cartItems.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass neon-border rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6"
                        >

                            {/* Product Image */}

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-40 h-40 object-cover rounded-2xl"
                            />

                            {/* Details */}

                            <div className="flex-1">

                                <h2 className="orbitron text-2xl font-bold text-green-400">

                                    {item.name}

                                </h2>

                                <p className="mt-3 text-gray-300 text-lg">

                                    Quantity: {item.quantity}

                                </p>

                                <p className="mt-2 text-2xl font-bold text-white">

                                    ₹{item.price * item.quantity}

                                </p>

                            </div>

                            {/* Delete Button */}

                            <button className="bg-red-500 hover:bg-red-400 p-4 rounded-full transition duration-300">

                                <FaTrash className="text-xl" />

                            </button>

                        </motion.div>

                    ))}

                </div>

                {/* Total Section */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass neon-border rounded-3xl p-10 mt-16 flex flex-col md:flex-row justify-between items-center gap-8"
                >

                    <div>

                        <h2 className="orbitron text-3xl text-green-400 font-black">

                            TOTAL AMOUNT

                        </h2>

                        <p className="text-5xl font-black mt-4">

                            ₹{total}

                        </p>

                    </div>

                    {/* Checkout Button */}

                    <Link to="/payment">

                        <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-5 rounded-full text-xl glow-btn flex items-center gap-4 transition duration-300">

                            <FaShoppingCart />

                            Proceed to Checkout

                        </button>

                    </Link>

                </motion.div>

            </div>

        </div>
    );
}

export default Cart;
