import styles from "./JoinUs.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const JoinUs = () => {
  return (
    <section className={"container" + " " + styles["join"]}>
      <SectionTitle text="Join Us" numb="03" />

      <div className="join">
        <div className="join__title-box">
          <h3 className="join__title">Experience the Power of StarRunner</h3>
        </div>
        <p className="join__desc">
          Join Our Community and Embark on a Journey of Opportunities. Discover
          the full range of our services that cater to your needs. We&apos;ve
          got you covered with top-notch solutions.
        </p>
      </div>
      <form action=""></form>
    </section>
  );
};
