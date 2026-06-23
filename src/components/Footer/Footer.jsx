import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const navItems = ['nav_about','nav_menu','nav_gallery','nav_reviews','nav_contact']
  const navHrefs = ['#about','#menu','#gallery','#reviews','#location']

  return (
    <footer style={{ background:'#0F0A08', borderTop:'1px solid rgba(200,146,42,0.1)' }}>
      <div className="container-main" style={{ paddingTop:'72px', paddingBottom:'36px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:'56px', marginBottom:'52px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <h3 className="font-display" style={{ fontSize:'1.25rem', fontWeight:700, letterSpacing:'0.15em', color:'#F2EDE8', marginBottom:'12px' }}>ALIYA ABI</h3>
            <p style={{ fontSize:'14px', color:'rgba(242,237,232,0.38)', lineHeight:1.75, fontWeight:300, maxWidth:'300px', marginBottom:'22px' }}>{t('footer_desc')}</p>
            <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
              <a href="https://instagram.com/aliyaabi_termiz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding:'8px 16px', fontSize:'10px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="https://t.me/aliyaabi" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding:'8px 16px', fontSize:'10px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073L8 16.5V20a1 1 0 0 0 1.707.707L12 18.414l3.333 1.519A2.25 2.25 0 0 0 18.515 18.1L21.978 4.412a2.249 2.249 0 0 0-.78-1.979z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'3px', textTransform:'uppercase', color:'rgba(242,237,232,0.3)', marginBottom:'18px' }}>{t('footer_nav')}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'11px' }}>
              {navItems.map((key,i) => (
                <li key={key}>
                  <a href={navHrefs[i]} style={{ fontSize:'14px', color:'rgba(242,237,232,0.42)', fontWeight:300, textDecoration:'none', transition:'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#C8922A'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(242,237,232,0.42)'}>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'3px', textTransform:'uppercase', color:'rgba(242,237,232,0.3)', marginBottom:'18px' }}>{t('footer_contact')}</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'11px' }}>
              {[
                [<svg key="a" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, 'Termiz, Uzbekistan'],
                [<svg key="p" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 3.92 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, '+998 XX XXX XX XX'],
                [<svg key="m" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, 'hello@aliyaabi.uz'],
                [<svg key="t" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, '10:00 – 23:00'],
              ].map(([icon,val]) => (
                <div key={val} style={{ display:'flex', alignItems:'center', gap:'9px' }}>
                  {icon}
                  <span style={{ fontSize:'13px', color:'rgba(242,237,232,0.42)', fontWeight:300 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', paddingTop:'24px', borderTop:'1px solid rgba(200,146,42,0.08)' }}>
          <p style={{ fontSize:'12px', color:'rgba(242,237,232,0.2)' }}>{t('footer_copy')}</p>
          <p style={{ fontSize:'12px', color:'rgba(242,237,232,0.2)' }}>{t('footer_made')}</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}
