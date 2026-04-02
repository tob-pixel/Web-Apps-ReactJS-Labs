import styles from './Badge.module.css';

export default function Badge({ children, variant = 'default', className, ...rest }) {
  const classes = [
    styles.badge,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
