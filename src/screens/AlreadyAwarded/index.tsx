import { Layout } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import styles from "./index.module.css";

export const AlreadyAwarded = () => (
  <Layout headerProps={{ centerImage: "looser" }}>
    <div className={styles.container}>
      <Title>Today's prize is already awarded</Title>
      <Text>
        Come back tomorrow for another chance to WIN sweet summer prizes!
      </Text>
    </div>
  </Layout>
);
