import styles from './Services.module.css';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../components/SectionLabel/SectionLabel';
import { PPButton } from '../../components/PPButton/PPButton';

const services = [
  {
    title: 'Founder Team Audit',
    summary: 'A strategic diagnostic that clarifies what your business actually needs before you hire.',
    idealFor: 'Founders preparing to hire, restructure, or regain team clarity after fast growth.',
    items: ['Organizational health assessment', 'Role clarity and accountability mapping', 'Hiring priorities and sequencing', 'Leadership alignment review'],
    outcome: 'Strategic Hiring Clarity',
    timeline: '2-3 weeks',
    number: '01',
  },
  {
    title: 'Hiring Architecture System',
    summary: 'A full operating system for hiring the right people with structure and consistency.',
    idealFor: 'Teams actively hiring who need better decision quality and process discipline.',
    items: ['Organizational structure design', 'Role scorecards and success metrics', 'Structured interview frameworks', 'Hiring decision criteria'],
    outcome: 'Structured Hiring Framework',
    timeline: '3-5 weeks',
    number: '02',
  },
  {
    title: 'Team Stability Program',
    summary: 'Post-hire stabilization focused on retention, manager alignment, and execution rhythm.',
    idealFor: 'Founder-led teams scaling headcount and protecting performance after hiring.',
    items: ['Retention risk assessment', 'Manager alignment sessions', 'Performance framework design', 'Communication culture improvements'],
    outcome: 'Sustainable Team Performance',
    timeline: '4-6 weeks',
    number: '03',
  },
];

const valuePoints = [
  {
    title: 'Systems Before Headcount',
    desc: 'We design the operating structure first so new hires are set up to perform from day one.',
  },
  {
    title: 'Founder-Centric Advisory',
    desc: 'Every recommendation is tailored to founder bandwidth, stage, and business priorities.',
  },
  {
    title: 'Practical Delivery',
    desc: 'You leave each engagement with clear tools, artifacts, and decision frameworks.',
  },
];

const processSteps = [
  { label: 'Discovery', desc: 'We listen, audit, and map your current structure.' },
  { label: 'Diagnosis', desc: 'We identify gaps, misalignments, and priorities.' },
  { label: 'Design', desc: 'We build your hiring and performance frameworks.' },
  { label: 'Delivery', desc: 'We implement, support, and refine alongside you.' },
];

export const Services = () => {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <AnimatedSection direction="fade">
            <SectionLabel>Services</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h1 className={styles.heroTitle}>Service Architecture for Intentional Team Growth</h1>
          </AnimatedSection>
          <AnimatedSection delay={300} direction="fade">
            <p className={styles.heroSub}>
              We do not just fill roles. We build the strategy, structure, and systems that make your team decisions sustainable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Points */}
      <section className={styles.valueSection}>
        <div className={styles.valueInner}>
          {valuePoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 120} direction="up">
              <div className={styles.valueCard}>
                <h2 className={styles.valueTitle}>{point.title}</h2>
                <p className={styles.valueDesc}>{point.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceInner}>
          <AnimatedSection direction="fade">
            <div className={styles.serviceSectionHeader}>
              <SectionLabel>Detailed Tracks</SectionLabel>
              <h2 className={styles.serviceSectionTitle}>Choose the support model that fits your stage.</h2>
            </div>
          </AnimatedSection>

          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceNumber}>{service.number}</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.summary}</p>
                  </div>
                  <div className={styles.serviceDivider} />
                  <div className={styles.serviceGrid}>
                    <div className={styles.serviceBlock}>
                      <div className={styles.blockLabel}>Ideal For</div>
                      <p className={styles.blockText}>{service.idealFor}</p>
                    </div>
                    <div className={styles.serviceBlock}>
                      <div className={styles.blockLabel}>What You Get</div>
                      <ul className={styles.serviceList}>
                        {service.items.map((item, j) => (
                          <li key={j} className={styles.serviceListItem}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceOutcome}>
                      <div className={styles.outcomeLabel}>Outcome</div>
                      <div className={styles.outcomeValue}>{service.outcome}</div>
                      <div className={styles.timeline}>{service.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <AnimatedSection direction="left">
            <SectionLabel>Process</SectionLabel>
            <h2 className={styles.processTitle}>How We Work</h2>
            <p className={styles.processSub}>
              Every engagement follows a clear four-phase structure so progress is visible and decisions stay focused.
            </p>
          </AnimatedSection>
          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150} direction="up">
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>0{i + 1}</div>
                  <div className={styles.processStepLabel}>{step.label}</div>
                  <div className={styles.processStepLine} />
                  <div className={styles.processStepDesc}>{step.desc}</div>
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
            <h2 className={styles.ctaTitle}>Ready to build your hiring infrastructure?</h2>
            <PPButton to="/contact" variant="primary" size="large">
              Schedule a Strategy Consultation →
            </PPButton>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};
