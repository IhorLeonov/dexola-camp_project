import styles from "./Hero.module.scss";
import firstImage from "../../assets/images/test-img-1.jpg";
import secondImage from "../../assets/images/test-img-2.jpg";

export const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__img_box + " " + styles.hero_container}>
          <img
            className={styles.hero_image}
            src={firstImage}
            loading="lazy"
            alt="First NFT picture"
          />
          <img
            className={styles.hero_image}
            src={secondImage}
            loading="lazy"
            alt="Second NFT picture"
          />
        </div>
        <h1 className={styles.hero_title}>Dexola</h1>
        <div
          className={styles.hero_description__box + " " + styles.hero_container}
        >
          <p className={styles.hero_description}>
            Prepare to be transported beyond the boundaries of traditional
            gaming with the StarRunner Ecosystem – the beating heart that drives
            the adrenaline-charged galactic P2E odyssey of
            &apos;StarRunner.&apos;
          </p>
        </div>
      </div>
    </section>
  );
};
