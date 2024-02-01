import styles from "./index.module.css";

export const InputLabel = ({
  label,
  center,
  error,
  required,
}: {
  label?: string;
  center?: boolean;
  error?: string;
  required?: boolean;
}) => {
  if (!label) return null;
  return (
    <div
      className={`${styles.container} ${
        error ? styles.error : ""
      } ${center ? styles.center : ""}`}
    >
      <label>{label + (required ? " *" : "")}</label>
    </div>
  );
};
