import { useState } from 'react'
import useSmoothScroll from './hooks/useSmoothScroll'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Featured from './components/Featured/Featured'
import Gallery from './components/Gallery/Gallery'
import Experience from './components/Experience/Experience'
import Reviews from './components/Reviews/Reviews'
import Reserve from './components/Reserve/Reserve'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Loader */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Main site */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Featured />
          <Gallery />
          <Experience />
          <Reviews />
          <Reserve />
          <Location />
        </main>
        <Footer />
      </div>
    </>
  )
}
