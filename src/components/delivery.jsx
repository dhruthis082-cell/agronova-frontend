import { motion } from "framer-motion";

const deliverySteps = [
    {
        title: "Order Confirmed",
        status: "Completed",
    },

    {
        title: "Packed at Warehouse",
        status: "Completed",
    },

    {
        title: "Out For Delivery",
        status: "Active",
    },

    {
        title: "Delivered",
        status: "Pending",
    },
];

function Delivery() {
    return (
        <section className="relative py-32 px-6 bg-[#071b11] overflow-hidden">

            <div className="max-w-6xl mx-auto">

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-4xl md:text-6xl text-center font-black text-green-400 glow"
                >
                    SMART DELIVERY TRACKING
                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
                    Monitor real-time agricultural deliveries with blockchain-secured
                    logistics tracking and intelligent transport systems.
                </p>

                {/* Truck Animation */}

                <div className="relative mt-24 h-40 overflow-hidden">

                    <motion.div
                        animate={{
                            x: ["-20%", "120%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-10 text-7xl"
                    >
                        🚚
                    </motion.div>

                    <div className="absolute bottom-0 w-full h-2 bg-green-500/30 rounded-full"></div>

                </div>

                {/* Delivery Cards */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">

                    {deliverySteps.map((step, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="glass neon-border rounded-3xl p-8 text-center"
                        >

                            <div
                                className={`w-6 h-6 mx-auto rounded-full mb-6 ${step.status === "Completed"
                                        ? "bg-green-400 shadow-[0_0_20px_#22c55e]"
                                        : step.status === "Active"
                                            ? "bg-yellow-400 shadow-[0_0_20px_yellow]"
                                            : "bg-gray-500"
                                    }`}
                            ></div>

                            <h2 className="orbitron text-2xl font-bold mb-4">
                                {step.title}
                            </h2>

                            <p
                                className={`text-lg font-semibold ${step.status === "Completed"
                                        ? "text-green-400"
                                        : step.status === "Active"
                                            ? "text-yellow-400"
                                            : "text-gray-400"
                                    }`}
                            >
                                {step.status}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Delivery;