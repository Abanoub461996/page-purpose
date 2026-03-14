import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = styles[direction] || '';

  return (
    <div
      ref={ref}
      className={`${styles.section} ${directionClass} ${visible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
};
