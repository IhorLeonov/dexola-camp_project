import styles from "./TopNfts.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const TopNfts = () => {
  return (
    <section className={"container" + " " + styles["top"]}>
      <SectionTitle text="Top NFTs" numb="02" />
      <div className="table"></div>
    </section>
  );
};
