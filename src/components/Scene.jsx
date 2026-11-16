import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Stars, Float } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { images } from '../images'

function Card({ url, angle, radius }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    const target = hovered ? 1.25 : 1
    ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, 3.2 * target, 6, delta)
    ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, 1.8 * target, 6, delta)
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.6}>
      <group position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]} rotation={[0, angle, 0]}>
        <Image
          ref={ref}
          url={url}
          transparent
          side={THREE.DoubleSide}
          scale={[3.2, 1.8]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </group>
    </Float>
  )
}

function Ring() {
  const group = useRef()
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.15
    // mouse parallax
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.2, 0.05)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.5, 0.05)
  })

  return (
    <group ref={group}>
      {images.map((img, i) => (
        <Card key={img.src} url={img.src} angle={(i / images.length) * Math.PI * 2} radius={5.5} />
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
      <color attach="background" args={['#0a0212']} />
      <fog attach="fog" args={['#0a0212', 8, 20]} />
      <Stars radius={60} depth={40} count={3000} factor={4} fade speed={1} />
      <Suspense fallback={null}>
        <Ring />
      </Suspense>
    </Canvas>
  )
}