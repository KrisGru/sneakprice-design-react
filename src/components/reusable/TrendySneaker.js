const TrendySneaker = ({ number, brand, price, name }) => (
  <div className="trendySneaker">
    <p className="trendySneaker__brand">{brand}</p>
    <p className="trendySneaker__price">${price}</p>
    <p className="trendySneaker__number">{number}</p>
    <p className="trendySneaker__img"></p>
    <p className="trendySneaker__name">{name}</p>
  </div>
)

export default TrendySneaker;
