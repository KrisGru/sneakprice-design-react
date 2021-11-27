const Footer =() => {
  return (
    <div className="bgFooter">
      <div className="footer">
        <div className="part1">

          <div className="top">
            <div className="col">logo</div>
            <div className="col">
              <p className="hd">SUPPORT</p>
              <p>About us</p>
              <p>Contact</p>
              <p>FAQ & usage policy</p>
            </div>
            <div className="col">
              <p className="hd">SERVICES</p>
              <p>Featured steals</p>
              <p>Veriefed stores</p>
            </div>
          </div>


        <div className="bottom">
          <p>&copy; 2021 All Copyrights Reserved - Sneakprice</p>
          <label for="currency-select">Currency</label>
             <select name="currencies" id="currency-select">
               <option value="USD">USD</option>
               <option value="EUR">EUR</option>
               <option value="GBP">GBP</option>
               <option value="PLN">PLN</option>
             </select>
        </div>
        </div>
        <div className="scroll">Scroll to top</div>
      </div>
    </div>
  )

}

export default Footer;
