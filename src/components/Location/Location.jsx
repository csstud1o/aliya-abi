import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Location() {
  const { t } = useLang()
  const info = [
    { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:t('loc_addr_label'), value:t('loc_addr_val') },
    { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:t('loc_hours_label'), value:t('loc_hours_val') },
    { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 3.92 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label:t('loc_phone_label'), value:'+998 XX XXX XX XX' },
    { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, label:t('loc_park_label'), value:t('loc_park_val') },
  ]

  return (
    <section id="location" className="section-py" style={{ background:'#0F0A08' }}>
      <div className="container-main">
        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <motion.p className="label" style={{ marginBottom:'12px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>{t('loc_tag')}</motion.p>
          <motion.h2 className="font-display" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            style={{ fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8' }}>
            <span style={{ color:'#C8922A' }}>{t('loc_h1')}</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.15 }}
          style={{ width:'100%', height:'380px', overflow:'hidden', border:'1px solid rgba(200,146,42,0.12)', marginBottom:'36px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48000!2d67.278!3d37.224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDEzJzI3LjYiTiA2N8KwMTYnNDEuNSJF!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%" height="100%" style={{ border:0, filter:'invert(90%) hue-rotate(180deg) saturate(0.65) brightness(0.85)', display:'block' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aliya Abi" />
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px', marginBottom:'28px' }} className="location-grid">
          {info.map((item,i) => (
            <motion.div key={item.label} initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
              style={{ padding:'22px 20px', background:'#1A120C', border:'1px solid rgba(200,146,42,0.1)' }}>
              <div style={{ marginBottom:'10px' }}>{item.icon}</div>
              <p style={{ fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,146,42,0.55)', marginBottom:'6px' }}>{item.label}</p>
              <p style={{ fontSize:'13px', color:'rgba(242,237,232,0.68)', lineHeight:1.6, whiteSpace:'pre-line', fontWeight:300 }}>{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
          style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold">{t('loc_directions')}</a>
          <a href="https://t.me/aliyaabi" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073L8 16.5V20a1 1 0 0 0 1.707.707L12 18.414l3.333 1.519A2.25 2.25 0 0 0 18.515 18.1L21.978 4.412a2.249 2.249 0 0 0-.78-1.979z"/>
            </svg>
            Telegram
          </a>
          <a href="https://instagram.com/aliyaabi_termiz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
        </motion.div>
      </div>
      <style>{`@media(max-width:900px){.location-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.location-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
