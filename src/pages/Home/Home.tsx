import styles from './Home.module.css';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../components/SectionLabel/SectionLabel';
import { PPButton } from '../../components/PPButton/PPButton';
import { RevealImage } from '../../components/RevealImage/RevealImage';

const imagesBaseUrl = `${import.meta.env.BASE_URL}images/`;

const frameworkSteps = [
  { text: 'Identify the real business gap', icon: `${imagesBaseUrl}service-audit.png` },
  { text: 'Define role scope and accountability', icon: `${imagesBaseUrl}service-hiring.png` },
  { text: 'Align seniority and compensation', icon: `${imagesBaseUrl}service-stability.png` },
  { text: 'Conduct structured evaluation', icon: `${imagesBaseUrl}service-audit.png` },
  { text: 'Ensure performance alignment', icon: `${imagesBaseUrl}service-hiring.png` },
];

const services = [
  {
    title: 'Founder Team Audit',
    desc: 'Audit your current structure, role clarity, and hiring priorities before making new headcount decisions.',
    outcome: 'Strategic Hiring Clarity',
  },
  {
    title: 'Hiring Architecture System',
    desc: 'Build role scorecards, interview design, and decision criteria so every hire is intentional and measurable.',
    outcome: 'Structured Hiring Framework',
  },
  {
    title: 'Team Stability Program',
    desc: 'Strengthen retention, manager alignment, and performance systems to sustain growth after the hire.',
    outcome: 'Sustainable Team Performance',
  },
];

const stats = [
  '15+ Years Structuring Teams',
  'Workforce Planning & KPI Design',
  'Scaling Founder-Led Businesses',
  'High-Touch Advisory Model',
];

export const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <AnimatedSection direction="fade">
            <SectionLabel>Strategic Workforce Consulting</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h1 className={styles.heroTitle}>
              Building the infrastructure for your most valuable asset: Your people.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={300} direction="fade">
            <p className={styles.heroSub}>
              Fractional HR and culture strategy for businesses that lead with purpose.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={450} direction="fade">
            <div className={styles.heroCta}>
              <PPButton to="/contact" variant="primary" size="large">
                Schedule a Consultation
              </PPButton>
              <PPButton to="/services" variant="secondary" size="large">
                See How We Work
              </PPButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem */}
      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <AnimatedSection direction="left">
            <h2 className={styles.problemTitle}>
              Hiring Without Structure Slows Growth.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150} direction="right">
            <p className={styles.problemText}>
              Startups often hire under pressure. Roles are loosely defined, expectations misaligned, and performance metrics unclear. One misaligned hire can disrupt momentum, morale, and execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trusted By */}
      <section className={styles.trusted}>
        <div className={styles.trustedInner}>
          <AnimatedSection direction="fade">
            <div className={styles.trustedLabel}>Trusted by</div>
            <div className={styles.trustedLogos}>
              <img src={`${imagesBaseUrl}logo-bukhash.png`} alt="Bukhash Brothers" className={styles.trustedLogo} />
              <img src={`${imagesBaseUrl}logo-chalk.png`} alt="Chalk" className={styles.trustedLogo} />
              <img src={`${imagesBaseUrl}logo-abtalks.png`} alt="AB Talks" className={styles.trustedLogo} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Framework */}
      <section className={styles.framework}>
        <div className={styles.frameworkInner}>
          <AnimatedSection>
            <div className={styles.frameworkHeader}>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className={styles.frameworkTitle}>The Purpose-Led Placement Framework™</h2>
              <p className={styles.frameworkSub}>At Paige & Purpose, hiring begins with diagnosis — not job postings.</p>
            </div>
          </AnimatedSection>
          <div className={styles.steps}>
            {frameworkSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={styles.step}>
                  <img src={step.icon} alt="" className={styles.stepIconImg} />
                  <div className={styles.stepNumber}>0{i + 1}</div>
                  <div className={styles.stepTitle}>{step.text}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className={styles.servicesInner}>
          <AnimatedSection direction="left">
            <div className={styles.servicesHeader}>
              <SectionLabel>Services</SectionLabel>
              <h2 className={styles.servicesTitle}>Structured growth requires structured hiring.</h2>
              <p className={styles.servicesSub}>
                We focus on the systems behind the hire. Explore the three service tracks and see which one matches your stage.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.serviceSummaryGrid}>
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardContent}>
                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                    <p className={styles.serviceCardDesc}>{service.desc}</p>
                    <div className={styles.serviceCardOutcome}>
                      <span className={styles.outcomeLabel}>Outcome</span>
                      <span className={styles.outcomeValue}>{service.outcome}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} direction="fade">
            <div className={styles.servicesCta}>
              <PPButton to="/services" variant="secondary" size="large">
                View Full Service Details →
              </PPButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className={styles.aboutPreview}>
        <div className={styles.aboutInner}>
          <AnimatedSection direction="left">
            <RevealImage
              src={`${imagesBaseUrl}founder.jpg`}
              alt="Lainey Marindo, Founder"
              className={styles.aboutImage}
            />
          </AnimatedSection>
          <AnimatedSection delay={200} direction="right">
            <div className={styles.aboutContent}>
              <SectionLabel>About the Founder</SectionLabel>
              <h2 className={styles.aboutTitle}>Lainey Marindo</h2>
              <span className={styles.aboutRole}>Strategic Workforce Advisor to Founder-Led Businesses</span>
              <p className={styles.aboutText}>
                Lainey Marindo is a Strategic Workforce Consultant with 15+ years of experience in creative recruitment and team structuring. Her work focuses on role clarity, KPI alignment, compensation calibration, and structured hiring systems that support sustainable growth.
              </p>
              <PPButton to="/about" variant="secondary">Read Full Bio →</PPButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          <AnimatedSection direction="fade">
            <h2 className={styles.statsTitle}>Built on Structure. Measured by Alignment.</h2>
          </AnimatedSection>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} direction="up">
                <div className={styles.stat}>
                  <div className={styles.statLabel}>{stat}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <AnimatedSection>
            <h2 className={styles.ctaTitle}>Before You Make Your Next Hire — Fix the Structure Behind It.</h2>
            <PPButton to="/contact" variant="primary" size="large">
              Schedule a Strategy Consultation →
            </PPButton>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};
