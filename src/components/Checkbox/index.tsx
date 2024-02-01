import { forwardRef } from "react";
import styles from "./index.module.css";
import { InputError } from "../InputError";

export const Checkbox = forwardRef(
  (
    {
      children,
      center,
      ...props
    }: {
      error?: string;
      center?: boolean;
      children?: React.ReactNode;
    } & JSX.IntrinsicElements["input"],
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div
      ref={ref}
      className={`${styles.container} ${
        props.error ? styles.error : ""
      } ${center ? styles.center : ""}`}
    >
      <div className={styles.input}>
        <input type="checkbox" {...props} />
        <label>{children}</label>
      </div>
      <InputError {...props} />
    </div>
  ),
);
