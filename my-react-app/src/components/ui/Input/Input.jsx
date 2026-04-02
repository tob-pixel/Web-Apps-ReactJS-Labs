import { useId } from 'react';
import styles from './Input.module.css';

export default function Input({ label, error, className, ...rest }) {
  const id = useId();

  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={[styles.input, error && styles.error].filter(Boolean).join(' ')}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
