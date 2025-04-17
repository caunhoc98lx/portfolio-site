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
import Footer from './components/Footer';
import BubbleCursor from './components/common/BubbleCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    const links = document.querySelectorAll('nav > .hover-this');

    const animateit = () => {
      if (isMobile) return; // Skip animation on mobile
    };

    const editCursor = () => {
      if (isMobile) return; // Skip cursor update on mobile
    };

    const handleMouseDown = () => {
      if (isMobile) return; // Skip click animation on mobile
    };

    if (!isMobile) {
      // Only add event listeners on desktop
      links.forEach((link) => link.addEventListener('mousemove', animateit));
      links.forEach((link) => link.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);
      window.addEventListener('mousedown', handleMouseDown);
    }

    // Add fade-in effect
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('fade-in');
      setTimeout(() => {
        mainContent.classList.add('show');
      }, 100);
    }

    return () => {
      // Clean up event listeners
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        links.forEach((link) => link.removeEventListener('mousemove', animateit));
        links.forEach((link) => link.removeEventListener('mouseleave', animateit));
        window.removeEventListener('mousemove', editCursor);
        window.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [isMobile]);


  return (
    <div className='dark'>
      <BubbleCursor />
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
            <Suspense fallback={<div className="footer-loader">Loading footer...</div>}>
              <Footer />
            </Suspense>
          </>
        )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default App
