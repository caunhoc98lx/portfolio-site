import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

interface AboutText {
  intro: string;
  experience: string;
}

const mobileText: AboutText = {
  intro:
    'Hey there! I\'m Tran Hien, a Full Stack Developer passionate about coding website',
  experience:
    'Currently pursuing B.Tech at FPT, I\'ve built scalable architectures at Apollo Tyres R&D, supporting 200+ concurrent simulations with 40% performance boost.',
};

const desktopText: AboutText = {
  intro:
    'Hey there! I\'m Tran Hien, a Full Stack Developer. I specialize in building scalable infrastructures, optimizing CI/CD pipelines, and integrating ML systems into robust production environments.',
  experience:
    'Currently pursuing a B.Tech in FPT, I bring hands-on experience with platforms across the BE and FE. At Apollo Tyres R&D, I built a scalable backend architecture using Django and PostgreSQL to support 200+ concurrent simulations, increasing performance by 40%. I also automated simulation task queues and delivered real-time dashboards with Chart.js for 300+ engineering projects. I\'ve deployed cloud-native applications using Docker, Kubernetes, and serverless technologies like Vercel and AWS Lambda. My projects include an NLP-to-SQL Converter, and FlaskPost, a mass mailer SaaS with serverless backend that cut infrastructure costs while boosting engagement.',
};

const technologies = [
  'Docker',
  'Kubernetes',
  'FastAPI',
  'Azure',
  'PostgreSQL',
  'React.js'
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
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {technologies.map((tech) => (
              <li key={tech} className="about-grid-info-list-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwE6eqc3_Y8bdjwTeZ3fx16OpUccQ6dyakw&s"
              alt="Tran Hien - DevOps & Full Stack Developer"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg"
              aria-label="Profile picture of Tran Hien"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
