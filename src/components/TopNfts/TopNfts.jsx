import styles from "./TopNfts.module.scss";
import { Title } from "../Title/Title";

export const TopNfts = () => {
  return (
    <section className={styles["top-section"]}>
      <Title text="Top NFTs" numb="02" />
      <div className={styles["top"]}></div>
    </section>
  );
};
