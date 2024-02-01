import { forwardRef } from "react";
import styles from "../TextInput/index.module.css";
import { InputLabel } from "../InputLabel";
import { InputError } from "../InputError";

export const SelectInput = forwardRef(
  (
    {
      center,
      style,
      options,
      ...props
    }: {
      label?: string;
      center?: boolean;
      error?: string;
      options?: {
        value: string;
        label: string;
        disabled?: boolean;
      }[];
    } & JSX.IntrinsicElements["select"],
    ref: React.ForwardedRef<HTMLSelectElement>,
  ) => (
    <div
      className={`${styles.container} ${
        props.error ? styles.error : ""
      } ${center ? styles.center : ""}`}
      style={style}
    >
      <InputLabel {...props} />
      <select ref={ref} {...props}>
        {options?.map((option) => (
          <option
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <InputError {...props} />
    </div>
  ),
);
