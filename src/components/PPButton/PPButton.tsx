import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './PPButton.module.css';

interface PPButtonProps {
  variant?: 'primary' | 'secondary' | 'subtle';
  size?: 'default' | 'large';
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const PPButton = ({
  variant = 'primary',
  size = 'default',
  children,
  to,
  href,
  onClick,
  type = 'button',
}: PPButtonProps) => {
  const className = `${styles.root} ${styles[variant]} ${size === 'large' ? styles.large : ''}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
