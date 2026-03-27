"use client";

import { useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './Contact.module.css';

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);
        
        // Add your Web3forms access key here. 
        // Get one for free at https://web3forms.com/
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                target.reset(); // Clear the form
            } else {
                console.error("Form submission error", data);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Form submission fetch error", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        }
    };

    return (
        <section 
            id="contact" 
            ref={ref} 
            className={`${styles.contactSection} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <div className={styles.sectionHeader}>
                <h2 className={styles.heading}>05. Get In Touch</h2>
                <div className={styles.line}></div>
            </div>
            
            <div className={styles.contentWrapper}>
                <div className={styles.infoColumn}>
                    <h3 className={styles.infoTitle}>Let's build something amazing together.</h3>
                    <p className={styles.subText}>
                        I'm currently available for freelance projects and open to full-time roles. 
                        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    
                    <div className={styles.availabilityBox}>
                        <div className={styles.pulseDot}></div>
                        <div>
                            <div className={styles.statusText}>Available for new projects</div>
                            <div className={styles.timezone}>Working overlap with US, UK & AU timezones</div>
                        </div>
                    </div>
                    
                    <div className={styles.socialLinks}>
                        <a href="mailto:hello@example.com" className={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            hello@example.com
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </a>
                        <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            Hire me on Upwork
                        </a>
                    </div>
                </div>
                
                <div className={styles.formColumn}>
                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className={styles.inputGroup}>
                            <input type="text" name="name" className={styles.input} placeholder="Your Name" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" name="email" className={styles.input} placeholder="Your Email Address" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" name="subject" className={styles.input} placeholder="Subject or Project Details" />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea name="message" className={styles.textarea} placeholder="How can I help you?" required></textarea>
                        </div>
                        
                        {/* Hidden subject field for the email title */}
                        <input type="hidden" name="from_name" value="Portfolio Website Notification" />
                        
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
                        </button>
                        
                        {submitStatus === "success" && (
                            <p className={styles.successMessage}>Message sent successfully! I'll be in touch soon.</p>
                        )}
                        {submitStatus === "error" && (
                            <p className={styles.errorMessage}>Oops! Something went wrong. Please try emailing me directly.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
