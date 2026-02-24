import React from 'react';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Store</h1>
          <p className={styles.heroSubtitle}>
            Your trusted destination for the latest smartphones, accessories, laptops, and smart devices in Egypt
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p className={styles.paragraph}>
            We started our journey in the world of e-commerce with one simple goal: to bring the latest electronics to every home in Egypt at competitive prices, with guaranteed quality and excellent customer service.
          </p>
          <p className={styles.paragraph}>
            Today, we offer a wide range of brand-new and excellent-condition used smartphones, original accessories, gaming & work laptops, headphones, smartwatches, wireless chargers, cases, screen protectors, power banks, and everything tech-related.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Shop With Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚚</div>
            <h3>Fast Shipping</h3>
            <p>Delivery within 1–4 days across Egypt</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3>Warranty & Returns</h3>
            <p>Real warranty + 14-day return policy</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Competitive Prices</h3>
            <p>Daily offers and prices often lower than the market</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📞</div>
            <h3>Continuous Support</h3>
            <p>Customer service team available daily to answer your questions</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className={styles.visionSection}>
        <h2 className={styles.visionTitle}>Our Vision</h2>
        <p className={styles.visionText}>
          To become the most trusted and first-choice online store for all things tech and electronics in Egypt,
          delivering the perfect device to every home at the right quality and price.
        </p>
      </section>

      {/* Contact Hint */}
      <section className={styles.contactHint}>
        <p>Have any questions? Feel free to reach out anytime</p>
        <a href="/contact" className={styles.contactLink}>
          Go to Contact Page →
        </a>
      </section>
    </div>
  );
}