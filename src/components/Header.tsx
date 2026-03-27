"use client";

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent body scroll when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
             <nav className={styles.nav}>
                <div className={styles.logoArea}>
                    <a href="#home" className={styles.logo} aria-label="Home">
                        Dev<span>Folio</span>
                    </a>
                    <div className={styles.availabilityBadge}>
                        <div className={styles.pulseDot}></div>
                        Available for Work (EST/GMT hours)
                    </div>
                </div>

                <div className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={styles.navLink}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className={styles.resumeBtn} onClick={toggleMenu}>
                            Hire Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
