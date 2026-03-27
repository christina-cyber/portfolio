"use client";

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './Services.module.css';

const Services = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const servicesList = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and accessible websites that provide an exceptional user experience across all devices.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        {
            title: "Full Stack & Backend",
            description: "Architecting robust backend systems, APIs, and databases using Node.js, Express, and PostgreSQL.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            )
        },
        {
            title: "UI/UX Design",
            description: "Translating business goals into intuitive, visually stunning interfaces with a focus on conversion and usability.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
            )
        }
    ];

    return (
        <section 
            id="services" 
            ref={ref} 
            className={`${styles.servicesSection} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <div className={styles.sectionHeader}>
                <h2 className={styles.heading}>02. What I Do</h2>
                <div className={styles.line}></div>
            </div>
            
            <div className={styles.grid}>
                {servicesList.map((service, index) => (
                    <div 
                        key={index} 
                        className={styles.card}
                        style={{ transitionDelay: `${index * 0.15}s` }}
                    >
                        <div className={styles.iconWrapper}>
                            {service.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardText}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
