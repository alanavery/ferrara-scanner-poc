import styles from "./index.module.css";

import sweetTheRideImage from "./assets/sweet_the_ride.png";
import detourImage from "./assets/detour.png";
import victoryImage from "./assets/victory.png";
import leftTopBackground from "../../assets/left_top_background.png";
import rightBottomBackground from "../../assets/right_bottom_background.png";
import logos from "../../assets/logos.png";

type CenterImageType = "default" | "winner" | "looser";
const getCenterImage = (type?: CenterImageType) => {
  switch (type) {
    case "winner":
      return victoryImage;
    case "looser":
      return detourImage;
    default:
      return sweetTheRideImage;
  }
};

export const Header = ({
  centerImage = "default",
}: {
  centerImage?: "default" | "winner" | "looser";
}) => {
  return (
    <header className={styles.container}>
      <img
        className={styles["right-bottom-background"]}
        src={rightBottomBackground}
        alt=""
      />
      <img
        className={styles["left-top-background"]}
        src={leftTopBackground}
        alt=""
      />
      <img
        className={styles["center-image"]}
        src={getCenterImage(centerImage)}
        alt=""
      />
      <img className={styles.logos} src={logos} alt="logo" />
    </header>
  );
};
