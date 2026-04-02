import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  ...rest 
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size]
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
