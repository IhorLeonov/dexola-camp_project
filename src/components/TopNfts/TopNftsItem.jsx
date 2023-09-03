import s from "./TopNfts.module.scss";

export const TopItem = ({ name, rarity, total, won, price, avatar }) => {
  return (
    <li className={s.nfts_grid_item}>
      <table className={s.nfts_grid}>
        {/* header */}
        <tr className={s.nfts_grid_header}>
          <th className={s.nfts_grid_void}>
            <span className={s.nfts_grid_header_title} />
          </th>
          <th className={s.nfts_grid_name}>
            <span className={s.nfts_grid_header_title}>NFT Name</span>
          </th>
          <th className={s.nfts_grid_rarity}>
            <span className={s.nfts_grid_header_title}>
              Rarity
              <span className={s.nfts_grid_level}>Level</span>
            </span>
          </th>
          <th className={s.nfts_grid_total}>
            <span className={s.nfts_grid_header_title}>Total games</span>
          </th>
          <th className={s.nfts_grid_won}>
            <span className={s.nfts_grid_header_title}>Games Won</span>
          </th>
          <th className={s.nfts_grid_price}>
            <span className={s.nfts_grid_header_title}>Price (ETH)</span>
          </th>
        </tr>
        {/* body */}
        <tr className={s.nfts_grid_body}>
          <td className={s.nfts_grid_image_box}>
            <img className={s.nfts_grid_image} src={avatar} alt="NFT picture" />
          </td>
          <td className={s.nfts_grid_name_val}>{name}</td>
          <td className={s.nfts_grid_rarity_val}>{rarity}</td>
          <td className={s.nfts_grid_total_val}>{total}</td>
          <td className={s.nfts_grid_won_val}>{won}</td>
          <td className={s.nfts_grid_price_val}>
            {price} <span className={s.nfts_grid_cur}>ETH</span>
          </td>
        </tr>
      </table>
    </li>
  );
};
