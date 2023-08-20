import styles from "./Hero.module.scss";
import firstImage from "../../assets/images/test-img-1.jpg";
import secondImage from "../../assets/images/test-img-2.jpg";

export const Hero = () => {
  return (
    <section>
      <div className={"container" + " " + styles["hero"]}>
        <div className={styles["hero-image__box"]}>
          <img
            className={styles["hero-image"]}
            src={firstImage}
            loading="lazy"
            alt="First NFT picture"
          />
          <img
            className={styles["hero-image"]}
            src={secondImage}
            loading="lazy"
            alt="Second NFT picture"
          />
        </div>
      </div>
      <div className="container">
        <h1 className={styles["hero-title"]}>DEXOLA</h1>
      </div>
      <div>
        Prepare to be transported beyond the boundaries of traditional gaming
        with the StarRunner Ecosystem – the beating heart that drives the
        adrenaline-charged galactic P2E odyssey of &apos;StarRunner.&apos;
      </div>
    </section>
  );
};
