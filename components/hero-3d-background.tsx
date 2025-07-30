"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { Group, Mesh, Points } from 'three'

function FloatingObject({ 
  position, 
  children, 
  rotationSpeed = [0.01, 0.01, 0.01],
  floatSpeed = 1,
  floatRange = 0.5 
}: { 
  position: [number, number, number]
  children: React.ReactNode
  rotationSpeed?: [number, number, number]
  floatSpeed?: number
  floatRange?: number
}) {
  const groupRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * floatSpeed) * floatRange
      
      // Rotation animation
      groupRef.current.rotation.x += rotationSpeed[0]
      groupRef.current.rotation.y += rotationSpeed[1]
      groupRef.current.rotation.z += rotationSpeed[2]
    }

    if (meshRef.current) {
      // Subtle scale animation for breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        {children}
      </mesh>
    </group>
  )
}

function ParticleField() {
  const meshRef = useRef<Points>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particleCount = 50
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#6366f1" transparent opacity={0.6} />
    </points>
  )
}

function Scene() {
  const lightRef = useRef<any>(null)

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime) * 5
    }
  })

  return (
    <>
      {/* Dynamic lighting */}
      <ambientLight intensity={0.4} />
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#06b6d4" />

      {/* Particle field */}
      <ParticleField />

      {/* Floating geometric objects with varied animations */}
      <FloatingObject position={[-8, 3, -5]} rotationSpeed={[0.02, 0.01, 0]} floatSpeed={0.8} floatRange={0.8}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </FloatingObject>

      <FloatingObject position={[8, -2, -8]} rotationSpeed={[0, 0.015, 0.01]} floatSpeed={1.2} floatRange={0.6}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.5}
          roughness={0.4}
          metalness={0.6}
        />
      </FloatingObject>

      <FloatingObject position={[6, 4, -3]} rotationSpeed={[0.01, 0.02, 0.015]} floatSpeed={0.9} floatRange={1.0}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </FloatingObject>

      <FloatingObject position={[-6, -3, -6]} rotationSpeed={[0.005, 0.01, 0.02]} floatSpeed={1.5} floatRange={0.4}>
        <torusGeometry args={[1, 0.3, 8, 20]} />
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </FloatingObject>

      <FloatingObject position={[3, 6, -4]} rotationSpeed={[0.02, 0, 0.01]} floatSpeed={0.7} floatRange={0.9}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          transparent 
          opacity={0.5}
          roughness={0.5}
          metalness={0.5}
        />
      </FloatingObject>

      <FloatingObject position={[-4, 1, -7]} rotationSpeed={[0.015, 0.015, 0]} floatSpeed={1.1} floatRange={0.7}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#ef4444" 
          transparent 
          opacity={0.6}
          roughness={0.4}
          metalness={0.6}
        />
      </FloatingObject>

      <FloatingObject position={[10, 0, -10]} rotationSpeed={[0.01, 0.025, 0.005]} floatSpeed={0.6} floatRange={1.2}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial 
          color="#ec4899" 
          transparent 
          opacity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </FloatingObject>

      <FloatingObject position={[-10, 5, -5]} rotationSpeed={[0, 0.02, 0.01]} floatSpeed={1.3} floatRange={0.5}>
        <torusGeometry args={[0.8, 0.2, 6, 16]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </FloatingObject>
    </>
  )
}

export function Hero3DBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}