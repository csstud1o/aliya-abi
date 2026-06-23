import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Featured() {
  const { t } = useLang()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const imgY = useTransform(scrollYProgress, [0,1], ['8%','-8%'])
  const textY = useTransform(scrollYProgress, [0,1], ['12%','-12%'])

  return (
    <section ref={ref} style={{ position:'relative', overflow:'hidden', height:'80vh', minHeight:'460px' }}>
      <motion.div style={{ y:imgY, position:'absolute', inset:0, scale:1.15 }}>
        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1800&auto=format&fit=crop&q=85" alt="Signature Pizza"
          style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" />
      </motion.div>
      {/* Warm overlay */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(15,10,8,0.9) 38%, rgba(15,10,8,0.22) 100%)' }} />

      <motion.div style={{ y:textY, position:'absolute', inset:0, display:'flex', alignItems:'center' }}>
        <div className="container-main">
          <div style={{ maxWidth:'520px' }}>
            <motion.p className="label" style={{ marginBottom:'16px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
              {t('feat_tag')}
            </motion.p>
            <motion.h2 className="font-display" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1, duration:0.9, ease:[0.16,1,0.3,1] }}
              style={{ fontSize:'clamp(2.5rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8', marginBottom:'14px' }}>
              {t('feat_h1')}<br /><span style={{ color:'#C8922A' }}>{t('feat_h2')}</span>
            </motion.h2>
            <motion.p initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
              style={{ color:'rgba(242,237,232,0.55)', lineHeight:1.8, fontSize:'15px', fontWeight:300, marginBottom:'28px' }}>
              {t('feat_desc')}
            </motion.p>
            <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
              style={{ display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap' }}>
              <a href="#order" className="btn btn-gold">
                {t('feat_btn')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <div>
                <div className="font-display" style={{ fontSize:'1.6rem', fontWeight:700, color:'#C8922A' }}>89K</div>
                <div style={{ fontSize:'9px', letterSpacing:'2px', color:'rgba(242,237,232,0.35)', textTransform:'uppercase' }}>{t('feat_price_label')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
