import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projectsData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jCa5pY_QUl8CWPXXxRGQ_jnYYtHSO_D6hw&s',
      projectName: 'NLP2SQL',
      projectLink: 'https://nlp2sql.streamlit.app/',
      projectDescription:
        'A natural language to SQL query converter that transforms text input into structured SQL queries for database execution, streamlining database interactions through intuitive language processing.',
      projectTech: ['Streamlit', 'Azure OpenAI', 'SQLite3', 'Altair'],
      projectExternalLinks: {
        github: 'https://github.com/tran-hien/NLP2SQL',
        externalLink: 'https://nlp2sql.streamlit.app/',
      },
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbNxyPHfjdzgfCtC4J8Zvh6jX9YvbQW3mmw&s',
      projectName: 'FlaskPost',
      projectLink: 'https://flask-post.vercel.app/',
      projectDescription:
        'A FastAPI-powered mass email platform featuring SMTP configuration, CSV recipient management, and HTML template customization with live preview functionality.',
      projectTech: ['FastAPI', 'REST API', 'Jinja2', 'Fast Mail'],
      projectExternalLinks: {
        github: 'https://github.com/tran-hien/FlaskPost',
        externalLink: 'https://github.com/tran-hien/FlaskPost',
      },
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qZndTrU-z_PAn_eHaq6U01mHGT0r7Pwmyg&s',
      projectName: 'Compile Vortex',
      projectLink: 'https://compile-vortex.vercel.app/',
      projectDescription:
        'A web-based code editor supporting 40+ programming languages with customizable themes and real-time compilation capabilities.',
      projectTech: ['React', 'Node.js', 'Judge0 Api', 'Microsoft Azure'],
      projectExternalLinks: {
        github: 'https://github.com/tran-hien/CompileVortex',
        externalLink: 'https://compile-vortex.vercel.app/',
      },
    },
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
            projectLink,
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
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
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
                      onClick={() => window.open(projectLink, '_blank')}
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
