import { motion } from "framer-motion";

import {
    FaStar,
    FaShoppingCart,
    FaSearch,
} from "react-icons/fa";

import { useState } from "react";

const products = [
    {
        name: "Organic Tomatoes",
        category: "Vegetables",
        price: "₹120 / kg",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Carrots",
        category: "Vegetables",
        price: "₹90 / kg",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Premium Mangoes",
        category: "Fruits",
        price: "₹220 / kg",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Roses",
        category: "Flowers",
        price: "₹350 / bunch",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Organic Rice",
        category: "Grains",
        price: "₹70 / kg",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Tulips",
        category: "Flowers",
        price: "₹420 / bouquet",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Organic Apples",
        category: "Fruits",
        price: "₹180 / kg",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Lavender",
        category: "Flowers",
        price: "₹500 / bouquet",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Organic Bananas",
        category: "Fruits",
        price: "₹80 / dozen",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Spinach",
        category: "Vegetables",
        price: "₹45 / bunch",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Organic Strawberries",
        category: "Fruits",
        price: "₹260 / box",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
    },

    {
        name: "Fresh Jasmine",
        category: "Flowers",
        price: "₹300 / garland",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    },
];

const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Flowers",
    "Grains",
];

function Marketplace() {

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="relative py-32 px-6 min-h-screen overflow-hidden bg-gradient-to-b from-[#04110a] via-[#071b11] to-black">

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-green-400 glow"
                >

                    SMART MARKETPLACE

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg md:text-xl max-w-4xl mx-auto">

                    Buy vegetables, flowers, fruits and grains directly from verified smart farmers.

                </p>

                {/* Search */}

                <div className="mt-14 flex justify-center">

                    <div className="relative w-full max-w-2xl">

                        <FaSearch className="absolute left-5 top-5 text-green-400 text-xl" />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-black/40 border border-green-500/30 rounded-full py-5 pl-14 pr-6 text-white outline-none focus:border-green-400"
                        />

                    </div>

                </div>

                {/* Filters */}

                <div className="flex flex-wrap justify-center gap-4 mt-10">

                    {categories.map((category, index) => (

                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-bold transition duration-300 ${selectedCategory === category
                                    ? "bg-green-500 text-black"
                                    : "bg-black/40 border border-green-500/30 text-white hover:bg-green-500 hover:text-black"
                                }`}
                        >

                            {category}

                        </button>

                    ))}

                </div>

                {/* Products */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

                    {filteredProducts.map((product, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                            }}
                            className="glass neon-border rounded-3xl overflow-hidden group"
                        >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                            </div>

                            {/* Details */}

                            <div className="p-6">

                                <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm">

                                    {product.category}

                                </span>

                                <div className="flex justify-between items-center mt-5">

                                    <h2 className="text-xl font-bold orbitron">

                                        {product.name}

                                    </h2>

                                    <div className="flex items-center gap-1 text-yellow-400">

                                        <FaStar />

                                        <span>{product.rating}</span>

                                    </div>

                                </div>

                                <p className="mt-4 text-green-400 text-2xl font-bold">

                                    {product.price}

                                </p>

                                <button className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition duration-300 glow-btn flex items-center justify-center gap-3">

                                    <FaShoppingCart />

                                    Add to Cart

                                </button>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Marketplace;