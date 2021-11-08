import { BsArrowRight } from 'react-icons/bs';

const SneakerItem = () => {

  return (
    <li className="sneakerItem">
      <div className="sneakerItem__image">
        <p className="position">01</p>
        <div className="img"></div>
      </div>
      <div className="sneakerItem__data">
        <div className="basicData">
          <p className="basicData__specificName">Cloud White</p>
          <p className="basicData__name"><strong>Ultraboost 21</strong></p>
          <p className="basicData__brand">Adidas</p>
        </div>
        <div className="awgPrice">
          <p className="awgPrice__stock">in 3 stores</p>
          <p className="awgPrice__price"><strong>150</strong>USD</p>
          <button className="awgPrice__btn">Compare price <BsArrowRight /></button>
        </div>
      </div>
    </li>
  )
}

export default SneakerItem;
