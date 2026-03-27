import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.content}>
                <span className={styles.greeting}>
                    <span className={styles.sparkle}>✨</span> 
                    Available for new opportunities
                </span>
                
                <h1 className={styles.title}>
                    I build <span className={styles.highlight}>fast, beautiful</span> web apps 
                    that grow your business.
                </h1>
                
                <h2 className={styles.subtitle}>
                    Hi, I'm Krishtina Khatiwada — a Full Stack Developer & UI/UX Designer translating complex problems into elegant, high-performing digital solutions.
                </h2>
                
                <div className={styles.ctaGroup}>
                    <a href="#projects" className={styles.primaryBtn}>
                        View Projects
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Let's Talk
                    </a>
                </div>
            </div>
            
            {/* Optional: Add a subtle animated background element or geometric shape here in the future */}
            <div className={styles.glowBlob}></div>
        </section>
    );
};

export default Hero;
