import s from "./Hero.module.scss";
import { heroLeftImages, heroRightImages } from "../../helpers/imagesPath";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [indexFirst, setIndexFirst] = useState(0);
  const [indexSecond, setIndexSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexFirst >= heroLeftImages.length - 1
        ? setIndexFirst(0)
        : setIndexFirst(indexFirst + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [indexFirst]);

  useEffect(() => {
    // const timeout = setTimeout(() => {
    const secondInterval = setInterval(() => {
      indexSecond >= heroRightImages.length - 1
        ? setIndexSecond(0)
        : setIndexSecond(indexSecond + 1);
    }, 5000);
    return () => clearInterval(secondInterval);
    // }, 2500);
    // return () => clearTimeout(timeout);
  }, [indexSecond]);

  return (
    <section className={s.hero_section}>
      <div className={s.hero_wrapper}>
        <div className={s.hero_img_list + " " + s.hero_container}>
          <div className={s.hero_img_container}>
            <img
              className={s.hero_image + " " + s.hero_image_left}
              src={heroLeftImages[indexFirst]}
              alt="NFT picture"
            />
          </div>
          <div className={s.hero_img_container}>
            <img
              className={s.hero_image + " " + s.hero_image_right}
              src={heroRightImages[indexSecond]}
              alt="NFT picture"
            />
          </div>
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
