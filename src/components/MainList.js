const MainList = () => {

  return (
    <>
    <div className="container-fluid" style={{background: "#141f1f"}}>
      <div className="row" style={{width: "100%"}}>
        <div className="col-3" style={{color: "white"}}>kolumna 1</div>

          <div className="col" style={{maxWidth:"1110px", padding:"0", position: "relative", height: "1540px", padding: "110px 0"}}>
            <div className="main-list" style={{width:"100%", height: "100%", color:"white" }}>
              <h1 style={{display: "inline", marginRight: "350px"}}>Find the deal for sneakers</h1>
              <p style={{display: "inline"}}>Page 1 of 10</p>
              <p>Our list of 10000+ sneakers and where to buy them</p>
              <section style={{backgroundColor:"grey", width:"100%", height: "1185px", borderRadius:"20px"}}>
                <div></div>
                <ul>
                  <li className="main-list-item">pierwszy</li>
                  <li className="main-list-item">drugi</li>
                  <li className="main-list-item">trzeci</li>
                  <li className="main-list-item">czwarty</li>
                  <li className="main-list-item">piąty</li>
                  <li className="main-list-item">szosty</li>
                  <li className="main-list-item">siodmy</li>
                </ul>
                <div className="container">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <button className="btn btn-success">1</button>
                      <button className="btn btn-success">2</button>
                      <button className="btn btn-success">3</button>
                      <button className="btn btn-success">4</button>
                  </div>
                </div>
              </section>
            </div>
          </div>1

        <div className="col-3" style={{color:"white"}}>kolumna 1</div>
    </div>
  </div>
    </>
  )
}

export default MainList;
