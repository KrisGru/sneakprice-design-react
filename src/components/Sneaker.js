const Sneaker = ({ number }) => {
const brand = "nike";
const price =`$${110}`;
const name = "Nike Air VaporMax 2021 FK"
const img = "picture area"


  return (
    <div className="sneaker">
        <p className="sneaker__brand">{brand}</p>
        <p className="sneaker__price">{price}</p>
        <p className="sneaker__number">{number}</p>
        <p className="sneaker__img">{img}</p>
        <p className="sneaker__name">{name}</p>
    </div>
  )
}

export default Sneaker;

// <table className="table">
// <tbody>
//   <tr>
//     <td>{brand}</td>
//     <td>{price}</td>
//   </tr>
//   <tr>
//     <td>{place}</td>
//     <td style={{width: "140px", height: "70px"}}>{img}</td>
//   </tr>
//   <tr>
//     <td>{name}</td>
//   </tr>
//
// </tbody>
// </table>
