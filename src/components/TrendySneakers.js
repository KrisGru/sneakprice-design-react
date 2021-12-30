import TrendySneaker from './reusable/TrendySneaker';
import fireEmoji from '../assets/fire emoji.png'
import stockX from '../assets/StockX.png'
import fightClub from '../assets/fight club.png'
import stadiumGoods from '../assets/stadium goods logo.png'
import goat from '../assets/goat.png'

const TrendySneakers = () => (
  <div className="bgTrendySneakers bg">
    <div className="trendySneakers">
      <h3><img src={fireEmoji} alt="fire emoji"/> Today's trending sneakers</h3>
      <ul className="trendySneakers__list">
        <li><TrendySneaker number="01" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="02" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="03" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
        <li><TrendySneaker number="04" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></li>
      </ul>
      <ul className="trendySneakers__sponsors">
        <li><img src={stockX} alt=""/></li>
        <li><img src={fightClub} alt=""/></li>
        <li><img src={stadiumGoods} alt=""/></li>
        <li><img src={goat} alt=""/></li>
      </ul>
    </div>
  </div>
)

export default TrendySneakers;
