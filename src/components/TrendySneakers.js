import Sneaker from './Sneaker';

const TrendySneakers = () => {

  return (
    <div className="bgTrendySneakers">
      <div className="trendySneakers">
        <h3>Today's trending sneakers</h3>
        <ul className="trendySneakers__list">
          <li><Sneaker /></li>
          <li><Sneaker /></li>
          <li><Sneaker /></li>
          <li><Sneaker /></li>
        </ul>
        <section className="trendySneakers__sponsor">
          <h1>SPONSORING COMPANIES</h1>
        </section>

      </div>
    </div>
  )
}

export default TrendySneakers;
