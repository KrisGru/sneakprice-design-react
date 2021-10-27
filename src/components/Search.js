const Search = () => {

  return (
    <div className="bg" style={{backgroundColor:"black"}}>
    <div className="container-fluid">
      <div className="row" style={{width: "100%"}}>
      <div className="col-2" style={{color:"white"}}>kolumna 1</div>

      <div className="bg col" style={{textAlign: "center", position: "relative", width:"maxWidth: 1500px", height: "320px"}}>
        <div className="title" style={{color: "white", width: "100%", position: "absolute", top:"40%", transform: "translateY(-50%)"}}>
          <p>FIND THE BEST DEALS</p>
          <h2><strong>Sneaker price comparison engine</strong></h2>
        </div>

        <div className="search" style={{width: "100%", position:"absolute", height:"250px",bottom: "-125px", border: "2px solid yellow"}}>
          <div style={{width:"100%",position:"absolute",top:"50%", right: "50%", transform: "translate(50%, -50%)"  }}>
          <p style={{}}>search for any sneakers and find the best proces online</p>
          <input type="text" style={{height:"50px", width:"50%"}}/>
          <section style={{margin: "8px"}}>
          <p className="" style={{display: "inline-block"}}>RECENTLY SEARCHED </p> Yeezy 350 Jordan Black Alexander McQueen</section>
          </div>
        </div>
      </div>

      <div className="col-2" style={{color:"white"}}>kolumna 3</div>
      </div>
    </div>
    </div>
  )
}

export default Search;


// <div style={{position: "relative", height:"100%", width:"100%"}}>
//   <div style={{width:"100%",position: "absolute", top: "50%", right:"50%", transform: "translate(50%, -50%)"}}>
//     <h3>search for any sneakers and find the best proces online</h3>
//     <input type="text" style={{height:"50px", width:"33%"}}/>
//     <p>sfbfd</p>
//   </div>
// </div>
