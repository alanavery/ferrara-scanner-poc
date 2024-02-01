import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import styles from "./index.module.css";
import candyOneImage from "./assets/candy_one_image.png";
import candyTwoImage from "./assets/candy_two_image.png";
import orangeWormImage from "../../assets/orangeWorm.png";
import blueWormImage from "../../assets/blueWorm.png";
import { Layout } from "../../components/Layout";
import { useRouteContext } from "../../hooks/useRouteContext";

export const HomeAMOE = () => {
  const { setPath } = useRouteContext();
  return (
    <Layout footerProps={{ hideBottomImages: true }}>
      <div className={styles.container}>
        <Text>
          Adventure awaits!
          <br />
          Enter daily for a chance to
        </Text>
        <Title>WIN SWEET PRIZES ALL SUMMER LONG</Title>
        <Button
          onClick={() => {
            setPath("/email-form");
          }}
        >
          Let's go
        </Button>
        <img
          src={candyOneImage}
          className={styles["candy-one"]}
        />
        <img
          src={candyTwoImage}
          className={styles["candy-two"]}
        />
        <img
          src={orangeWormImage}
          className={styles["orange-worm"]}
        />
        <img
          src={blueWormImage}
          className={styles["blue-worm"]}
        />
      </div>
    </Layout>
  );
};
