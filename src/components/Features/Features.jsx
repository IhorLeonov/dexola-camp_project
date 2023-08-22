import styles from "./Features.module.scss";
import { Title } from "../Title/Title";

export const Features = () => {
  return (
    <section>
      <Title text="Features" numb="01" />
      <div className={styles["features"]}>
        <div className="features__about">
          <div className="features__about-title-box">
            <h3 className={"sub-title" + " " + styles["features__about-title"]}>
              About StarRunner
            </h3>
          </div>
          <p className={styles["features__about-desc"]}>
            The StarRunner Blockchain Ecosystem isn&apos;t a mere playground;
            it&apos;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>

        <ul className="features__list">
          <li className="features__item">
            <img src="" alt="" />
            <h4 className={"sub-title" + " " + styles["features__item-title"]}>
              <span>01</span>
              <span>STRU Token sale</span>
            </h4>
            <p className="features__item-desc">
              The StarRunner Token the exclusive crypto currency fueling the
              adventure of the Play-to-Earn sensation.
            </p>
            <button>DISCOVER NOW</button>
          </li>

          <li className="features__item">
            <img src="" alt="" />
            <h4 className={"sub-title" + " " + styles["features__item-title"]}>
              <span>02</span>
              <span>Staking</span>
            </h4>
            <p className="features__item-desc">
              Join a thriving community of stakers, united by their passion for
              exploration, strategy, and gaming.
            </p>
            <button>DISCOVER NOW</button>
          </li>

          <li className="features__item">
            <img src="" alt="" />
            <h4 className={"sub-title" + " " + styles["features__item-title"]}>
              <span>03</span>
              <span>NFT minting</span>
            </h4>
            <p className="features__item-desc">
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
