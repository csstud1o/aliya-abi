import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

const langs = [
  { code:'uz', label:'UZ' },
  { code:'ru', label:'RU' },
  { code:'en', label:'EN' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const current = langs.find(l => l.code === lang)

  return (
    <div style={{ position:'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display:'flex', alignItems:'center', gap:'6px',
          padding:'8px 12px',
          background:'rgba(200,146,42,0.1)',
          border:'1px solid rgba(200,146,42,0.25)',
          color:'#C8922A',
          fontSize:'10px', fontWeight:600, letterSpacing:'2px',
          cursor:'pointer', transition:'all 0.3s',
          fontFamily:'Inter,sans-serif',
          WebkitTapHighlightColor:'transparent',
          minHeight:'40px',
        }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(200,146,42,0.18)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(200,146,42,0.1)'}
      >
        {/* Globe SVG icon */}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        {current.label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div onClick={() => setOpen(false)} style={{ position:'fixed', inset:0, zIndex:1 }} />
            <motion.div
              initial={{ opacity:0, y:-6, scale:0.97 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:-6, scale:0.97 }}
              transition={{ duration:0.18 }}
              style={{
                position:'absolute', top:'calc(100% + 8px)', right:0,
                background:'#1A120C',
                border:'1px solid rgba(200,146,42,0.2)',
                minWidth:'90px', zIndex:2,
                overflow:'hidden',
              }}
            >
              {langs.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false) }}
                  style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    width:'100%', padding:'12px 16px',
                    background: l.code === lang ? 'rgba(200,146,42,0.12)' : 'transparent',
                    border:'none', cursor:'pointer',
                    fontSize:'11px', fontWeight: l.code === lang ? 600 : 400,
                    letterSpacing:'2px',
                    color: l.code === lang ? '#C8922A' : '#9A8070',
                    fontFamily:'Inter,sans-serif',
                    transition:'all 0.2s',
                    textTransform:'uppercase',
                    gap:'8px',
                    minHeight:'44px',
                    WebkitTapHighlightColor:'transparent',
                  }}
                  onMouseEnter={e => { if(l.code !== lang) e.currentTarget.style.color='#F2EDE8' }}
                  onMouseLeave={e => { if(l.code !== lang) e.currentTarget.style.color='#9A8070' }}
                >
                  {l.label}
                  {l.code === lang && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
