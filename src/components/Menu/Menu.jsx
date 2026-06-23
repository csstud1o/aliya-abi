import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { menuCategories, menuItems } from '../../data/menuData'
import { useLang } from '../../i18n/LanguageContext'

function MenuCard({ item, index }) {
  const { lang, t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-8% 0px' })
  const [hov, setHov] = useState(false)
  const name = item.name?.[lang] || item.name?.uz || ''
  const desc = item.desc?.[lang] || item.desc?.uz || ''
  const badge = item.badge?.[lang] || item.badge?.uz || ''

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:32 }} animate={inView?{ opacity:1, y:0 }:{}}
      transition={{ duration:0.65, delay:index*0.07, ease:[0.16,1,0.3,1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:'#1A120C', border:`1px solid ${hov?'rgba(200,146,42,0.28)':'rgba(200,146,42,0.1)'}`, overflow:'hidden', cursor:'none', transition:'border-color 0.3s' }}>

      <div style={{ aspectRatio:'4/3', overflow:'hidden', position:'relative' }}>
        <img src={item.img} alt={name}
          loading="lazy"
          style={{ width:'100%', height:'100%', objectFit:'cover', transform:hov?'scale(1.06)':'scale(1)', transition:'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }} />
        {badge && (
          <div style={{ position:'absolute', top:'12px', left:'12px', padding:'4px 10px', background:'#C8922A', color:'#0F0A08', fontSize:'9px', letterSpacing:'1.5px', textTransform:'uppercase', fontWeight:600 }}>
            {badge}
          </div>
        )}
      </div>

      <div style={{ padding:'20px 22px 24px' }}>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'10px', marginBottom:'7px' }}>
          <h3 className="font-display" style={{ fontSize:'1.05rem', fontWeight:600, lineHeight:1.3, color:hov?'#C8922A':'#F2EDE8', transition:'color 0.3s' }}>
            {name}
          </h3>
          <span className="font-display" style={{ fontSize:'0.95rem', fontWeight:600, color:'#C8922A', whiteSpace:'nowrap', flexShrink:0 }}>
            {Math.round(item.price/1000)}K
          </span>
        </div>
        <p style={{ fontSize:'13px', color:'rgba(242,237,232,0.42)', lineHeight:1.6, fontWeight:300 }}>{desc}</p>
      </div>

      <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,#C8922A,transparent)', transform:hov?'scaleX(1)':'scaleX(0)', transformOrigin:'left', transition:'transform 0.4s ease' }} />
    </motion.div>
  )
}

export default function Menu() {
  const { lang, t } = useLang()
  const [active, setActive] = useState('pizza')
  const filtered = menuItems.filter(i => i.category === active)

  return (
    <section id="menu" className="section-py" style={{ background:'#0F0A08' }}>
      <div className="container-main">
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'48px', flexWrap:'wrap', gap:'16px' }}>
          <div>
            <motion.p className="label" style={{ marginBottom:'12px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
              {t('menu_tag')}
            </motion.p>
            <motion.h2 className="font-display" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
              style={{ fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8' }}>
              {t('menu_h1')}<br /><span style={{ color:'#C8922A' }}>{t('menu_h2')}</span>
            </motion.h2>
          </div>
          <motion.a href="#order" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2 }} className="btn btn-ghost">
            {t('menu_full')}
          </motion.a>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="scroll-x" style={{ display:'flex', borderBottom:'1px solid rgba(200,146,42,0.15)', marginBottom:'40px' }}>
          {menuCategories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              style={{ position:'relative', padding:'0 14px 16px', background:'none', border:'none', cursor:'pointer', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase',
                color:active===c.id?'#F2EDE8':'rgba(242,237,232,0.35)', fontWeight:active===c.id?500:400, fontFamily:'Inter,sans-serif', transition:'color 0.3s', whiteSpace:'nowrap',
                minHeight:'44px', WebkitTapHighlightColor:'transparent' }}>
              {c[lang] || c.uz}
              {active===c.id && (
                <motion.div layoutId="menu-tab" style={{ position:'absolute', bottom:'-1px', left:0, right:0, height:'1px', background:'#C8922A' }} />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
            style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }} className="menu-grid">
            {filtered.map((item,i) => <MenuCard key={item.id} item={item} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`@media(max-width:1024px){.menu-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){.menu-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
