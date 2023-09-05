import s from "./TopNfts.module.scss";
import data from "../../assets/topNfts.json";
import { TopItem } from "./TopNftsItem";
import { nftsImages } from "../../helpers/imagesPath";

export const TopList = () => {
  return (
    <ul className={s.top_list}>
      {data.map(({ id, name, rarity, total, won, price }) => {
        return (
          <TopItem
            key={id}
            name={name}
            rarity={rarity}
            total={total}
            price={price}
            won={won}
            image={nftsImages[id]}
          />
        );
      })}
    </ul>
  );
};
