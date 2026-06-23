import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems } from '../../data/menuData'

export default function Order() {
  const [cart, setCart] = useState({})
  const [success, setSuccess] = useState(false)
  const [orderType, setOrderType] = useState('delivery')

  const featured = menuItems.filter(i => i.featured)
  const add = id => setCart(p => ({ ...p, [id]: (p[id]||0)+1 }))
  const rem = id => setCart(p => { const n={...p}; n[id]>1?n[id]--:delete n[id]; return n })
  const total = Object.entries(cart).reduce((s,[id,q]) => s+(menuItems.find(i=>i.id===+id)?.price||0)*q, 0)
  const cartItems = Object.entries(cart).map(([id,q]) => ({ item:menuItems.find(i=>i.id===+id), q })).filter(x=>x.item)

  const checkout = () => {
    if (!cartItems.length) return
    setSuccess(true)
    setTimeout(() => { setSuccess(false); setCart({}) }, 4000)
  }

  return (
    <section id="order" className="relative min-h-screen py-28 overflow-hidden" style={{ background:'#050505' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="flex items-center justify-center gap-4 mb-5">
            <div className="gold-line" /><span style={{ fontSize:'10px', letterSpacing:'5px', color:'#D4AF37', textTransform:'uppercase' }}>Order Online</span><div className="gold-line" />
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:35 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            className="text-gold" style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(3rem,7vw,6rem)', fontWeight:700, lineHeight:1 }}>Your Order</motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Items */}
          <div className="md:col-span-2">
            <p style={{ fontSize:'10px', letterSpacing:'3px', textTransform:'uppercase', color:'rgba(248,246,243,0.35)', marginBottom:'20px' }}>Popular Items</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {featured.map((item,i) => (
                <motion.div key={item.id} initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                  className="flex gap-3 p-4" style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold mb-1" style={{ fontFamily:"'Playfair Display',serif", color:'#F8F6F3' }}>{item.name}</h4>
                    <p className="text-[10px] mb-2 line-clamp-1" style={{ color:'rgba(248,246,243,0.35)' }}>{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold" style={{ color:item.color }}>{item.price.toLocaleString()} so'm</span>
                      <motion.button onClick={() => add(item.id)} data-cursor="pointer"
                        whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                        className="px-3 py-1 text-[9px] tracking-[2px] uppercase transition-all"
                        style={{ background:cart[item.id]?'rgba(212,175,55,0.12)':'transparent', border:`1px solid ${cart[item.id]?'rgba(212,175,55,0.45)':'rgba(255,255,255,0.1)'}`, color:cart[item.id]?'#D4AF37':'rgba(248,246,243,0.4)' }}>
                        {cart[item.id]?`In Cart (${cart[item.id]})`:'Add'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <motion.div className="sticky top-24" style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(212,175,55,0.1)' }}>
            <div className="flex border-b border-white/5">
              {['delivery','pickup'].map(t => (
                <button key={t} onClick={() => setOrderType(t)} data-cursor="pointer"
                  className="flex-1 py-3 text-[10px] tracking-[2px] uppercase transition-all"
                  style={{ color:orderType===t?'#D4AF37':'rgba(248,246,243,0.3)', borderBottom:orderType===t?'1px solid #D4AF37':'1px solid transparent' }}>{t}</button>
              ))}
            </div>
            <div className="p-5">
              <p style={{ fontSize:'9px', letterSpacing:'3px', textTransform:'uppercase', color:'rgba(248,246,243,0.3)', marginBottom:'14px' }}>Your Cart</p>
              {cartItems.length===0 ? (
                <div className="text-center py-8">
                  <span className="text-4xl block mb-2">🛒</span>
                  <p className="text-sm" style={{ color:'rgba(248,246,243,0.3)' }}>Cart is empty</p>
                </div>
              ) : (
                <AnimatePresence>
                  {cartItems.map(({ item, q }) => (
                    <motion.div key={item.id} layout initial={{ opacity:0, x:15 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-15 }}
                      className="flex items-center gap-2 py-3 border-b border-white/5">
                      <span className="text-xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate" style={{ fontFamily:"'Playfair Display',serif", color:'#F8F6F3' }}>{item.name}</p>
                        <p className="text-[10px]" style={{ color:'#D4AF37' }}>{(item.price*q).toLocaleString()} so'm</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => rem(item.id)} data-cursor="pointer" className="w-5 h-5 rounded-full border border-white/15 text-white/35 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all text-xs flex items-center justify-center">-</button>
                        <span className="text-xs text-white w-3 text-center">{q}</span>
                        <button onClick={() => add(item.id)} data-cursor="pointer" className="w-5 h-5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-xs flex items-center justify-center">+</button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
              {cartItems.length>0 && (
                <>
                  <div className="flex justify-between items-center py-4 mt-1">
                    <span className="text-sm" style={{ color:'rgba(248,246,243,0.55)' }}>Total</span>
                    <span className="text-xl font-bold text-gold" style={{ fontFamily:"'Playfair Display',serif" }}>{total.toLocaleString()} so'm</span>
                  </div>
                  <motion.button onClick={checkout} data-cursor="pointer" whileHover={{ scale:1.01 }} whileTap={{ scale:0.98 }}
                    className="w-full py-3 text-sm tracking-[3px] uppercase font-semibold"
                    style={{ background:'linear-gradient(135deg,#D4AF37,#F5E27A)', color:'#050505', fontFamily:'Inter,sans-serif' }}>
                    Checkout
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success */}
      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[5000] flex items-center justify-center"
            style={{ background:'rgba(5,5,5,0.95)', backdropFilter:'blur(20px)' }}>
            <motion.div initial={{ scale:0.5 }} animate={{ scale:1 }} transition={{ type:'spring', stiffness:200, damping:20 }} className="text-center">
              <motion.div className="text-7xl mb-5" animate={{ rotate:[0,-10,10,0], scale:[1,1.25,1] }} transition={{ duration:0.7, repeat:2 }}>✨</motion.div>
              <h3 className="text-4xl font-bold text-gold mb-2" style={{ fontFamily:"'Playfair Display',serif" }}>Order Received</h3>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', color:'rgba(248,246,243,0.5)', letterSpacing:'2px' }}>
                Your premium order is being prepared
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
