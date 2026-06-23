import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Reserve() {
  const { t } = useLang()
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', guests:'2', note:'' })
  const [done, setDone] = useState(false)
  const set = (k,v) => setForm(p => ({ ...p, [k]:v }))

  return (
    <section id="reservation" className="section-py" style={{ background:'#1A120C' }}>
      <div className="container-main">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'72px', alignItems:'start' }} className="reserve-grid">
          {/* Left */}
          <div>
            <motion.p className="label" style={{ marginBottom:'12px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>{t('res_tag')}</motion.p>
            <motion.h2 className="font-display" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
              style={{ fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8', marginBottom:'20px' }}>
              {t('res_h1')}<br /><span style={{ color:'#C8922A' }}>{t('res_h2')}</span>
            </motion.h2>
            <motion.p initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
              style={{ color:'rgba(242,237,232,0.48)', lineHeight:1.8, fontSize:'15px', fontWeight:300, marginBottom:'44px' }}>{t('res_desc')}</motion.p>

            {[['res_step1'],['res_step2'],['res_step3']].map(([key],i) => (
              <motion.div key={key} initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.1+i*0.1 }}
                style={{ display:'flex', alignItems:'center', gap:'18px', marginBottom:'18px' }}>
                <div className="font-display" style={{ fontSize:'1.9rem', fontWeight:700, color:'rgba(200,146,42,0.2)', minWidth:'44px' }}>0{i+1}</div>
                <p style={{ color:'rgba(242,237,232,0.48)', fontSize:'14px', lineHeight:1.5 }}>{t(key)}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:22 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.15, duration:0.8 }}>
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }}
                  style={{ padding:'56px 40px', textAlign:'center', background:'#0F0A08', border:'1px solid rgba(200,146,42,0.2)', minHeight:'380px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'14px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <h3 className="font-display" style={{ fontSize:'1.7rem', fontWeight:700, color:'#F2EDE8' }}>{t('res_done_title')}</h3>
                  <p style={{ color:'rgba(242,237,232,0.45)', lineHeight:1.7, fontSize:'14px', maxWidth:'260px' }}>{t('res_done_desc')}</p>
                  <button onClick={() => setDone(false)} className="btn btn-ghost" style={{ marginTop:'12px' }}>{t('res_done_new')}</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={e => { e.preventDefault(); setDone(true) }}
                  style={{ padding:'clamp(20px,4vw,36px)', background:'#0F0A08', border:'1px solid rgba(200,146,42,0.12)', display:'flex', flexDirection:'column', gap:'16px' }}>
                  {[['name',t('res_name'),'text',t('res_name_ph'),true],['phone',t('res_phone'),'tel',t('res_phone_ph'),true],['email',t('res_email'),'email',t('res_email_ph'),false]].map(([k,label,type,ph,req]) => (
                    <div key={k}>
                      <label style={{ display:'block', fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,146,42,0.5)', marginBottom:'7px' }}>{label}</label>
                      <input type={type} required={req} placeholder={ph} value={form[k]} onChange={e => set(k,e.target.value)} className="field" />
                    </div>
                  ))}
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }} className="date-time-grid">
                    {[['date',t('res_date'),'date'],['time',t('res_time'),'time']].map(([k,label,type]) => (
                      <div key={k}>
                        <label style={{ display:'block', fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,146,42,0.5)', marginBottom:'7px' }}>{label}</label>
                        <input type={type} required value={form[k]} onChange={e => set(k,e.target.value)} className="field" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,146,42,0.5)', marginBottom:'7px' }}>{t('res_guests')}</label>
                    <div style={{ display:'flex', gap:'6px' }}>
                      {['1','2','3','4','5','6+'].map(n => (
                        <button key={n} type="button" onClick={() => set('guests',n)}
                          style={{ flex:1, padding:'12px 4px', fontSize:'14px', cursor:'pointer', minHeight:'44px', WebkitTapHighlightColor:'transparent',
                          background:form.guests===n?'rgba(200,146,42,0.14)':'rgba(242,237,232,0.03)', border:`1px solid ${form.guests===n?'rgba(200,146,42,0.5)':'rgba(200,146,42,0.12)'}`, color:form.guests===n?'#C8922A':'rgba(242,237,232,0.38)', transition:'all 0.25s' }}>
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,146,42,0.5)', marginBottom:'7px' }}>{t('res_note')}</label>
                    <textarea value={form.note} onChange={e => set('note',e.target.value)} rows={3} placeholder={t('res_note_ph')} className="field" style={{ resize:'none' }} />
                  </div>
                  <motion.button type="submit" whileHover={{ scale:1.01 }} whileTap={{ scale:0.99 }} className="btn btn-gold" style={{ padding:'15px 32px', width:'100%', marginTop:'4px' }}>
                    {t('res_btn')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.reserve-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  )
}
