import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <span className={styles.greeting}>Hi, my name is</span>
            <h1 className={styles.title}>Krishtina Khatiwada</h1>
            <h2 className={styles.subtitle}>
                I build accessible, pixel-perfect, and performant web experiences.
            </h2>
            <div className={styles.ctaGroup}>
                <a href="#projects" className={styles.primaryBtn}>
                    Check out my work
                </a>
            </div>
        </section>
    );
};

export default Hero;
