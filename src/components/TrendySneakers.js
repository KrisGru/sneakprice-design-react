import Sneaker from './Sneaker';

const TrendySneakers = () => {

  return (
    <>
    <div className="container-fluid" style={{background: "gray"}}>
      <div className="row" style={{width: "100%"}}>
        <div className="col-2">kolumna 1</div>
          <div className="col" style={{maxWidth:"1350px", padding:"0", position: "relative"}}>
            <div className="sneakers" style={{height: "680px"}}>
              <h3 style={{position: "absolute", top: "200px"}}>Today's trending sneakers</h3>
              <ul className="sneaker-list">
                <li><Sneaker /></li>
                <li><Sneaker /></li>
                <li><Sneaker /></li>
                <li><Sneaker /></li>
              </ul>
              <footer style={{position: "absolute", bottom: "80px", width:"100%",textAlign: "center"}}><h1>SPONSORING COMPANIES</h1></footer>
            </div>
          </div>
        <div className="col-2">kolumna 1</div>
      </div>
    </div>
    </>
  )
}

export default TrendySneakers;
