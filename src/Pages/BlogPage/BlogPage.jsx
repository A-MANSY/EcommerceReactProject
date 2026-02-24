import React from 'react';
import styles from './BlogPage.module.css';

const placeholderPosts = [
  {
    id: 1,
    title: "Best Smartphones Under 15,000 EGP in 2026",
    excerpt: "Discover the top-performing phones that offer great value, cameras, and battery life without breaking the bank.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Phone Case for Your Device",
    excerpt: "A complete guide to materials, protection levels, styles, and which cases actually protect your phone.",
    date: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=800&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "iPhone 16 vs Galaxy S26 – Which One Should You Buy?",
    excerpt: "In-depth comparison of design, performance, camera, battery, software updates, and real-world usage.",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Tips to Extend Your Smartphone Battery Life in 2026",
    excerpt: "Practical habits and settings that can help your phone last longer on a single charge.",
    date: "December 20, 2025",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=800&auto=format&fit=crop",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Tech Blog</h1>
          <p className={styles.heroSubtitle}>
            Latest news, reviews, buying guides, comparisons, and tips about smartphones, accessories, laptops & more
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.grid}>
          {placeholderPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <time className={styles.date}>{post.date}</time>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span className={styles.readTime}>{post.readTime}</span>
                  <a href="#" className={styles.readMore}>
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Load more / Pagination placeholder */}
      <div className={styles.pagination}>
        <button className={styles.loadMore}>Load More Articles</button>
      </div>
    </div>
  );
}