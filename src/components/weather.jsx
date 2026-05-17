import { motion } from "framer-motion";

import {
    FaCloudSun,
    FaTint,
    FaWind,
    FaTemperatureHigh,
    FaCloudRain,
} from "react-icons/fa";

const weatherData = [
    {
        day: "Monday",
        temp: "29°C",
        humidity: "65%",
        wind: "12 km/h",
        rain: "20%",
    },

    {
        day: "Tuesday",
        temp: "31°C",
        humidity: "58%",
        wind: "10 km/h",
        rain: "10%",
    },

    {
        day: "Wednesday",
        temp: "27°C",
        humidity: "72%",
        wind: "18 km/h",
        rain: "60%",
    },

    {
        day: "Thursday",
        temp: "26°C",
        humidity: "75%",
        wind: "20 km/h",
        rain: "70%",
    },
];

function Weather() {
    return (
        <section className="relative py-32 px-6 min-h-screen overflow-hidden bg-gradient-to-b from-[#071b11] via-black to-[#04110a] text-white">

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="orbitron text-5xl md:text-7xl text-center font-black text-cyan-400"
                >

                    SMART WEATHER

                </motion.h1>

                <p className="text-center text-gray-300 mt-6 text-lg md:text-xl max-w-4xl mx-auto">

                    AI-powered agricultural weather forecasting and farming insights.

                </p>

                {/* Main Card */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass border border-cyan-500/20 rounded-3xl p-10 mt-20"
                >

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left */}

                        <div>

                            <div className="flex items-center gap-6">

                                <div className="bg-cyan-500 p-6 rounded-3xl">

                                    <FaCloudSun className="text-6xl text-black" />

                                </div>

                                <div>

                                    <h2 className="orbitron text-5xl font-black text-cyan-400">

                                        29°C

                                    </h2>

                                    <p className="text-2xl text-gray-300 mt-2">

                                        Partly Cloudy

                                    </p>

                                </div>

                            </div>

                            {/* Stats */}

                            <div className="grid grid-cols-2 gap-6 mt-12">

                                <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6">

                                    <FaTint className="text-4xl text-cyan-400" />

                                    <h3 className="text-2xl font-bold mt-4">

                                        65%

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        Humidity

                                    </p>

                                </div>

                                <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6">

                                    <FaWind className="text-4xl text-cyan-400" />

                                    <h3 className="text-2xl font-bold mt-4">

                                        12 km/h

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        Wind Speed

                                    </p>

                                </div>

                                <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6">

                                    <FaCloudRain className="text-4xl text-cyan-400" />

                                    <h3 className="text-2xl font-bold mt-4">

                                        20%

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        Rain Chance

                                    </p>

                                </div>

                                <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6">

                                    <FaTemperatureHigh className="text-4xl text-cyan-400" />

                                    <h3 className="text-2xl font-bold mt-4">

                                        Moderate

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        Climate

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div>

                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                                alt="Weather"
                                className="rounded-3xl h-[500px] w-full object-cover"
                            />

                        </div>

                    </div>

                </motion.div>

                {/* Forecast */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {weatherData.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="glass border border-cyan-500/20 rounded-3xl p-8 text-center"
                        >

                            <FaCloudSun className="text-5xl text-cyan-400 mx-auto" />

                            <h2 className="orbitron text-3xl font-black mt-6">

                                {item.day}

                            </h2>

                            <p className="text-4xl font-black text-cyan-400 mt-4">

                                {item.temp}

                            </p>

                            <div className="mt-6 space-y-3 text-gray-300">

                                <p>Humidity: {item.humidity}</p>

                                <p>Wind: {item.wind}</p>

                                <p>Rain: {item.rain}</p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Weather;