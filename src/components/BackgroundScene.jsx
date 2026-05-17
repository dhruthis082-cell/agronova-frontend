import { Canvas, useFrame } from "@react-three/fiber";

import {
    Float,
    Stars,
    OrbitControls,
} from "@react-three/drei";

import { useRef } from "react";

function Crop({ position, color }) {
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.003;
    });

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>

            <mesh ref={ref} position={position}>

                <coneGeometry args={[0.5, 2, 32]} />

                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    metalness={0.7}
                    roughness={0.2}
                />

            </mesh>

        </Float>
    );
}

function Ground() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>

            <planeGeometry args={[50, 50]} />

            <meshStandardMaterial
                color="#14532d"
                roughness={1}
            />

        </mesh>
    );
}

function BackgroundScene() {
    return (
        <div className="absolute inset-0 z-0">

            <Canvas camera={{ position: [0, 2, 8] }}>

                <color attach="background" args={["#04110a"]} />

                <fog attach="fog" args={["#04110a", 5, 25]} />

                <ambientLight intensity={1.4} />

                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    color="#22c55e"
                />

                <Stars
                    radius={80}
                    depth={40}
                    count={2500}
                    factor={3}
                    fade
                />

                {/* Crops */}

                <Crop position={[-4, 0, -2]} color="#22c55e" />

                <Crop position={[-2, 1, -1]} color="#4ade80" />

                <Crop position={[0, 0, -3]} color="#16a34a" />

                <Crop position={[2, 1, -2]} color="#15803d" />

                <Crop position={[4, 0, -1]} color="#22c55e" />

                <Crop position={[-3, -1, -4]} color="#4ade80" />

                <Crop position={[3, -1, -4]} color="#16a34a" />

                <Ground />

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableZoom={false}
                    enablePan={false}
                />

            </Canvas>

        </div>
    );
}

export default BackgroundScene;




