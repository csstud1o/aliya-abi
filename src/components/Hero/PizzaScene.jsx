import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Pizza() {
  const g = useRef()
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = clock.getElapsedTime()
    g.current.rotation.y = t * 0.18
    g.current.rotation.x = Math.sin(t * 0.25) * 0.07
    g.current.position.y = Math.sin(t * 0.4) * 0.18
  })
  return (
    <group ref={g} scale={2.4}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[1, 1, 0.11, 64]} />
        <meshStandardMaterial color="#c07838" roughness={0.85} />
      </mesh>
      {/* Sauce */}
      <mesh position={[0, 0.065, 0]}>
        <cylinderGeometry args={[0.87, 0.87, 0.018, 64]} />
        <meshStandardMaterial color="#b52d1e" roughness={0.9} />
      </mesh>
      {/* Cheese */}
      <mesh position={[0, 0.085, 0]}>
        <cylinderGeometry args={[0.81, 0.81, 0.018, 64]} />
        <meshStandardMaterial color="#f0d060" roughness={0.65} metalness={0.1} />
      </mesh>
      {/* Crust */}
      <mesh>
        <torusGeometry args={[1, 0.09, 16, 64]} />
        <meshStandardMaterial color="#9a4a1e" roughness={0.9} />
      </mesh>
      {/* Toppings */}
      {[...Array(14)].map((_, i) => {
        const a = (i / 14) * Math.PI * 2
        const r = 0.35 + (i % 2) * 0.28
        return (
          <mesh key={i} position={[Math.cos(a)*r, 0.11, Math.sin(a)*r]}>
            <sphereGeometry args={[0.04 + (i%3)*0.015, 8, 8]} />
            <meshStandardMaterial color={i%3===0?'#c0392b':i%3===1?'#27ae60':'#8B4513'} roughness={0.8} />
          </mesh>
        )
      })}
    </group>
  )
}

function Steam() {
  const count = 70
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      a[i*3] = (Math.random()-0.5)*2.5
      a[i*3+1] = Math.random()*3.5
      a[i*3+2] = (Math.random()-0.5)*2.5
    }
    return a
  }, [])
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const arr = ref.current.geometry.attributes.position.array
    for (let i=0;i<count;i++) {
      arr[i*3+1] = ((arr[i*3+1]+0.01)%3.5)
      arr[i*3] += Math.sin(t+i)*0.002
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={pos} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.22} sizeAttenuation />
    </points>
  )
}

function GoldDust() {
  const count = 220
  const pos = useMemo(() => {
    const a = new Float32Array(count*3)
    for (let i=0;i<count;i++) {
      const t=Math.random()*Math.PI*2, p=Math.random()*Math.PI, r=4+Math.random()*5
      a[i*3]=r*Math.sin(p)*Math.cos(t); a[i*3+1]=r*Math.cos(p); a[i*3+2]=r*Math.sin(p)*Math.sin(t)
    }
    return a
  }, [])
  const ref = useRef()
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.getElapsedTime()*0.04 })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={pos} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#D4AF37" transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

function FloatingChunk({ pos, color, spd }) {
  const r = useRef()
  useFrame(({ clock }) => {
    if (!r.current) return
    const t = clock.getElapsedTime()
    r.current.rotation.x = t*spd; r.current.rotation.y = t*spd*0.7
    r.current.position.y = pos[1] + Math.sin(t*spd*0.5)*0.5
  })
  return (
    <Float speed={spd} rotationIntensity={0.4}>
      <mesh ref={r} position={pos}>
        <dodecahedronGeometry args={[0.18]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
    </Float>
  )
}

export default function PizzaScene() {
  return (
    <Canvas camera={{ position:[0,2.8,6.5], fov:48 }} gl={{ antialias:true, alpha:true }} style={{ background:'transparent' }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5,5,5]} intensity={1.6} color="#ffffff" />
      <pointLight position={[-5,3,-2]} intensity={2.2} color="#D4AF37" />
      <pointLight position={[0,-2,4]} intensity={1.2} color="#FF6B35" />
      <spotLight position={[0,9,0]} intensity={2.5} angle={0.28} color="#FFF8E0" />
      <Pizza />
      <Steam />
      <GoldDust />
      <FloatingChunk pos={[-3.8,1,-1]} color="#27ae60" spd={0.55} />
      <FloatingChunk pos={[3.4,0.4,-1.5]} color="#c0392b" spd={0.42} />
      <FloatingChunk pos={[-2.9,-0.4,1.2]} color="#f39c12" spd={0.72} />
      <FloatingChunk pos={[3.7,1.6,0.5]} color="#8B4513" spd={0.5} />
      <Stars radius={30} depth={25} count={350} factor={2.8} fade speed={0.3} />
    </Canvas>
  )
}
