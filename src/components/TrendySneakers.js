import Sneaker from './Sneaker';

const TrendySneakers = () => {

  return (
    <div className="bgTrendySneakers">
      <div className="trendySneakers">
        <h3>Today's trending sneakers</h3>
        <ul className="trendySneakers__list">
          <li><Sneaker number={`0${1}.`}/></li>
          <li><Sneaker number={"02."}/></li>
          <li><Sneaker number={"03."}/></li>
          <li><Sneaker number={"04."}/></li>
        </ul>
        <section className="trendySneakers__sponsor">
          <h1>SPONSORING COMPANIES</h1>
        </section>

      </div>
    </div>
  )
}

export default TrendySneakers;
