import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

import personalImage from  "../../assets/images/image-2.jpg"

interface AboutText {
  intro: string;
  experience: string;
}

const mobileText: AboutText = {
  intro:
    'Hey there! I\'m Tran Hien, a Full Stack Developer passionate about coding website',
  experience:
    'Currently pursuing B.Tech at FPT, I\'m a Full Stack Developer with over 5 years of experience building modern web applications and scalable backend systems.',
};

const desktopText: AboutText = {
  intro:
    'Hey there! I\'m Tran Hien, a Full Stack Developer. I specialize in JavaScript frameworks like React.js and Vue.js for the frontend, and have strong backend experience with Node.js and .NET. I\'ve worked extensively with SPA architecture, leveraging tools like Redux, Axios, and i18n for rich user experiences. My UI work includes using Bootstrap, Material-UI, and Ant Design, delivering responsive, intuitive designs.',
  experience:
    'Currently pursuing a B.Tech in FPT, I bring hands-on experience with platforms across the BE and FE.  I enjoy diving into new technologies and quickly applying them to real-world projects.',
};

const technologiesFE = [
  'React.js', 
  'Vue.js', 
  'HTML5', 
  'CSS3', 
  'JavaScript'
];

const technologiesBE = [
  'Node.js',
  'Kubernetes',
  'Strapi',
  'PostgreSQL',
  "Nest.js",
  "Express.js"
];

const variants = {
  visible: { opacity: 1, y: -50 },
  hidden: { opacity: 0, y: 0 },
};

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <motion.div
      className="about pt-[150px] md:pt-[250px]"
      id="about"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed indent-4">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are my Tech Stack I&apos;ve been working:
          </p>

          <p className="about-grid-info-text text-justify">
            Backend
          </p>
          <ul className="about-grid-info-list">
            {technologiesBE.map((tech) => (
              <li key={tech} className="about-grid-info-list-item">
              <h4>{tech}</h4>
            </li>
            ))}
          </ul>

          <p className="about-grid-info-text text-justify">
            Frontend
          </p>
          <ul className="about-grid-info-list">
            {technologiesFE.map((tech) => (
              <li key={tech} className="about-grid-info-list-item">
                <h4>{tech}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <img
              src= {personalImage}
              alt="Tran Hien - Full Stack Developer"
              className="about-grid-photo-container-personal"
              aria-label="Profile picture of Tran Hien"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
