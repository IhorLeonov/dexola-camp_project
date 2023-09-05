import s from "./Animation.module.scss";

export const Animation = () => {
  return (
    <section className={s.animation}>
      <div className={s.animation_back}></div>
      <div className={s.animation_ellipse}>
        <h3 className={s.animation_sub_title}>
          Explore Cyberpunk Space Adventures in
        </h3>
        <h2 className={s.animation_title}>StarRunner ecosystem</h2>
      </div>
      <a href="#features">
        <div className={s.animation_pointer}>
          <div className={s.animation_pointer_arrow} />
          <div className={s.animation_pointer_arrow} />
          <div className={s.animation_pointer_arrow} />
          <div className={s.animation_pointer_arrow} />
        </div>
      </a>
    </section>
  );
};
