import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { animate, stagger } from 'animejs'

function FireCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current; if (!c) return
    const ctx = c.getContext('2d')
    c.width = c.offsetWidth; c.height = c.offsetHeight
    const ps = []
    for (let i=0;i<100;i++) {
      ps.push({ x:c.width/2+(Math.random()-.5)*80, y:c.height, vx:(Math.random()-.5)*1.2, vy:-(Math.random()*3+1.5), life:Math.floor(Math.random()*60), maxLife:50+Math.random()*50, size:Math.random()*5+2, alpha:0.7, r:180+Math.floor(Math.random()*75), g:Math.floor(Math.random()*80) })
    }
    let raf
    const draw = () => {
      ctx.fillStyle='rgba(5,5,5,0.15)'; ctx.fillRect(0,0,c.width,c.height)
      ps.forEach(p => {
        p.x+=p.vx; p.vy-=0.03; p.y+=p.vy; p.life++
        p.alpha=(1-p.life/p.maxLife)*0.8; p.size*=0.995
        if(p.life>=p.maxLife){p.x=c.width/2+(Math.random()-.5)*80;p.y=c.height;p.vx=(Math.random()-.5)*1.2;p.vy=-(Math.random()*3+1.5);p.life=0;p.size=Math.random()*5+2}
        const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size)
        g.addColorStop(0,'#FFFDE0'); g.addColorStop(0.3,`rgb(${p.r},${p.g},0)`); g.addColorStop(1,'transparent')
        ctx.save(); ctx.globalAlpha=Math.max(0,p.alpha); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); ctx.restore()
      })
      raf=requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])
  return <canvas ref={canvasRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 pointer-events-none opacity-80" />
}

function RevealText({ text, accent, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-20% 0px' })
  useEffect(() => {
    if (inView) animate(ref.current.querySelectorAll('.ch'), { opacity:[0,1], translateY:[50,0], duration:750, delay:stagger(38, { start:index*180 }), easing:'easeOutExpo' })
  }, [inView])
  return (
    <div ref={ref} className="overflow-hidden leading-none">
      {text.split('').map((ch,i) => (
        <span key={i} className="ch inline-block opacity-0"
          style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(3rem,8vw,7rem)', fontWeight:700, color: ch===' '?'transparent': accent?'#D4AF37':'#F8F6F3', marginRight:ch===' '?'1rem':0, filter: accent?'drop-shadow(0 0 20px rgba(212,175,55,0.35))':'none' }}>
          {ch===' '?'\u00A0':ch}
        </span>
      ))}
    </div>
  )
}

export default function Story() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const yBg = useTransform(scrollYProgress, [0,1], ['0%','25%'])

  return (
    <section ref={ref} id="story" className="relative min-h-screen py-40 overflow-hidden" style={{ background:'#050505' }}>
      <motion.div style={{ y:yBg }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full"
          style={{ background:'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="flex items-center gap-4 mb-8">
              <div className="gold-line" />
              <span style={{ fontSize:'10px', letterSpacing:'5px', color:'rgba(212,175,55,0.65)', textTransform:'uppercase' }}>Our Philosophy</span>
            </motion.div>
            <RevealText text="Every Pizza" accent={false} index={0} />
            <RevealText text="Has A Story" accent={true} index={1} />

            <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
              className="mt-10 max-w-sm" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'1.15rem', color:'rgba(248,246,243,0.5)', lineHeight:1.8 }}>
              From the sun-soaked fields of Termiz to your table — we craft every pizza with fire, passion, and a reverence for ancient flavours made extraordinary.
            </motion.p>

            <div className="flex gap-8 mt-10">
              {[['500°C','Wood Fire Oven'],['90s','Perfect Bake'],['48h','Dough Ferment']].map(([n,l]) => (
                <div key={l} className="flex flex-col">
                  <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.8rem', fontWeight:700, background:'linear-gradient(135deg,#D4AF37,#F5E27A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{n}</span>
                  <span style={{ fontSize:'9px', letterSpacing:'2px', color:'rgba(248,246,243,0.3)', textTransform:'uppercase', marginTop:'4px' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — orbiting rings */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {[0,1,2].map(i => (
                <motion.div key={i} animate={{ rotate: i%2===0?360:-360 }} transition={{ duration:12+i*4, ease:'linear', repeat:Infinity }}
                  className="absolute rounded-full"
                  style={{ inset:`${i*22}px`, border:`1px solid rgba(212,175,55,${0.1+i*0.08})` }} />
              ))}
              <div className="absolute inset-20 rounded-full flex items-center justify-center"
                style={{ background:'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(5,5,5,0.85) 100%)', border:'1px solid rgba(212,175,55,0.25)', boxShadow:'0 0 60px rgba(212,175,55,0.12)' }}>
                <span className="text-5xl">🔥</span>
              </div>
              {[0,1,2,3].map(i => (
                <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-[#D4AF37]"
                  style={{ top:'50%', left:'50%', marginLeft:-4, marginTop:-4 }}
                  animate={{ rotate: [i*90, i*90+360] }}
                  transition={{ duration:8+i*1.5, ease:'linear', repeat:Infinity }}
                  transformTemplate={({ rotate }) => `rotate(${rotate}) translateX(135px)`} />
              ))}
            </div>
            <FireCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}
