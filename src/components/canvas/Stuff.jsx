import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { useRef, useState } from "react";


const StuffCanvas = () => {
    return (
        <Canvas shadows camera={{ position: [1, 0.5, 2], fov: 20 }}>
            <ambientLight />
            <OrbitControls
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 2.5}
                enableZoom={false}
            />
            <SpotLight
                position={[0, 1, 0]}
                attenuation={1}
                intensity={0.2}
                scale={0.18}
                angle={0.2}

            />
            <spotLight
                position={[-20, 35, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <group>
                <mesh
                    scale={0.5}
                    position={[0, 0.1, 0]}
                    castShadow
                >
                    <boxGeometry args={[2, 0.08, 2]} />
                    <meshStandardMaterial color='#314362' />
                </mesh>
            </group>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[1.3, 1, 2]} />
                <shadowMaterial opacity={0.2} />
            </mesh>
        </Canvas>
    )
}

export default StuffCanvas;