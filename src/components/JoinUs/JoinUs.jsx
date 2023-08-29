import styles from "./JoinUs.module.scss";
import { Title } from "../Title/Title";
import { JoinUsForm } from "./JoinUsForm";
import arrowRight from "../../assets/icons/arrow-right-long.svg";

export const JoinUs = () => {
  return (
    <section className={styles.join_section}>
      <Title name="Join Us" numb="03" />
      <div className={styles.join}>
        <div className={styles.join_wrapper}>
          <h3 className={"sub-title" + " " + styles.join_title}>
            Experience the Power of StarRunner
          </h3>
          <p className={styles.join_description}>
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We&apos;ve got you covered with top-notch solutions.
          </p>
          <img
            className={styles.join_arrow_img}
            src={arrowRight}
            alt="Arrow right"
          />
        </div>
        <JoinUsForm />
      </div>
    </section>
  );
};
