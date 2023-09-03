import s from "./TopNfts.module.scss";

export const TopItem = ({ name, rarity, total, won, price, avatar }) => {
  return (
    <li className={s.nfts_grid_item}>
      <div className={s.nfts_grid}>
        {/* header */}
        <div className={s.nfts_grid_header}>
          <div className={s.nfts_grid_void}></div>
          <div className={s.nfts_grid_name}>NFT Name</div>
          <div className={s.nfts_grid_rarity}>
            Rarity <span className={s.nfts_grid_level}>Level</span>
          </div>
          <div className={s.nfts_grid_total}>Total games</div>
          <div className={s.nfts_grid_won}>Games Won</div>
          <div className={s.nfts_grid_price}>Price (ETH)</div>
        </div>
        {/* body */}
        <div className={s.nfts_grid_body}>
          <div className={s.nfts_grid_image_box}>
            <img className={s.nfts_grid_image} src={avatar} alt="NFT picture" />
          </div>
          <div className={s.nfts_grid_name_val}>{name}</div>
          <div className={s.nfts_grid_rarity_val}>{rarity}</div>
          <div className={s.nfts_grid_total_val}>{total}</div>
          <div className={s.nfts_grid_won_val}>{won}</div>
          <div className={s.nfts_grid_price_val}>
            {price} <span className={s.nfts_grid_cur}>ETH</span>
          </div>
        </div>
      </div>
    </li>
  );
};
