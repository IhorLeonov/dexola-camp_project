import s from "./Hero.module.scss";
import firstImage from "../../assets/images/test-img-1.jpg";
import secondImage from "../../assets/images/test-img-2.jpg";

export const Hero = () => {
  return (
    <section className={s.hero_section}>
      <div className={s.hero_wrapper}>
        <div className={s.hero_img_box + " " + s.hero_container}>
          <img
            className={s.hero_image}
            src={firstImage}
            alt="First NFT picture"
          />
          <img
            className={s.hero_image}
            src={secondImage}
            alt="Second NFT picture"
          />
        </div>
        <div className={s.hero_title_wrapper}>
          <h1 className={s.hero_title}>Dexola camp</h1>
        </div>
        <div className={s.hero_description_box + " " + s.hero_container}>
          <p className={s.hero_description}>
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
