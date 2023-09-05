import s from "./TopNfts.module.scss";

export const TopItem = ({ name, rarity, total, won, price, image }) => {
  return (
    <li className={s.nfts_item}>
      <table className={s.nfts_grid}>
        {/* header */}
        <thead>
          <tr className={s.nfts_grid_header}>
            <th className={s.nfts_grid_void}></th>
            <th className={s.nfts_grid_name}>NFT Name</th>
            <th className={s.nfts_grid_rarity}>
              <span className={s.nfts_grid_rarity_span}>Rarity</span>
              <span className={s.nfts_grid_level_span}> Level</span>
            </th>
            <th className={s.nfts_grid_total}>Total games</th>
            <th className={s.nfts_grid_won}>Games Won</th>
            <th className={s.nfts_grid_price}>Price (ETH)</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          <tr className={s.nfts_grid_body}>
            <td className={s.nfts_grid_image_box}>
              <img
                className={s.nfts_grid_image}
                src={image}
                alt="NFT picture"
              />
            </td>
            <td className={s.nfts_grid_name_val}>{name}</td>
            <td className={s.nfts_grid_rarity_val}>{rarity}</td>
            <td className={s.nfts_grid_total_val}>{total}</td>
            <td className={s.nfts_grid_won_val}>{won}</td>
            <td className={s.nfts_grid_price_val}>
              {price} <span className={s.nfts_grid_cur}>ETH</span>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};
