import './scss/globals.css';
import './scss/index.scss';

import { Suspense, useEffect, useState } from "react"
import Navbar from "./components/common/Layout";
import Loader from "./components/common/Loader";
import SocialIcons from './components/sections/SocialIcons';
import Email from './components/sections/Email';
import Banner from './components/sections/Banner';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import OtherProjects from './components/sections/OtherProjects';
import Contact from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  //const [isMobile, setIsMobile] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  useEffect(() => {
    handleLoaderLoaded()

  }, [])

  return (
    <div className="app">
      <h2>this is a portfolio site</h2>
      {showContent && (
        <>
          <Navbar />
          <Suspense fallback={<div className="loading-icon">Loading...</div>}>
            <SocialIcons />
            <Email />
          </Suspense>
          <main style={{ paddingTop: '60px' }} className="fade-in">
            <Banner />
            <Suspense fallback={<div className="section-loader">Loading about section...</div>}>
              <About />
            </Suspense>
            <Suspense
              fallback={<div className="section-loader">Loading experience section...</div>}
            >
              <Experience />
            </Suspense>
            <Suspense fallback={<div className="section-loader">Loading projects section...</div>}>
              <Projects />
              <OtherProjects />
            </Suspense>
            <Suspense fallback={<div className="section-loader">Loading contact section...</div>}>
              <Contact />
            </Suspense>
          </main>
          {/* <Suspense fallback={<div className="footer-loader">Loading footer...</div>}>
            <Footer />
          </Suspense> */}
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default App
