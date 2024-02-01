import { Layout } from "../../components/Layout";
import { Offer } from "../../components/Offer";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import styles from "./index.module.css";

export const NotWinner = () => (
  <Layout headerProps={{ centerImage: "looser" }}>
    <div className={styles.container}>
      <Title>You're not today's winner</Title>
      <Text>
        Come back tomorrow for another chance to WIN sweet
        summer prizes!
      </Text>
      <Offer
        title="Special Offer"
        description="Check your email for a special offer on your next candy purchase!"
      />
    </div>
  </Layout>
);
