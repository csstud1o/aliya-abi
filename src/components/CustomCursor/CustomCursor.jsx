import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const rx = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.3 })
  const ry = useSpring(my, { stiffness: 150, damping: 20, mass: 0.3 })

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div
        style={{
          position: 'fixed', left: mx, top: my,
          translateX: '-50%', translateY: '-50%',
          width: 6, height: 6,
          background: '#D4AF37',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
      <motion.div
        style={{
          position: 'fixed', left: rx, top: ry,
          translateX: '-50%', translateY: '-50%',
          width: 34, height: 34,
          border: '1px solid rgba(212,175,55,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
        }}
      />
    </>
  )
}
