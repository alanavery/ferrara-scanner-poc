import { forwardRef } from "react";
import styles from "./index.module.css";
import { InputLabel } from "../InputLabel";
import { InputError } from "../InputError";

export const TextInput = forwardRef(
  (
    {
      center,
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
      className={`${styles.container} ${
        props.error ? styles.error : ""
      } ${center ? styles.center : ""}`}
      style={style}
    >
      <InputLabel {...props} />
      <input ref={ref} {...props} />
      <InputError {...props} />
    </div>
  ),
);
