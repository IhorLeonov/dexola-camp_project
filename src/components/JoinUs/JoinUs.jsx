import styles from "./JoinUs.module.scss";
import { Title } from "../Title/Title";

export const JoinUs = () => {
  return (
    <section className={styles.join_section}>
      <Title text="Join Us" numb="03" />
      <div className={styles.join}>
        <div>
          <h3 className={"sub-title" + " " + styles.join_title}>
            Experience the Power of StarRunner
          </h3>
          <p className="join_description">
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We&apos;ve got you covered with top-notch solutions.
          </p>
        </div>
        <form action=""></form>
        <button className={styles.join_btn} type="button">
          Send it
        </button>
      </div>
    </section>
  );
};
