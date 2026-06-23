import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

function LineReveal({ children, delay=0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-10% 0px' })
  return (
    <div ref={ref} className="clip">
      <motion.div initial={{ y:'105%' }} animate={inView?{ y:'0%' }:{}} transition={{ duration:0.85, delay, ease:[0.16,1,0.3,1] }}>
        {children}
      </motion.div>
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target:imgRef, offset:['start end','end start'] })
  const imgScale = useTransform(scrollYProgress, [0,1], [1.1, 1.0])

  return (
    <section id="about" className="section-py" style={{ background:'#0F0A08' }}>
      <div className="container-main">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'80px', alignItems:'center' }} className="about-grid">
          {/* Image */}
          <motion.div ref={imgRef}
            initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            transition={{ duration:0.9, ease:[0.16,1,0.3,1] }}
            style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }}>
            <motion.img
              style={{ scale: imgScale, width: '100%', height: '100%', objectFit: 'cover' }}
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
              alt="Aliya Abi Interior"
              loading="eager"
            />
            <div style={{ position:'absolute', bottom:'24px', left:'24px', padding:'18px 22px', background:'rgba(15,10,8,0.92)', border:'1px solid rgba(200,146,42,0.18)' }}>
              <div className="font-display c-gold" style={{ fontSize:'2rem', fontWeight:700, lineHeight:1 }}>6+</div>
              <div style={{ fontSize:'9px', letterSpacing:'2px', color:'rgba(242,237,232,0.4)', textTransform:'uppercase', marginTop:'5px' }}>{t('about_years')}</div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p className="label" style={{ marginBottom:'22px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
              {t('about_tag')}
            </motion.p>
            <div style={{ marginBottom:'26px' }}>
              <LineReveal delay={0.05}>
                <span className="font-display" style={{ display:'block', fontSize:'clamp(1.9rem,4.5vw,3.4rem)', fontWeight:700, lineHeight:1.1, color:'#F2EDE8' }}>{t('about_h1')}</span>
              </LineReveal>
              <LineReveal delay={0.15}>
                <span className="font-display c-gold" style={{ display:'block', fontSize:'clamp(1.9rem,4.5vw,3.4rem)', fontWeight:700, lineHeight:1.1 }}>{t('about_h2')}</span>
              </LineReveal>
            </div>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
              style={{ color:'rgba(242,237,232,0.52)', lineHeight:1.8, fontSize:'15px', fontWeight:300, marginBottom:'14px' }}>{t('about_p1')}</motion.p>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.28 }}
              style={{ color:'rgba(242,237,232,0.4)', lineHeight:1.8, fontSize:'15px', fontWeight:300, marginBottom:'36px' }}>{t('about_p2')}</motion.p>

            <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.35 }}
              className="about-stats"
              style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'10px' }}>
              {[['about_s1_num','about_s1_label'],['about_s2_num','about_s2_label'],['about_s3_num','about_s3_label']].map(([n,l]) => (
                <div key={l} style={{ textAlign:'center', padding:'18px 10px', border:'1px solid rgba(200,146,42,0.13)', background:'#1A120C' }}>
                  <div className="font-display c-gold" style={{ fontSize:'1.4rem', fontWeight:700 }}>{t(n)}</div>
                  <div style={{ fontSize:'9px', letterSpacing:'1.5px', color:'rgba(242,237,232,0.35)', textTransform:'uppercase', marginTop:'5px' }}>{t(l)}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-grid > div:first-child { aspect-ratio: 16/10 !important; }
        }
        @media (max-width: 380px) {
          .about-stats { grid-template-columns: repeat(3,1fr) !important; }
          .about-stats > div { padding: 14px 6px !important; }
        }
      `}</style>
    </section>
  )
}
