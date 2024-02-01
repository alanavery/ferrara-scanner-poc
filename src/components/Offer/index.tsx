import { Button } from "../Button";
import styles from "./index.module.css";
import starIcon from "./star.svg";

export const Offer = ({
  title,
  description,
  ctaLabel,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
}) => (
  <div className={styles.container}>
    <div className={styles.icon}>
      <img className={styles.star} src={starIcon} />
    </div>
    <div
      className={`${styles.content} ${
        ctaLabel ? styles["content-with-cta"] : ""
      }`}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
    {ctaLabel && (
      <Button className={styles.cta}>{ctaLabel}</Button>
    )}
  </div>
);
