import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { motion } from 'framer-motion'

import Mans from '../Mans'


const CharactersCanvas = () => {
  const [action, setAction] = useState('idle')
  const [actionTimeout, setActionTimeout] = useState(null)


  const ToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 2200)
  }

  return (
    <>
      <Canvas
        frameloop='always'
        shadows
        camera={{ position: [1, 3, 2.5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024} />
        <group
          scale={0.012}
          position={[0, -1.7, 0]}
          rotation={[0, 0.2, 0]}
        >
          <Suspense >
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
            <Mans action={action} />
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
        <Preload all />
      </Canvas>
      <div
        className='absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center cursor-pointer'>
          <div
            onClick={() => {
              setActionTimeout(setTimeout(() => setAction('idle'), 2600))
              setAction('turn start walking')
              ToSection('about')
            }}
            className='w-[100px] h-[70px] flex text-center rounded-3xl border-4 border-secondary p-2 italic font-medium hover:blur-[2px] '>
            Lets Started!
            <motion.div
              className='w-3 h-3 bg-secondary rounded-full mb-1 '
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          </div>  
      </div>
    </>
  )
}

export default CharactersCanvas 
