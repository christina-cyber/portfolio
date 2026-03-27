"use client";

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './About.module.css';

const About = () => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.2,
    });

    const skills = [
        'React & Next.js',
        'TypeScript',
        'Node.js & Express',
        'PostgreSQL & Supabase',
        'UI/UX Prototyping',
        'GoHighLevel Automation',
    ];

    return (
        <section
            id="about"
            ref={ref}
            className={`${styles.aboutSection} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <div className={styles.sectionHeader}>
                <h2 className={styles.heading}>01. About Me</h2>
                <div className={styles.line}></div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        I'm a Full Stack Developer based in Nepal, specializing in building exceptional digital experiences. 
                        My journey began with a curiosity for how the web works, which quickly evolved into a passion 
                        for engineering scalable applications and intuitive user interfaces.
                    </p>
                    <p>
                        Today, I partner with businesses globally—from innovative startups in the US to established agencies in the UK and Australia—delivering 
                        high-quality code and design that drives real business value. I don't just write code; I solve problems.
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className={styles.skillsList}>
                        {skills.map((skill) => (
                            <li key={skill} className={styles.skillItem}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageOverlay}></div>
                        {/* Add your professional headshot here */}
                        <div className={styles.imagePlaceholder}>
                            <span>Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
