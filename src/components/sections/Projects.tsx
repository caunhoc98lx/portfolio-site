import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import weddingImage from '../../assets/images/wedding-ceremony.jpg'
import hangingOutWidthFriends from '../../assets/images/couple-travel.jpg'

function Projects() {
  const projectsData = [
    {
      image: weddingImage,
      projectName: 'Wedding Ceremony Website',
      projectDescription:
        'Welcome to our wedding website! Here you’ll find all the details about our special day — from our love story and event schedule to RSVP info, travel tips, and more. We can’t wait to celebrate with you!',
      projectTech: ['Reactjs', 'Java', 'mongodb', 'Altair'],
      projectExternalLinks: {
        github: 'https://github.com/caunhoc98lx?tab=repositories',
        externalLink: 'https://github.com/caunhoc98lx?tab=repositories',
      },
    },
    {
      image: hangingOutWidthFriends,
      projectName: 'Hanging out with friends with planer',
      projectDescription:
        'A FastAPI-powered mass email platform featuring SMTP configuration, CSV recipient management, and HTML template customization with live preview functionality.',
      projectTech: ['ReactJS', 'NestJS', 'Postgres'],
      projectExternalLinks: {
        github: 'https://github.com/caunhoc98lx?tab=repositories',
        externalLink: 'https://github.com/caunhoc98lx?tab=repositories',
      },
    }
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <img src={image} loading="lazy" alt={projectName} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                     
                        <Github />
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      
                        <ExternalLink />
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
