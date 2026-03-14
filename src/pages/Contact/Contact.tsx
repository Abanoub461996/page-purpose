import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './Contact.module.css';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../components/SectionLabel/SectionLabel';
import { PPButton } from '../../components/PPButton/PPButton';

const FORMSUBMIT_TOKEN = import.meta.env.VITE_FORMSUBMIT_TOKEN;

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!FORMSUBMIT_TOKEN) {
      setSubmitError('Form is not configured yet. Please set VITE_FORMSUBMIT_TOKEN and try again.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_TOKEN)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New contact form submission from ${name || 'website visitor'}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <AnimatedSection>
            <SectionLabel>Contact</SectionLabel>
            <h1 className={styles.heroTitle}>Let's start a conversation.</h1>
            <p className={styles.heroSub}>
              Tell us about your team and where you're headed. We'll take it from there.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <AnimatedSection>
            {submitted ? (
              <div className={styles.successMessage}>
                <h2 className={styles.successTitle}>Thank you.</h2>
                <p className={styles.successText}>We've received your message and will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.fieldInput}
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.fieldInput}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.fieldTextarea}
                    placeholder="Tell us about your team size, current challenges, and what you're looking for..."
                    required
                  />
                </div>

                {submitError && <p className={styles.errorText}>{submitError}</p>}

                <div className={styles.submitRow}>
                  <PPButton variant="primary" size="large" type="submit">
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </PPButton>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Info */}
      <section className={styles.info}>
        <div className={styles.infoInner}>
          <AnimatedSection>
            <div className={styles.infoBlock}>
              <div className={styles.infoTitle}>Location</div>
              <div className={styles.infoText}>Dubai, UAE</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className={styles.infoBlock}>
              <div className={styles.infoTitle}>Response Time</div>
              <div className={styles.infoText}>Within 48 hours</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className={styles.infoBlock}>
              <div className={styles.infoTitle}>Availability</div>
              <div className={styles.infoText}>Currently accepting new clients</div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};
