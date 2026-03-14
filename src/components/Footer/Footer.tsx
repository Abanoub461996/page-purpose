import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const logoMark = `${import.meta.env.BASE_URL}images/logo-mark.png`;

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandHeader}>
              <img src={logoMark} alt="Paige and Purpose logo" className={styles.brandLogo} />
              <div className={styles.brandName}>
                Paige <span className={styles.brandAmpersand}>&</span> Purpose
              </div>
            </div>
            <p className={styles.brandDesc}>
              Boutique advisory firm helping founders design high-performing teams through structured hiring and culture strategy.
            </p>
            <div className={styles.socialLinks}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/lalaine-m-655a6b58/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/paigeandpurpose"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Navigation</div>
            <ul className={styles.colLinks}>
              <li><Link to="/" className={styles.colLink}>Home</Link></li>
              <li><Link to="/about" className={styles.colLink}>About</Link></li>
              <li><Link to="/services" className={styles.colLink}>Services</Link></li>
              <li><Link to="/contact" className={styles.colLink}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.colLinks}>
              <li><Link to="/services" className={styles.colLink}>Founder Team Audit</Link></li>
              <li><Link to="/services" className={styles.colLink}>Hiring Architecture</Link></li>
              <li><Link to="/services" className={styles.colLink}>Team Stability</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Paige & Purpose. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
