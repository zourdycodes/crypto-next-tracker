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
    <div className="coin__container">
      <div className="coin__row">
        <div className="coin">
          <img src={image} alt={name} className="coin__img" />
          <h1 className="coin__title">{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>

        <div className="coin__data">
          <p className="coin__price">${+price.toFixed(1)}</p>
          <p className="coin__volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin__change red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin__change green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coins;
