import s from "./Features.module.scss";
import { Title } from "../Title/Title";
import { FeaturesList } from "./FeatyresList";

export const Features = () => {
  return (
    <section id="features" className={s.features_section}>
      <Title name="Features" numb="01" />
      <div className={s.features}>
        <div className={s.features_about}>
          <h3 className={s.features_about_title}>About StarRunner</h3>
          <p className={s.features_about_desc}>
            The StarRunner Blockchain Ecosystem isn&apos;t a mere playground;
            it&apos;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>
        <FeaturesList />
      </div>
    </section>
  );
};
