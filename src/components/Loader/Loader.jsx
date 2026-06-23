import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dur = 2000, start = Date.now()
    const timer = setInterval(() => {
      const p = Math.min(((Date.now() - start) / dur) * 100, 100)
      setProgress(Math.floor(p))
      if (p >= 100) { clearInterval(timer); setTimeout(() => { setVisible(false); onComplete?.() }, 300) }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div exit={{ opacity:0 }} transition={{ duration:0.5 }}
          style={{ position:'fixed', inset:0, zIndex:99999, background:'#0F0A08', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'28px' }}>
          {/* Pizza icon */}
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6 }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M12 2v20M2 12h20"/>
              <circle cx="8" cy="8" r="1.5" fill="#C8922A"/>
              <circle cx="15" cy="9" r="1" fill="#C8922A"/>
              <circle cx="10" cy="14" r="1" fill="#C8922A"/>
              <circle cx="16" cy="15" r="1.5" fill="#C8922A"/>
            </svg>
          </motion.div>
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }} style={{ textAlign:'center' }}>
            <p className="label" style={{ marginBottom:'8px' }}>Premium Restoran · Termiz</p>
            <h1 className="font-display" style={{ fontSize:'clamp(2rem,5vw,4rem)', fontWeight:700, color:'#F2EDE8', letterSpacing:'0.08em' }}>
              ALIYA ABI
            </h1>
          </motion.div>
          <div style={{ width:'140px', display:'flex', flexDirection:'column', gap:'6px' }}>
            <div style={{ width:'100%', height:'1px', background:'rgba(200,146,42,0.2)', overflow:'hidden' }}>
              <div style={{ height:'100%', background:'#C8922A', width:`${progress}%`, transition:'width 0.1s ease' }} />
            </div>
            <p style={{ textAlign:'right', fontSize:'10px', color:'rgba(242,237,232,0.2)', fontFamily:'monospace' }}>{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
