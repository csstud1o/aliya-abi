import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext'

const reviewsData = {
  uz: [
    { id:1, name:'Aziz Karimov', role:'Oziq-ovqat tanqidchisi', platform:'Google', rating:5, date:'Noyabr 2024', text:"Fuoco Nero — bu kashfiyot. Ko'mir xamiri va dudlangan tovuqning kombinatsiyasi dahosona. Aliya Abi Termizning ovqatlanish sahnasini butunlay o'zgartirdi." },
    { id:2, name:'Malika Yusupova', role:'Restoran Bloggeri', platform:'Yandex', rating:5, date:'Oktyabr 2024', text:"O'zbekistondagi ko'plab premium restoranlarda yedim, lekin Aliya Abi chindan ham alohida narsa taklif qiladi — muhit, ovqat va xizmat mukammal uyg'unlikda." },
    { id:3, name:'Bobur Toshmatov', role:'Doimiy mehmon', platform:'Google', rating:5, date:'Dekabr 2024', text:"Har juma oqshomi shu yerga kelamiz. Oltin Limonad qo'shimcha mukkammal, Aliya Imzo Pitsa esa hayotimdagi eng yaxshisi." },
    { id:4, name:'Sarvinoz Rakhimova', role:'Tadbirlar Menejeri', platform:'2GIS', rating:5, date:'Sentabr 2024', text:"Kompaniyamizning yillik kechkisini shu yerda o'tkazdik. Jamoa bizning kutganlarimizdan oshib ketdi. Ochiq oshxona tajribasi butun kechani ajoyib qildi." },
  ],
  ru: [
    { id:1, name:'Aziz Karimov', role:'Гастрономический критик', platform:'Google', rating:5, date:'Ноябрь 2024', text:'Fuoco Nero — это откровение. Сочетание угольного теста и копчёной курицы — настоящий гений. Aliya Abi полностью изменил гастрономическую сцену Термеза.' },
    { id:2, name:'Малика Юсупова', role:'Ресторанный блогер', platform:'Yandex', rating:5, date:'Октябрь 2024', text:'Я была во многих премиальных ресторанах Узбекистана, но Aliya Abi предлагает нечто по-настоящему особенное — атмосфера, еда и сервис в идеальной гармонии.' },
    { id:3, name:'Бобур Тошматов', role:'Постоянный гость', platform:'Google', rating:5, date:'Декабрь 2024', text:'Каждую пятницу мы приходим сюда. Золотой Лимонад просто несравненный, а фирменная пицца Aliya — лучшая, которую я когда-либо ел.' },
    { id:4, name:'Сарвиноз Рахимова', role:'Event-менеджер', platform:'2GIS', rating:5, date:'Сентябрь 2024', text:'Организовала юбилей нашей компании здесь. Команда превзошла все наши ожидания. Открытая кухня сделала весь вечер волшебным.' },
  ],
  en: [
    { id:1, name:'Aziz Karimov', role:'Food Critic', platform:'Google', rating:5, date:'November 2024', text:"The Fuoco Nero is a revelation. That charcoal crust combined with smoked chicken is pure genius. Aliya Abi has completely transformed Termiz's dining scene." },
    { id:2, name:'Malika Yusupova', role:'Restaurant Blogger', platform:'Yandex', rating:5, date:'October 2024', text:"I've eaten at premium restaurants across Uzbekistan, but Aliya Abi offers something truly special — the atmosphere, food, and service all work in perfect harmony." },
    { id:3, name:'Bobur Toshmatov', role:'Regular Guest', platform:'Google', rating:5, date:'December 2024', text:"Every Friday evening we come here. The Gold Lemonade is absolutely addictive, and the Aliya Signature pizza is simply the best I've ever had." },
    { id:4, name:'Sarvinoz Rakhimova', role:'Event Planner', platform:'2GIS', rating:5, date:'September 2024', text:"Organized our company's anniversary dinner here. The team went above and beyond expectations. The open kitchen experience made the whole evening magical." },
  ],
}

export default function Reviews() {
  const { lang, t } = useLang()
  const [cur, setCur] = useState(0)
  const reviews = reviewsData[lang] || reviewsData.uz

  return (
    <section id="reviews" className="section-py" style={{ background:'#0F0A08' }}>
      <div className="container-main">
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'48px', flexWrap:'wrap', gap:'16px' }}>
          <div>
            <motion.p className="label" style={{ marginBottom:'12px' }} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>{t('reviews_tag')}</motion.p>
            <motion.h2 className="font-display" initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
              style={{ fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:700, lineHeight:1, letterSpacing:'-0.02em', color:'#F2EDE8' }}>
              {t('reviews_h1')}<br /><span style={{ color:'#C8922A' }}>{t('reviews_h2')}</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            {[-1,1].map(dir => (
              <button key={dir} onClick={() => setCur(p => (p+dir+reviews.length)%reviews.length)}
                style={{ width:'44px', height:'44px', display:'flex', alignItems:'center', justifyContent:'center', background:'none', border:'1px solid rgba(200,146,42,0.2)', color:'rgba(242,237,232,0.45)', cursor:'pointer', fontSize:'16px', transition:'all 0.3s', WebkitTapHighlightColor:'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#C8922A'; e.currentTarget.style.color='#C8922A' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(200,146,42,0.2)'; e.currentTarget.style.color='rgba(242,237,232,0.45)' }}>
                {dir===-1?'←':'→'}
              </button>
            ))}
            <span style={{ fontSize:'11px', color:'rgba(242,237,232,0.28)', fontFamily:'Inter' }}>{cur+1} / {reviews.length}</span>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={`${lang}-${cur}`}
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-14 }}
            transition={{ duration:0.4, ease:[0.16,1,0.3,1] }}
            style={{ padding:'clamp(20px,4vw,56px)', background:'#1A120C', border:'1px solid rgba(200,146,42,0.12)' }}>
            <div className="font-display" style={{ fontSize:'5rem', color:'rgba(200,146,42,0.15)', lineHeight:0.7, fontWeight:700, marginBottom:'24px' }}>"</div>
            <p className="font-display" style={{ fontSize:'clamp(1rem,2.2vw,1.4rem)', color:'rgba(242,237,232,0.82)', lineHeight:1.65, fontWeight:400, fontStyle:'italic', maxWidth:'820px', marginBottom:'36px' }}>
              {reviews[cur].text}
            </p>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'14px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
                <div className="font-display" style={{ width:'44px', height:'44px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(200,146,42,0.1)', border:'1px solid rgba(200,146,42,0.22)', color:'#C8922A', fontSize:'1rem', fontWeight:700 }}>
                  {reviews[cur].name[0]}
                </div>
                <div>
                  <p style={{ fontSize:'14px', fontWeight:500, color:'#F2EDE8' }}>{reviews[cur].name}</p>
                  <p style={{ fontSize:'11px', color:'rgba(242,237,232,0.32)', marginTop:'2px' }}>{reviews[cur].role} · {reviews[cur].date}</p>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <div style={{ display:'flex', gap:'2px' }}>
                  {Array(reviews[cur].rating).fill(0).map((_,i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C8922A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <span style={{ fontSize:'11px', color:'rgba(242,237,232,0.28)', letterSpacing:'1px' }}>via {reviews[cur].platform}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display:'flex', justifyContent:'center', gap:'6px', marginTop:'22px' }}>
          {reviews.map((_,i) => (
            <button key={i} onClick={() => setCur(i)}
              style={{ height:'3px', width:i===cur?'26px':'7px', background:i===cur?'#C8922A':'rgba(242,237,232,0.2)', border:'none', cursor:'none', transition:'all 0.3s ease' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
