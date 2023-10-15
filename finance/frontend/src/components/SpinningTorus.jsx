// React Import
import React, { Suspense } from 'react'
import { useEffect, useRef } from 'react'

// GSAP Import
import gsap from 'gsap';

// React Three Fiber
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

// My Utils
import { angleToRadians } from './../utils/angle'


const SpinningTorus = (props) => {

    // Animation 
    const torusRef = useRef();
    useEffect(() => {
        if (!!torusRef.current) {
            gsap.to(torusRef.current.rotation, {
                x: angleToRadians(360),
                y: angleToRadians(360),
                z: angleToRadians(360),
                duration: 4,
                repeat: 0,
                ease: "linear",
            })
        }},[props]);

  return (
    <>
    <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 50]}/>

        {/* Torus */}
        <mesh position={[0, 0, 0]} castShadow ref={torusRef}>
            <torusKnotGeometry args={[5, 1, 64, 8, 2, 3]}/>
            <meshStandardMaterial color={'gold'}/>
        </mesh>

        {/* Ambient Light */}
        <ambientLight args={["#ffffff", 1]} position={[1, 0, 1]}/>

        {/* Directional Light */}
        <directionalLight args={["#fc0303", 5]} position={[3, 3, -1]}/>
        <directionalLight args={["#1c03fc", 5]} position={[-3, 3, -1]}/>        
        <directionalLight args={["#00ff1a", 5]} position={[3, -3, -1]}/>
        <directionalLight args={["#8800ff", 5]} position={[-3, -3, -1]}/>   

        </Suspense>
    </Canvas>        
    
    </>
  )
}

export default SpinningTorus