import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Income Insurance',
      role: 'Full-Stack Developer',
      start: 'Feb 2023',
      end: 'Feb 2024',
      shortDescription: [
        'Development for BE service API of Income company and UI for create voucher. Providing the solution for creating the voucher to Income.',
      ],
      responsibilities: [
        'Create structure of project source code using NestJS framework 9.3 and NextJS version 12',
        'Design relational database using MySQL, discuss and get approval from customer.',
        'Develop and manage server-side components.',
        'Handle both backend and frontend.',
        'Identify and implement data storage solutions with AWS S3.',
        'Perform diagnostic tests, fix bugs, and provide technical support to users'
      ]
    },
    {
      name: 'Insurance Project',
      role: 'Senior Developer',
      start: 'Nov 2022',
      end: 'Feb 2023',
      shortDescription: [
        'Develop a landing page for Insurance Company in HongKong',
      ],
      responsibilities: [
        'Develop new features.',
        'Fix bug and give solution if any',
        'Optimize code: Performance, State management, Scalability.',
        'Handle both backend and frontend.',
        'Communication with customer.'
      ]
    },
    {
      name: 'DoH',
      role: 'Senior Developer',
      start: 'February 2024',
      end: 'May 2024',
      shortDescription: [
        'Health care: Web application and Web engineering. Create responsive admin dashboard using ReactJS.',
      ],
      responsibilities: [
        'Develop new features: Use React 17 and Ant design to create responsive admin dashboard.',
        'Optimize code: Performance, State management, Scalability.',
        'Handle both backend and frontend.',
        'Communication with customer.'
      ]
    },
    {
      name: 'Application MBank',
      role: 'Developer',               
      start: 'Jun 2020',
      end: 'May 2021',
      shortDescription: [
        'Develop a management system for bank services and export data',
      ],
      responsibilities: [
        'Develop features using ReactJs: use bootstrap css and Material UI to create dashboard manage user and role, permission define who can assess to the system.',
        'Export data to file word: write the query to get all information in database and bind it to file word handle by .Net Core.',
        'Problem solving if any',
        'Optimize code: Use lazy loading, Performance, State management, Scalability'
      ]
    },
    {
      name: 'Services Online HaNoi',
      role: 'Developer',
      start: 'Apr 2019',
      end: 'May 2020',
      shortDescription: [
        'This is the web that helps people register documents without going to the office',
      ],
      responsibilities: [
        'Develop wire frame following the requirement',
        'Develop using ReactJS',
        'Problem solving if any',
        'Optimize code: Use lazy loading, Performance, State management, Scalability'
      ]
    },

    {
      name: 'Application Education',
      role: 'Developer Intern',
      start: 'May 2018',
      end: 'Mar 2019',
      shortDescription: [
        'This is the web that helps people student management, class schedules, grades, enrollment registration online.',
      ],
      responsibilities: [
        'Develop features using ReactJS',
        'Optimize code: Performance, State management, Scalability'
      ]
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '80px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${index === selected ? 'exp-slider-item-selected' : ''}`}
              onClick={() => setSelected(index)}
              key={`${experience.name}-${index}`}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <a target="_blank" rel="noopener noreferrer" className="link">
                  {experiences[selected].name}
                </a>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
            <h4 className='exp-details-title'>Responsibilities</h4>
            <ul className="exp-details-list">
              {experiences[selected].responsibilities.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
