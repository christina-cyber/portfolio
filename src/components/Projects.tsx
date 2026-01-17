"use client";

import styles from './Projects.module.css';

interface Project {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing products, orders, and analytics. Built with performance in mind.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'Node.js'],
        liveUrl: 'https://farm-to-concumer-b2c-ecommerce-app.vercel.app/login', // Placeholder
        githubUrl: 'https://github.com/christina-cyber/farm-to-concumer-b2c-ecommerce-app',
    },

    {
        title: 'GHL Funnel',
        description: 'A landing page for a GHL funnel. Built with performance in mind.',
        tech: ['GHL'],
        liveUrl: 'https://app.gohighlevel.com/v2/preview/8MSmzKAOYJ0ZGtZClh05', // Placeholder
    },
];

const FolderIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.folderIcon}
    >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const GithubIcon = () => (
    <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Projects = () => {
    const handleCardClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.heading}>Some Things I've Built</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onClick={() => handleCardClick(project.liveUrl)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCardClick(project.liveUrl);
                            }
                        }}
                    >
                        <div className={styles.cardHeader}>
                            <FolderIcon />
                            <div className={styles.externalLinks}>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent card click
                                        aria-label="GitHub Link"
                                    >
                                        <GithubIcon />
                                    </a>
                                )}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} // Prevent card click
                                    aria-label="External Link"
                                >
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <ul className={styles.techList}>
                                {project.tech.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
