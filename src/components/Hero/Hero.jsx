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
    }, 4000);
    return () => clearInterval(interval);
  }, [indexFirst]);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      indexSecond >= heroRightImages.length - 1
        ? setIndexSecond(0)
        : setIndexSecond(indexSecond + 1);
    }, 5500);
    return () => clearInterval(secondInterval);
  }, [indexSecond]);

  const addClassToFirstImage = (idx) => {
    return idx === indexFirst ? s.hero_image_visible : "";
  };

  const addClassToSecondImage = (idx) => {
    return idx === indexSecond ? s.hero_image_visible : "";
  };

  return (
    <section className={s.hero_section}>
      <div className={s.hero_wrapper}>
        <div className={s.hero_img_list + " " + s.hero_container}>
          <div className={s.hero_img_container}>
            {heroLeftImages.map((path, idx) => (
              <img
                key={idx}
                className={
                  s.hero_image +
                  " " +
                  s.hero_image_left +
                  " " +
                  addClassToFirstImage(idx)
                }
                src={path}
                alt="NFT picture"
              />
            ))}
          </div>
          <div className={s.hero_img_container}>
            {heroRightImages.map((path, idx) => (
              <img
                key={idx}
                className={
                  s.hero_image +
                  " " +
                  s.hero_image_right +
                  " " +
                  addClassToSecondImage(idx)
                }
                src={path}
                alt="NFT picture"
              />
            ))}
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
