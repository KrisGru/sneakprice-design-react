import { BsDot } from 'react-icons/bs';

const TrendySneaker = ({ number, brand, price, name }) => {
  const img = "picture area"
  return (
    <div className="TrendySneaker">
        <p className="TrendySneaker__brand">{brand}</p>
        <p className="TrendySneaker__price">${price}</p>
        <p className="TrendySneaker__number">{number}<p className="dot">.</p></p>
        <p className="TrendySneaker__img">{img}</p>
        <p className="TrendySneaker__name">{name}</p>
    </div>
  )
}

export default TrendySneaker;

//put a p tag instead of dot icons. Should be better
//Don't forget!!
//think about it because every where you used position.... :/
