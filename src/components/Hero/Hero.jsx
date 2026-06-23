import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] })
  const imgY = useTransform(scrollYProgress, [0,1], ['0%','22%'])
  const contentY = useTransform(scrollYProgress, [0,1], ['0%','10%'])
  const opacity = useTransform(scrollYProgress, [0,0.7], [1,0])

  return (
    <section ref={ref} id="hero" style={{ position:'relative', width:'100%', height:'100vh', minHeight:'600px', overflow:'hidden' }}>
      {/* BG — warm pizza kitchen */}
      <motion.div style={{ y:imgY, position:'absolute', inset:0, scale:1.1 }}>
        <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1800&auto=format&fit=crop&q=85" alt="Aliya Abi"
          style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="eager" />
      </motion.div>

      {/* Warm dark overlay — pitsa yog'och/ko'mir toniga mos */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(15,10,8,0.28) 0%, rgba(15,10,8,0.52) 40%, rgba(15,10,8,0.93) 100%)' }} />

      {/* Content */}
      <motion.div style={{ y:contentY, opacity, position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div className="container-main" style={{ paddingBottom:'clamp(52px,10vh,100px)' }}>
          <motion.p className="label" style={{ marginBottom:'18px' }}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.1, ease:[0.16,1,0.3,1] }}>
            {t('hero_tag')}
          </motion.p>

          <div className="clip" style={{ marginBottom:'18px' }}>
            <motion.h1 className="font-display"
              initial={{ y:'100%' }} animate={{ y:'0%' }}
              transition={{ duration:1, delay:0.2, ease:[0.16,1,0.3,1] }}
              style={{ fontSize:'clamp(3.5rem,9vw,8.5rem)', fontWeight:700, lineHeight:0.95, letterSpacing:'-0.02em', color:'#F2EDE8' }}>
              {t('hero_title')}
            </motion.h1>
          </div>

          <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.5 }}
            style={{ fontSize:'clamp(0.9rem,1.5vw,1.05rem)', color:'rgba(242,237,232,0.62)', lineHeight:1.75, fontWeight:300, maxWidth:'460px', marginBottom:'32px' }}>
            {t('hero_subtitle')}
          </motion.p>

          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.65 }}
            style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
            <a href="#menu" className="btn btn-gold">
              {t('hero_btn_menu')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#reservation" className="btn btn-ghost">{t('hero_btn_reserve')}</a>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.9 }}
            style={{ display:'flex', gap:'28px', flexWrap:'wrap', marginTop:'36px', paddingTop:'20px', borderTop:'1px solid rgba(200,146,42,0.15)' }}
            className="hero-stats">
            {[['10:00', t('hero_stat_opens')],['23:00',t('hero_stat_closes')],['1000+',t('hero_stat_guests')],['6+',t('hero_stat_years')]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display" style={{ fontSize:'clamp(1rem,3vw,1.3rem)', fontWeight:600, color:'#F2EDE8' }}>{n}</div>
                <div style={{ fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(242,237,232,0.32)', marginTop:'4px' }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint — mobilda yashir */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
        className="scroll-hint"
        style={{ position:'absolute', bottom:'28px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>
        <span style={{ fontSize:'8px', letterSpacing:'3px', textTransform:'uppercase', color:'rgba(242,237,232,0.28)' }}>{t('hero_scroll')}</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity, ease:'easeInOut' }}
          style={{ width:'1px', height:'36px', background:'linear-gradient(to bottom, rgba(200,146,42,0.7), transparent)' }} />
      </motion.div>
    </section>
  )
}
