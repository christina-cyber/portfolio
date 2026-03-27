"use client";

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const testimonials = [
        {
            quote: "Krishtina is an exceptional developer who deeply understands both the technical challenge and the business goal. She delivered our MVP ahead of schedule and the code quality was impeccable.",
            author: "Sarah Jenkins",
            role: "Founder, Techify",
            initial: "S"
        },
        {
            quote: "Working with a remote freelancer can be hit or miss, but working with Krishtina felt like having a senior engineer right in our office. Her communication is perfect, and her eye for UI is brilliant.",
            author: "David Chen",
            role: "Director of Product, Nexus",
            initial: "D"
        },
        {
            quote: "We hired Krishtina to salvage a failing GoHighLevel integration. Not only did she fix the core issues in days, but she optimized the entire funnel flow.",
            author: "Marcus Rodriguez",
            role: "Marketing Agency Owner",
            initial: "M"
        }
    ];

    const QuoteIcon = () => (
        <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    );

    return (
        <section 
            id="testimonials" 
            ref={ref} 
            className={`${styles.testimonialsSection} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <div className={styles.sectionHeader}>
                <h2 className={styles.heading}>04. Client Voices</h2>
                <div className={styles.line}></div>
            </div>
            
            <div className={styles.grid}>
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className={styles.card}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <QuoteIcon />
                        <p className={styles.testimonialText}>"{testimonial.quote}"</p>
                        <div className={styles.authorContainer}>
                            <div className={styles.avatar}>{testimonial.initial}</div>
                            <div className={styles.authorInfo}>
                                <span className={styles.authorName}>{testimonial.author}</span>
                                <span className={styles.authorRole}>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
