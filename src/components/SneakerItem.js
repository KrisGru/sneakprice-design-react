const SneakerItem = () => {

  // invention is good but make it better 
  return (
    <li className="sneakerItem">
      <p className="position">01 transform must be</p>
      <div className="sneakerItem__data">picture and name</div>
      <div className="sneakerItem__priceAndStock">
        <p className="sneakerItem__priceAndStock__price">150USD</p>
        <div className="sneakerItem__priceAndStock__comparePrice">compare price btn</div>
        <p className="sneakerItem__priceAndStock__stock">in 3 stores</p>
      </div>
    </li>
  )
}

export default SneakerItem;
