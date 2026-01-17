import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <p className={styles.subText}>
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                Detailed project inquiries are always welcome.
            </p>
            <a href="mailto:krishtinakhatiwada60@gmail.com" className={styles.contactBtn}>
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
