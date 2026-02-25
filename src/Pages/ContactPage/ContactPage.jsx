import React from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to help! Reach out to us anytime and we'll get back to you as soon as possible.
        </p>
      </section>

      <div className={styles.content}>
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Send us a message</h2>
          
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number (optional)</label>
              <input type="tel" id="phone" name="phone" placeholder="+20 1XX XXX XXXX" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Inquiry about..." />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="6" required placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </section>

        <section className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+20 100 123 467</p>
                <p>(Available 10 AM – 10 PM)</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>💬</span>
              <div>
                <h3>WhatsApp</h3>
                <p>+20 100 123 45617</p>
                <a href="https://wa.me/201001234567" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>Email</h3>
                <p>support@yourstore.com</p>
                <p>We'll reply within 24 hours</p>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <h3>Our Location (if you want to visit)</h3>
            <div className={styles.mapPlaceholder}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d30.123456789!3d31.03456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAyJzA0LjQiTiAzMMKwMDcnMjQuNiJF!5e0!3m2!1sen!2seg!4v1699999999999"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}