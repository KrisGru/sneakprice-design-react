import TrendySneaker from './reusable/TrendySneaker';
import fireEmoji from '../assets/fire emoji.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import stockX from '../assets/StockX.png'
import fightClub from '../assets/fight club.png'
import stadiumGoods from '../assets/stadium goods logo.png'
import goat from '../assets/goat.png'

const TrendySneakers = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
  <div className="bgTrendySneakers bg">
    <div className="trendySneakers">
      <h3><img src={fireEmoji} alt="fire emoji"/> Today's trending sneakers</h3>
      <Carousel responsive={responsive}>
        <div><TrendySneaker number="01" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></div>
        <div><TrendySneaker number="02" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></div>
        <div><TrendySneaker number="03" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></div>
        <div><TrendySneaker number="04" brand="nike" price="110" name="Nike Air VaporMax 2021 FK"/></div>
      </Carousel>

      <ul className="trendySneakers__sponsors">
        <li><img src={stockX} alt=""/></li>
        <li><img src={fightClub} alt=""/></li>
        <li><img src={stadiumGoods} alt=""/></li>
        <li><img src={goat} alt=""/></li>
      </ul>
    </div>
  </div>
)
}

export default TrendySneakers;
