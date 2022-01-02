import SelectSizes from './reusable/Select.js';
import logo from '../assets/Sneakprice.png';
import { BsArrowUp } from 'react-icons/bs';

const Footer =() => (
  <div className="bgFooter">
    <div className="footer">
      <div className="part1">
        <div className="top">
          <div className="col"><a href="./"><img src={logo} alt="logo"/></a></div>
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
        <span><SelectSizes label="CURRENCY" name="currency" option1="USD" option2="GBP" option3="EUR" option4="PLN" /></span>
      </div>
      </div>
      <div className="scrollBtnDiv"><button className="scrollBtn" onClick={() => document.documentElement.scrollTop = 0} title="Go to top"><BsArrowUp/>Scroll to top</button></div>
    </div>
  </div>
)

export default Footer;
