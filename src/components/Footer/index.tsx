import styles from "./index.module.css";
import signImage from "./assets/sign.png";
import candyImage from "./assets/candy_helix.png";
import orangeWormImage from "../../assets/orangeWorm.png";
import blueWormImage from "../../assets/blueWorm.png";

export const Footer = ({
  showFreeMethodEntryMessage,
  hideBottomImages,
}: {
  showFreeMethodEntryMessage?: boolean;
  hideBottomImages?: boolean;
}) => (
  <div className={styles.margin}>
    {!hideBottomImages && (
      <div className={styles.images}>
        <img src={signImage} className={styles.sign} />
        <img src={candyImage} className={styles.candy} />
        <img
          src={orangeWormImage}
          className={styles["orange-worm"]}
        />
        <img
          src={blueWormImage}
          className={styles["blue-worm"]}
        />
      </div>
    )}
    <footer className={styles.footer}>
      {showFreeMethodEntryMessage && (
        <p className={styles["free-method-entry-message"]}>
          <a>Click here</a> for a Free Method of Entry.
        </p>
      )}
      <p className={styles.description}>
        NO PURCHASE OR SCAN NECESSARY TO ENTER OR WIN. Open
        only to legal residents of the 50 U.S/DC who are
        18+. Promotion begins 12:00:01 AM EDT on 3/15/24 and
        ends 11:59:59 PM EDT on 9/30/24. For entry
        instructions and <a>Official Rules</a>, scan the QR
        code included on the Promotion signage with your
        web-enabled mobile device to be directed to{" "}
        <a>www.FerraraSummerSweeps.com</a>. Total ARV of all
        prizes: $4,705.00. Odds depend on # of elig.
        entries. Void where prohibited. Data usage rates may
        apply. Limit: 1 entry per person per day. Prize
        claim deadline is 1 hour after notification.
        Sponsored by: Ferrara Candy Company, 404 W. Harrison
        St. Suite 650, Chicago, IL 60607.
      </p>
      <a>Contact Us</a>
      <a>Privacy Policy</a>
      <a>Terms of Use</a>
      <a>Do Not Sell My Personal Information</a>
      <p className={styles.caption}>
        © 2024 Ferrara Candy Company. All Rights Reserved.
      </p>
    </footer>
  </div>
);
