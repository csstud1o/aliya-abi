import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MenuModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      className="fixed inset-0 z-[5000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background:'rgba(5,5,5,0.92)', backdropFilter:'blur(30px)' }} />
      <motion.div initial={{ scale:0.85, y:30, opacity:0 }} animate={{ scale:1, y:0, opacity:1 }} exit={{ scale:0.9, opacity:0 }}
        transition={{ duration:0.45, ease:[0.16,1,0.3,1] }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-md w-full overflow-hidden"
        style={{ background:'rgba(8,8,8,0.98)', border:`1px solid ${item.color}35`, boxShadow:`0 0 80px ${item.color}15, 0 30px 60px rgba(0,0,0,0.8)` }}>

        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background:`linear-gradient(180deg, ${item.color}18 0%, transparent 100%)` }} />

        <button onClick={onClose} data-cursor="pointer"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/30 hover:text-white transition-colors"
          style={{ border:'1px solid rgba(255,255,255,0.1)' }}>✕</button>

        <div className="p-8 relative z-10">
          <motion.div className="text-6xl text-center mb-4" animate={{ y:[0,-6,0] }} transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}>
            {item.emoji}
          </motion.div>

          {item.badge && (
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 text-[9px] tracking-[3px] uppercase rounded-full"
                style={{ background:`${item.color}20`, border:`1px solid ${item.color}50`, color:item.color }}>{item.badge}</span>
            </div>
          )}

          <h2 className="text-3xl font-bold text-center mb-1" style={{ fontFamily:"'Playfair Display',serif", color:item.color }}>{item.name}</h2>
          <p className="text-center text-[10px] tracking-[3px] uppercase mb-5" style={{ color:'rgba(248,246,243,0.3)' }}>{item.nameUz}</p>

          <p className="text-center leading-relaxed mb-6" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'1.05rem', color:'rgba(248,246,243,0.6)' }}>
            {item.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {item.ingredients.map((ing,i) => (
              <motion.span key={ing} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:i*0.05 }}
                className="px-3 py-1 text-[11px] rounded-full text-white/50"
                style={{ border:`1px solid ${item.color}35` }}>{ing}</motion.span>
            ))}
          </div>

          <div className="flex justify-center gap-8 py-5 mb-5 border-t border-b border-white/5">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily:"'Playfair Display',serif", color:item.color }}>{item.price.toLocaleString()}</div>
              <div className="text-[9px] tracking-[2px] uppercase text-white/30 mt-1">so'm</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white" style={{ fontFamily:"'Playfair Display',serif" }}>{item.calories}</div>
              <div className="text-[9px] tracking-[2px] uppercase text-white/30 mt-1">kcal</div>
            </div>
          </div>

          <motion.button data-cursor="pointer" whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
            className="w-full py-4 text-sm tracking-[3px] uppercase font-semibold"
            style={{ background:`linear-gradient(135deg, ${item.color}, ${item.color}cc)`, color:'#050505', fontFamily:'Inter,sans-serif' }}>
            Add to Order
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
