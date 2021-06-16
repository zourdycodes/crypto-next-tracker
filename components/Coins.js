import styles from "./styles/Coins.module.css";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className={styles.coin__container}>
      <div className={styles.coin__row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin__img} />
          <h1 className={styles.coin__title}>{name}</h1>
          <p className={styles.coin__symbol}>{symbol}</p>
        </div>

        <div className={styles.coin__data}>
          <p className={styles.coin__price}>${+price.toFixed(1)}</p>
          <p className={styles.coin__volume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={`${styles.coin__change} ${styles.red}`}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={`${styles.coin__change} ${styles.green}`}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className="market__cap">Mkt cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
