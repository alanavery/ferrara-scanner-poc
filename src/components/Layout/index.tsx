import styles from "./index.module.css";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ComponentProps, ReactNode } from "react";

export const Layout = ({
  headerProps = {},
  footerProps = {},
  children,
}: {
  headerProps?: ComponentProps<typeof Header>;
  footerProps?: ComponentProps<typeof Footer>;
  children: ReactNode;
}) => (
  <div className={styles.container}>
    <Header {...headerProps} />
    {children}
    <Footer {...footerProps} />
  </div>
);
