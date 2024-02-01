import { forwardRef } from "react";
import styles from "./index.module.css";

export const DateInput = forwardRef(
  (
    {
      label,
      center,
      error,
      style,
      ...props
    }: {
      label?: string;
      center?: boolean;
      error?: string;
    } & JSX.IntrinsicElements["input"],
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div
      ref={ref}
      className={`${styles.container} ${
        error ? styles.error : ""
      } ${center ? styles.center : ""}`}
      style={style}
    >
      <label>{label}</label>
      <input {...props} />
      {error && <span>{error}</span>}
    </div>
  ),
);
