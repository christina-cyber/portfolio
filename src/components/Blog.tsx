"use client";

import { useState, useEffect } from 'react';
import styles from './Blog.module.css';

interface BlogPost {
    title: string;
    pubDate: string;
    link: string;
    description: string; // Sometimes HTML, might need stripping
    content: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Using a general tech tag from Medium to get some relevant content for demo
                // In real use, user puts their username e.g., @username
                const RSS_URL = "https://medium.com/feed/@krishtinakhatiwada60";
                const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`);
                const data = await res.json();

                if (data.items) {
                    setPosts(data.items.slice(0, 3)); // Limit to 3
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Helper to strip HTML tags from description
    const stripHtml = (html: string) => {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    return (
        <section id="blog" className={styles.blogSection}>
            <h2 className={styles.heading}>Latest Writings</h2>

            <div className={styles.postsList}>
                {loading && (
                    <>
                        <div className={styles.skeletonCard}>
                            <div className={styles.skeletonTitle}></div>
                            <div className={styles.skeletonDate}></div>
                            <div className={styles.skeletonText}></div>
                            <div className={styles.skeletonText}></div>
                        </div>
                        <div className={styles.skeletonCard}>
                            <div className={styles.skeletonTitle}></div>
                            <div className={styles.skeletonDate}></div>
                            <div className={styles.skeletonText}></div>
                            <div className={styles.skeletonText}></div>
                        </div>
                    </>
                )}

                {error && <p>Failed to load blog posts.</p>}

                {!loading && !error && posts.map((post) => (
                    <article key={post.link} className={styles.postCard}>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <div className={styles.postDate}>{formatDate(post.pubDate)}</div>
                            <p className={styles.postExcerpt}>
                                {stripHtml(post.description).substring(0, 150)}...
                            </p>
                            <span className={styles.readMore}>Read Article</span>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;
