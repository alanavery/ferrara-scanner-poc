import { Title3D } from "../../components/3dTitle";
import { Offer } from "../../components/Offer";
import { Text } from "../../components/Text";
import styles from "./index.module.css";

export const ThankYou = () => (
  <div className={styles.container}>
    <div>
      <Title3D>Thank you</Title3D>
    </div>
    <Text>
      Well, this is bittersweet... you're not a winner this
      time. The good news is, you can pull around and try
      again tomorrow or the next day or the next day! Every
      day is a new chance to win.
      <br />
      <br />
      In the meantime, we would like to thank you for
      participating by giving this offer for the next time
      you need some road trip candy:
    </Text>
    <Offer
      title="SAVE $X.XX"
      description="on any ONE (1) NERDS®, Laffy Taffy®, Trolli® or SweeTARTS® product"
      ctaLabel="claim coupon"
    />
  </div>
);
