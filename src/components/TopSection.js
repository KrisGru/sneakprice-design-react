const TopSection = () => {

  return (
  <>
    <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid" >
      <div className="row" style={{width: "100%"}}>
        <div className="col-2 col-expand-lg" style={{color:"white"}}>kolumna 1</div>

        <div className="col" style={{maxWidth: "1320px", height: "80px"}}>

          <a href="./" className="navbar-brand">Tekst</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </ button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active"><a href="./" className="nav-link">FEAUTURED STALS</a></li>
              <li className="nav-item active"><a href="./" className="nav-link">VERIFIED STORES</a></li>
              <li className="nav-item active"><a href="./" className="nav-link">CURRENCY</a></li>
              <li className="nav-item active"><a href="./" className="nav-link">SIZES</a></li>
            </ul>
          </div>

        </div>

        <div className="col-2" style={{color:"white"}}>kolumna 3</div>
      </div>
    </div>
    </div>
  </>
  )
}


export default TopSection;
