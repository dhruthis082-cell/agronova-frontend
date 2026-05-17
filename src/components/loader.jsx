import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

            {/* Glow */}

            <div className="absolute w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px]"></div>

            {/* Content */}

            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="text-center relative z-10"
            >

                {/* Logo */}

                <motion.h1
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="orbitron text-6xl md:text-8xl font-black text-green-400 glow tracking-[8px]"
                >

                    AGRONOVA

                </motion.h1>

                {/* Subtitle */}

                <p className="text-gray-300 text-lg mt-6">

                    Smart Agro Marketplace

                </p>

                {/* Loader */}

                <div className="mt-10 flex justify-center">

                    <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

                </div>

            </motion.div>

        </div>
    );
}

export default Loader;