import s from "./TopNfts.module.scss";

export const TopItem = ({ name, rarity, total, won, price, avatar }) => {
  return (
    <li className={s.top_item}>
      <img className={s.top_img} src={avatar} alt="NFT picture" />
      <p>{name}</p>
      <p>{rarity}</p>
      <p>{total}</p>
      <p>{won}</p>
      <p>{price}</p>
    </li>
  );
};
