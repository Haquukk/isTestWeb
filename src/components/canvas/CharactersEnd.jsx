import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, useAnimations, SpotLight } from '@react-three/drei'
import { easing } from 'maath'
import Mans from '../Mans'


const Man = () => {
    const modelRef = useRef()
    const [hovered, setHovered] = useState(false)
    const { nodes, materials, animations } = useGLTF('./desktop_pc/Mans.gltf')
    const { actions, names } = useAnimations(animations, modelRef)

    useEffect(() => {
        actions['idle'].reset().fadeIn(0.5).play()
        return () =>
            actions['idle'].fadeOut(0.5)
    }, [actions]);
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])


    return (
        <group ref={modelRef} dispose={null}>
            <group name="Scene">
                <group
                    name="Armature">
                    <skinnedMesh
                        onPointerOver={() => setHovered(true)}
                        onPointerOut={() => setHovered(false)}
                        castShadow
                        name="Leather_small_Low003" geometry={nodes.Leather_small_Low003.geometry} material={materials['Material.004']} skeleton={nodes.Leather_small_Low003.skeleton} />
                </group>
            </group>
        </group>
    )
}


const CharactersEndCanvas = () => {
    
    return (
        <Canvas
            frameloop='always'
            shadows
            camera={{ position: [8, 0, 8], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight />
            <pointLight intensity={1} />
            <SpotLight
                position={[0.5, 2.2, 0.6]}
                attenuation={3}
                intensity={0.2}
                scale={1}
                angle={0.2}
                castShadow
            />
            <group>
                <Suspense >
                    <Man />
                </Suspense>
            </group>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1.7, 0]}
                receiveShadow
            >
                <planeGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.5} />
            </mesh>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1.72, 0]}
                castShadow
            >
                <circleGeometry args={[1, 32]} />
                <meshStandardMaterial color='#DDD8B8' />
            </mesh>
            <Preload all />
        </Canvas>
    )
}

export default CharactersEndCanvas 
