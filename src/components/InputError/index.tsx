import styles from "./index.module.css";

export const InputError = ({
  center,
  error,
}: {
  center?: boolean;
  error?: string;
}) => {
  if (!error) return null;
  return (
    <div
      className={`${styles.container} ${
        error ? styles.error : ""
      } ${center ? styles.center : ""}`}
    >
      {error && <span>{error}</span>}
    </div>
  );
};
