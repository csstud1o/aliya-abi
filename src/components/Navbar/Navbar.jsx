import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { key: 'nav_about',   href: '#about' },
    { key: 'nav_menu',    href: '#menu' },
    { key: 'nav_gallery', href: '#gallery' },
    { key: 'nav_reviews', href: '#reviews' },
    { key: 'nav_contact', href: '#location' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="nav-header"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          background: scrolled ? 'rgba(15,10,8,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,146,42,0.12)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* ── Logo ── */}
            <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <div className="font-display" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.18em', color: '#F2EDE8' }}>
                ALIYA ABI
              </div>
              <div style={{ fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(200,146,42,0.55)', marginTop: '2px', fontFamily: 'Inter, sans-serif' }}>
                Termiz
              </div>
            </a>

            {/* ── Desktop nav (hidden on mobile via CSS) ── */}
            <nav className="nav-desktop">
              {links.map(l => (
                <a key={l.key} href={l.href} className="nav-link">
                  {t(l.key)}
                </a>
              ))}
            </nav>

            {/* ── Right controls ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <LanguageSwitcher />

              {/* Reserve button — desktop only */}
              <a href="#reservation" className="btn btn-gold nav-reserve-btn">
                {t('nav_reserve')}
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setOpen(!open)}
                className="nav-hamburger"
                aria-label="Menu"
                style={{
                  background: 'none', border: 'none',
                  cursor: 'pointer', padding: '8px',
                  WebkitTapHighlightColor: 'transparent',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', gap: '5px',
                }}
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  style={{ display: 'block', width: '22px', height: '1.5px', background: '#F2EDE8', transformOrigin: 'center' }}
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  style={{ display: 'block', width: '14px', height: '1.5px', background: '#F2EDE8', marginLeft: 'auto' }}
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  style={{ display: 'block', width: '22px', height: '1.5px', background: '#F2EDE8', transformOrigin: 'center' }}
                />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 490,
              background: '#0F0A08',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '24px',
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display"
                style={{
                  fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: 700,
                  color: '#F2EDE8', textDecoration: 'none',
                  transition: 'color 0.3s',
                  WebkitTapHighlightColor: 'transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#C8922A'}
                onMouseLeave={e => e.currentTarget.style.color = '#F2EDE8'}
              >
                {t(l.key)}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="btn btn-gold"
              style={{ marginTop: '8px' }}
            >
              {t('nav_reserve')}
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navbar CSS ── */}
      <style>{`
        /* Desktop nav */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(242,237,232,0.48);
          text-decoration: none;
          transition: color 0.3s;
          white-space: nowrap;
          font-family: Inter, sans-serif;
        }
        .nav-link:hover { color: #F2EDE8; }

        .nav-reserve-btn {
          padding: 10px 20px !important;
          font-size: 10px !important;
        }

        /* Hamburger — hidden on desktop */
        .nav-hamburger { display: none; }

        @media (max-width: 860px) {
          .nav-desktop      { display: none !important; }
          .nav-reserve-btn  { display: none !important; }
          .nav-hamburger    { display: flex !important; }
        }
      `}</style>
    </>
  )
}
