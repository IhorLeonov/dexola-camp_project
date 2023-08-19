import styles from "./Features.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <SectionTitle text="Features" numb="01" />

        <div className="about">
          <div className="about__title-box">
            <h3 className="about__title">About StarRunner</h3>
          </div>
          <p className="about__desc">
            The StarRunner Blockchain Ecosystem isn&apos;t a mere playground;
            it&apos;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>

        <ul className="features__list">
          <li className="features__item">
            <img src="" alt="" />
            <h4 className="item__title">
              <span className="item__numb">01</span>STRU Token sale
            </h4>
            <p className="item__desc">
              The StarRunner Token the exclusive crypto currency fueling the
              adventure of the Play-to-Earn sensation.
            </p>
            <button>DISCOVER NOW</button>
          </li>

          <li className="features__item">
            <img src="" alt="" />
            <h4 className="item__title">
              <span className="item__numb">02</span>Staking
            </h4>
            <p className="item__desc">
              Join a thriving community of stakers, united by their passion for
              exploration, strategy, and gaming.
            </p>
            <button>DISCOVER NOW</button>
          </li>

          <li className="features__item">
            <img src="" alt="" />
            <h4 className="item__title">
              <span className="item__numb">03</span>NFT minting
            </h4>
            <p className="item__desc">
              Every StarRunner NFT tells a story – YOUR story. This NFT
              encapsulates the essence of your journey like never before.
            </p>
            <button>DISCOVER NOW</button>
          </li>
        </ul>
      </div>
    </section>
  );
};
