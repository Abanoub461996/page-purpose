import styles from './About.module.css';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../components/SectionLabel/SectionLabel';
import { PPButton } from '../../components/PPButton/PPButton';
import { RevealImage } from '../../components/RevealImage/RevealImage';

const values = [
  { title: 'Structure Over Speed', desc: 'We believe every hire should be backed by a defined role, clear expectations, and measurable outcomes.' },
  { title: 'People First', desc: 'Culture isn\'t a perk — it\'s infrastructure. We help founders build environments where teams thrive.' },
  { title: 'Intentional Growth', desc: 'Scaling should be purposeful. We help you grow the right team at the right time with the right structure.' },
];

export const About = () => {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <AnimatedSection>
            <div className={styles.heroContent}>
              <SectionLabel>About</SectionLabel>
              <h1 className={styles.heroTitle}>Lainey Marindo</h1>
              <span className={styles.heroRole}>Strategic Workforce Advisor to Founder-Led Businesses</span>
              <p className={styles.heroText}>
                Lainey Marindo is a Strategic Workforce Consultant with 15+ years of experience in creative recruitment and team structuring. Her background includes building and strengthening internal team frameworks within high-performance media environments.
              </p>
              <p className={styles.heroText}>
                Her work focuses on role clarity, KPI alignment, compensation calibration, and structured hiring systems that support sustainable growth.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <RevealImage
              src="/images/founder.jpg"
              alt="Lainey Marindo"
              className={styles.heroImage}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <AnimatedSection>
            <SectionLabel>The Story</SectionLabel>
            <h2 className={styles.storyTitle}>Why Paige & Purpose Exists</h2>
            <p className={styles.storyText}>
              Paige & Purpose was founded after years of working alongside founders during high-growth phases, where it became clear that most hiring problems are not talent problems — they are structural ones.
            </p>
            <p className={styles.storyText}>
              When roles are undefined, expectations unclear, and culture is left to chance, even the best hires struggle. We exist to solve this at the root — by building the hiring infrastructure that enables great people to do great work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <AnimatedSection>
            <SectionLabel>Principles</SectionLabel>
            <h2 className={styles.valuesTitle}>How We Think</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <div key={i} className={styles.value}>
                  <div className={styles.valueTitle}>{v.title}</div>
                  <div className={styles.valueDesc}>{v.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <AnimatedSection>
            <h2 className={styles.ctaTitle}>Ready to build your team with intention?</h2>
            <PPButton to="/contact" variant="primary" size="large">
              Schedule a Consultation →
            </PPButton>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};
