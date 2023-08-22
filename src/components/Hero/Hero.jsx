import styles from "./Hero.module.scss";
import firstImage from "../../assets/images/test-img-1.jpg";
import secondImage from "../../assets/images/test-img-2.jpg";

export const Hero = () => {
  return (
    <section className={styles["hero"] + " " + styles["hero-container"]}>
      <div>
        <div className={styles["hero__img-box"]}>
          <img
            className={styles["hero__image"]}
            src={firstImage}
            loading="lazy"
            alt="First NFT picture"
          />
          <img
            className={styles["hero__image"]}
            src={secondImage}
            loading="lazy"
            alt="Second NFT picture"
          />
        </div>
      </div>
      <div>
        <h1 className={styles["hero__title"]}>Dexola</h1>
      </div>
      <div>
        <p className={styles["hero__description"]}>
          Prepare to be transported beyond the boundaries of traditional gaming
          with the StarRunner Ecosystem – the beating heart that drives the
          adrenaline-charged galactic P2E odyssey of &apos;StarRunner.&apos;
        </p>
      </div>
    </section>
  );
};
