// import styles from "./TopNfts.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const TopNfts = () => {
  return (
    <section className="container">
      {/* <div className="container"> */}
      <SectionTitle text="Top NFTs" numb="02" />
      <div className="table"></div>
      {/* </div> */}
    </section>
  );
};
