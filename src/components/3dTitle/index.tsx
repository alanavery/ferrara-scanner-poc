import styles from "./index.module.css";

export const Title3D = ({
  children,
}: {
  children?: string;
}) => <h1 className={styles.container}>{children}</h1>;
