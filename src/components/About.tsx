"use client";

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './About.module.css';

const About = () => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.2,
    });

    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'GoHighLevel',
        'PostgreSQL',
        'AWS',
    ];

    return (
        <section
            id="about"
            ref={ref}
            className={`${styles.aboutSection} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <h2 className={styles.heading}>About Me</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        Hello! My name is Krishtina Khatiwada and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes —
                        turns out hacking together HTML & CSS was exciting!
                    </p>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up,
                        and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences
                        for a variety of clients.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className={styles.skillsList}>
                        {skills.map((skill) => (
                            <li key={skill} className={styles.skillItem}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for profile image - could be a Next Image */}
                    {/* <img src="/profile.jpg" alt="Profile" /> */}
                </div>
            </div>
        </section>
    );
};

export default About;
