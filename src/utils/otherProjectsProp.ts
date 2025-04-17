

export type Repository = {
    id: number;
    name: string;
    description: string;
    language: string[];
    html_url: string;
    homepage: string;
    updated_at: string; // ISO date string
};
const repositories: Repository[] = [
    {
        id: 1,
        name: 'GitHub Ecommerce Website',
        description:
            'This is Ecommerce website. But it still in progress.',
        language: ['Node.Js', 'GitHub', 'WakaTime', 'Netlify'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://github.com/caunhoc98lx?tab=repositories',
        updated_at: '2025-01-01T00:00:00Z',
    },
    {
        id: 2,
        name: 'FlaskPost',
        description:
            'FlaskPost is a user-friendly web app for sending personalized mass emails, built with FastAPI.',
        language: ['FastAPI', 'FastMail', 'Jinja2', 'REST API'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://github.com/caunhoc98lx?tab=repositories',
        updated_at: '2023-02-01T00:00:00Z',
    },
    {
        id: 3,
        name: 'CompileVortex',
        description:
            'CompileVortex is a web-based code editor supporting over 40 programming languages with customizable themes.',
        language: ['React.js', 'TypeScript', 'Axios', 'Tailwind CSS'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://github.com/caunhoc98lx?tab=repositories',
        updated_at: '2023-03-01T00:00:00Z',
    },
    {
        id: 4,
        name: 'PayloadMaster',
        description:
            'PayloadMaster is a bash script for creating Metasploit payloads, setting up listeners, and exploiting Windows targets.',
        language: ['Bash', 'Metasploit'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://github.com/caunhoc98lx?tab=repositories',
        updated_at: '2023-04-01T00:00:00Z',
    },
    {
        id: 5,
        name: 'QuickMark',
        description:
            'QuickMark Preview is a web app for writing and previewing Markdown in real-time, built with React.',
        language: ['React', 'React Markdown', 'Remark-GFM', 'ReHype-RAW', 'Tailwind CSS'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://github.com/caunhoc98lx?tab=repositories',
        updated_at: '2023-05-01T00:00:00Z',
    },
    {
        id: 6,
        name: 'Portfolio',
        description:
            'My personal portfolio website built using Next.js, showcasing projects, skills, and experience in software engineering.',
        language: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
        html_url: 'https://github.com/caunhoc98lx?tab=repositories',
        homepage: 'https://caunhoc98lx.github.io/portfolio-site/',
        updated_at: '2025-06-01T00:00:00Z',
    },
];

export default repositories;