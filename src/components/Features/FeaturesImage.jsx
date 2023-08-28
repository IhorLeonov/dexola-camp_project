import styles from "./Features.module.scss";
import { imgUrls } from "./ImagesPath";

export const FeaturesImage = ({ id }) => {
  return (
    <picture className={styles.features_picture}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${imgUrls[`astr${id}desc1x`]} 1x, ${
          imgUrls[`astr${id}desc2x`]
        } 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 744px)"
        srcSet={`${imgUrls[`astr${id}tab1x`]} 1x, ${
          imgUrls[`astr${id}tab2x`]
        } 2x`}
        type="image/jpg"
      />
      <source
        media="(max-width: 743px)"
        srcSet={`${imgUrls[`astr${id}mob1x`]} 1x, ${
          imgUrls[`astr${id}mob2x`]
        } 2x`}
        type="image/jpg"
      />
      <img
        src={imgUrls[`astr${id}mob1x`]}
        alt="Astronaut picture"
        loading="lazy"
      />
    </picture>
  );
};
