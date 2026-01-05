import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /**
   * Badge variant style
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Badge size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClass = 'badge';
    const variantClass = `badge--${variant}`;
    const sizeClass = `badge--${size}`;

    const classes = [
      baseClass,
      variantClass,
      sizeClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

