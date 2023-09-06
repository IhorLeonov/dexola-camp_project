import s from "./Animation.module.scss";
import { useInView } from "react-intersection-observer";

export const Animation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section ref={ref} className={s.section}>
      <div className={s.animation + " " + `${inView && "show"}`}>
        <div className={s.animation_back}></div>
        <div className={s.animation_big_ellipse}>
          <h3 className={s.animation_sub_title}>
            Explore Cyberpunk Space Adventures in
          </h3>
          <h2 className={s.animation_title}>StarRunner ecosystem</h2>
        </div>
        <div
          className={s.animation_ellipse + " " + s.animation_ellipse_vertical}
        />
        <div className={s.animation_ellipse} />
        <div className={s.animation_ellipse} />
        <div className={s.animation_ellipse} />
        <div className={s.animation_ellipse} />
        <div className={s.animation_ellipse} />

        <a href="#features">
          <div className={s.animation_pointer}>
            <div className={s.animation_pointer_arrow} />
            <div className={s.animation_pointer_arrow} />
            <div className={s.animation_pointer_arrow} />
          </div>
        </a>
      </div>
    </section>
  );
};
