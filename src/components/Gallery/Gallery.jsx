import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80',
    labelUz: "Restoran ichki ko'rinishi",
    tall: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80',
    labelUz: 'Imzo pitsa',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
    labelUz: 'Oshxona xonasi',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80',
    labelUz: "Oshpaz tanlovi",
    tall: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
    labelUz: "Yog'och o'choq pitsa",
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&auto=format&fit=crop&q=80',
    labelUz: 'Kechki muhit',
  },
]

function GalleryItem({ photo, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const [hov, setHov] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={photo.tall ? 'gallery-item gallery-tall' : 'gallery-item'}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'default', background: '#1A120C' }}
    >
      {!imgError ? (
        <img
          src={photo.src}
          alt={photo.labelUz}
          loading="lazy"
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hov ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      ) : (
        /* Fallback when image fails */
        <div style={{
          width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#1A120C', color: 'rgba(242,237,232,0.3)', fontSize: '13px', fontFamily: 'Inter, sans-serif',
        }}>
          {photo.labelUz}
        </div>
      )}

      {/* Hover label */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,10,8,0.78) 0%, transparent 55%)',
        display: 'flex', alignItems: 'flex-end', padding: '18px',
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        <span style={{
          fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
          color: 'rgba(242,237,232,0.88)', fontWeight: 500,
        }}>
          {photo.labelUz}
        </span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const { t } = useLang()

  return (
    <section id="gallery" className="section-py" style={{ background: '#0F0A08' }}>
      <div className="container-main">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <motion.p className="label" style={{ marginBottom: '12px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              {t('gallery_tag')}
            </motion.p>
            <motion.h2 className="font-display"
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', color: '#F2EDE8' }}>
              {t('gallery_h1')}<br />
              <span style={{ color: '#C8922A' }}>{t('gallery_h2')}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ maxWidth: '260px', color: 'rgba(242,237,232,0.38)', lineHeight: 1.7, fontSize: '14px', fontWeight: 300 }}>
            {t('gallery_desc')}
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="gallery-grid">
          {photos.map((p, i) => <GalleryItem key={p.id} photo={p} index={i} />)}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 260px;
          gap: 12px;
        }
        .gallery-tall { grid-row: span 2; }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 200px !important;
          }
          .gallery-tall { grid-row: span 1 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}
