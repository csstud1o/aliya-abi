import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLang()
  const features = [
    { num:'01', titleKey:'exp_f1_title', descKey:'exp_f1_desc',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12m0 0C12 7 7 4 2 6M12 12c0-5 5-8 10-6"/><path d="M12 22c-4 0-8-2-8-6 0-3 2-5 4-6"/><path d="M12 22c4 0 8-2 8-6 0-3-2-5-4-6"/></svg>
    },
    { num:'02', titleKey:'exp_f2_title', descKey:'exp_f2_desc',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/><rect x="2" y="7" width="3" height="10" rx="1"/></svg>
    },
    { num:'03', titleKey:'exp_f3_title', descKey:'exp_f3_desc',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    },
  ]

  return (
    <section id="experience" className="section-py" style={{ background:'#1A120C' }}>
      <div className="container-main">
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <motion.p className="label" style={{ marginBottom:'12px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
            {t('exp_tag')}
          </motion.p>
          <motion.h2 className="font-display" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            style={{ fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8' }}>
            {t('exp_h1')} <span style={{ color:'#C8922A' }}>{t('exp_h2')}</span>
          </motion.h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }} className="exp-grid">
          {features.map((f,i) => (
            <motion.div key={f.num} initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.12, duration:0.8, ease:[0.16,1,0.3,1] }}
              style={{ padding:'36px 32px 40px', background:'rgba(242,237,232,0.02)', border:'1px solid rgba(200,146,42,0.12)', position:'relative', cursor:'pointer', transition:'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(200,146,42,0.3)'; e.currentTarget.style.transform='translateY(-5px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(200,146,42,0.12)'; e.currentTarget.style.transform='translateY(0)' }}>
              <div className="font-display" style={{ fontSize:'2.5rem', fontWeight:700, color:'rgba(200,146,42,0.1)', lineHeight:1, marginBottom:'20px' }}>{f.num}</div>
              <div style={{ marginBottom:'16px' }}>{f.icon}</div>
              <h3 className="font-display" style={{ fontSize:'1.2rem', fontWeight:600, color:'#F2EDE8', lineHeight:1.3, marginBottom:'12px' }}>{t(f.titleKey)}</h3>
              <p style={{ color:'rgba(242,237,232,0.45)', lineHeight:1.7, fontSize:'14px', fontWeight:300 }}>{t(f.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.exp-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
