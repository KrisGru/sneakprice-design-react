import { BsArrowRight } from 'react-icons/bs';

const SneakerItem = ({ position, img, specificName, name, brand, stock, price }) => (
  <li className="sneakerItem">
    <div className="sneakerItem__image">
      <p className="position">{position}</p>
      <div className={img}></div>
    </div>
    <div className="sneakerItem__data">
      <div className="basicData">
        <p className="basicData__specificName">{specificName}</p>
        <p className="basicData__name"><strong>{name}</strong></p>
        <p className="basicData__brand">{brand}</p>
      </div>
      <div className="awgPrice">
        <p className="awgPrice__stock">in {stock} stores</p>
        <p className="awgPrice__price"><strong>{price}</strong>USD</p>
        <button className="awgPrice__btn" onClick={()=> alert("We don't have this shoes :( ")}>Compare price <BsArrowRight /></button>
      </div>
    </div>
  </li>
)

export default SneakerItem;
