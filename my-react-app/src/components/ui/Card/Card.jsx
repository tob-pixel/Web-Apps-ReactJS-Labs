import styles from './Card.module.css';

export default function Card({ children, hoverable, className, ...rest }) {
  const classes = [
    styles.card,
    hoverable && styles.hoverable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className, ...rest }) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className, ...rest }) {
  return (
    <div className={[styles.body, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className, ...rest }) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};
