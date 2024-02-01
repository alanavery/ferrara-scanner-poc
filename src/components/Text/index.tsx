import { ReactNode } from "react";
import styles from "./index.module.css";

export const Text = ({
  children,
}: {
  children?: ReactNode;
}) => <p className={styles.container}>{children}</p>;
