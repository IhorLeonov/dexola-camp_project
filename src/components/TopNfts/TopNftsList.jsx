import s from "./TopNfts.module.scss";
import data from "../../assets/topNfts.json";
import { TopItem } from "./TopNftsItem";
// import { nftImages } from "../../helpers/imagesPath.js";

export const TopList = () => {
  return (
    <ul className={s.top_list}>
      {data.map(({ id, name, rarity, total, won, price, image }) => {
        // nftImages.map();
        return (
          <TopItem
            key={id}
            name={name}
            rarity={rarity}
            total={total}
            price={price}
            won={won}
            image={image}
          />
        );
      })}
    </ul>
  );
};
