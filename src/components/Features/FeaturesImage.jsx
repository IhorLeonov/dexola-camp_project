import styles from "./Features.module.scss";
import { featureImages } from "../../helpers/imagesPath";

export const FeaturesImage = ({ id }) => {
  return (
    <picture className={styles.features_picture}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${featureImages[`astr${id}desc1x`]} 1x, ${
          featureImages[`astr${id}desc2x`]
        } 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 744px)"
        srcSet={`${featureImages[`astr${id}tab1x`]} 1x, ${
          featureImages[`astr${id}tab2x`]
        } 2x`}
        type="image/jpg"
      />
      <source
        media="(max-width: 743px)"
        srcSet={`${featureImages[`astr${id}mob1x`]} 1x, ${
          featureImages[`astr${id}mob2x`]
        } 2x`}
        type="image/jpg"
      />
      <img
        src={featureImages[`astr${id}mob1x`]}
        alt="Astronaut picture"
        loading="lazy"
      />
    </picture>
  );
};
