import type { ReactNode } from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: ReactNode;
}

export const SectionLabel = ({ children }: SectionLabelProps) => {
  return <span className={styles.label}>{children}</span>;
};
