import TrendySneaker from './TrendySneaker';

const TrendySneakers = () => (
  <div className="bgTrendySneakers">
    <div className="trendySneakers">
      <h3>Today's trending sneakers</h3>
      <ul className="trendySneakers__list">
        <li><TrendySneaker number="01" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="02" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="03" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="04" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
      </ul>
      <ul className="trendySneakers__sponsor">
        <li className="stockX"></li>
        <li className="fightClub"></li>
        <li className="stadiumGoods"></li>
        <li className="goat"></li>
      </ul>
    </div>
  </div>
)

export default TrendySneakers;
