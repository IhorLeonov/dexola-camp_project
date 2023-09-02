import s from "./TopNfts.module.scss";

export const TopItem = ({ name, rarity, total, won, price, avatar }) => {
  return (
    <li className={s.top_item}>
      <img className={s.top_img} src={avatar} alt="NFT picture" />
      <td>{name}</td>
      <td>{rarity}</td>
      <td>{total}</td>
      <td>{won}</td>
      <td>{price}</td>
    </li>
  );
};
