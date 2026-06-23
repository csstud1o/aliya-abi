import { motion } from 'framer-motion'

const features = [
  { icon:'🕯️', title:'Candlelit Ambiance', desc:'Every table glows with warm candlelight, creating an intimate atmosphere for every occasion.' },
  { icon:'🎵', title:'Live Music Fridays', desc:'Enjoy live jazz and acoustic performances every Friday and Saturday evening.' },
  { icon:'🍷', title:'Premium Selection', desc:'Curated wine and beverage collection to complement every dish on our menu.' },
  { icon:'👨‍🍳', title:'Open Kitchen', desc:'Watch our chefs craft your meal in our theatrical open kitchen.' },
]

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="relative min-h-screen py-28 overflow-hidden" style={{ background:'#050505' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="flex items-center justify-center gap-4 mb-5">
            <div className="gold-line" /><span style={{ fontSize:'10px', letterSpacing:'5px', color:'#D4AF37', textTransform:'uppercase' }}>The Space</span><div className="gold-line" />
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:35 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(3rem,7vw,6rem)', fontWeight:700, lineHeight:1 }}>
            <span style={{ color:'#F8F6F3' }}>Luxury</span>{' '}
            <span className="text-gold">Atmosphere</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f,i) => (
            <motion.div key={f.title} initial={{ opacity:0, y:35 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
              whileHover={{ y:-8, borderColor:'rgba(212,175,55,0.3)' }}
              className="p-6 text-center transition-all duration-300"
              style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gold" style={{ fontFamily:"'Playfair Display',serif" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color:'rgba(248,246,243,0.45)' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.3 }}
          className="text-center mt-16 py-10 relative">
          <div className="absolute inset-0" style={{ border:'1px solid rgba(212,175,55,0.1)', background:'rgba(212,175,55,0.02)' }} />
          <div className="relative z-10">
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'clamp(1.1rem,2.2vw,1.8rem)', color:'rgba(248,246,243,0.65)', maxWidth:'680px', margin:'0 auto', lineHeight:1.7 }}>
              "We didn't build a restaurant. We built a stage where every meal becomes a memory."
            </p>
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="gold-line" />
              <span style={{ fontSize:'9px', letterSpacing:'3px', color:'rgba(212,175,55,0.55)', textTransform:'uppercase' }}>Aliya Abi Founder</span>
              <div className="gold-line" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
