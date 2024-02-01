import styles from "./index.module.css";

export const Button = ({
  children,
  className,
  ...props
}: {
  children?: string;
  className?: string;
} & JSX.IntrinsicElements["button"]) => (
  <button
    className={`${styles.container} ${className}`}
    {...props}
  >
    {children}
  </button>
);
